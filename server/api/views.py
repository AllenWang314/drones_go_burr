from django import http
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Project, Image
from rest_framework.response import Response
from rest_framework import status, mixins, generics
from api.serializers import ProjectSerializer, ImageSerializer, SearchSerializer

@api_view(['GET'])
def ping(request):
    if request.method == 'GET':
        return Response({"message": "pong"}, status=status.HTTP_200_OK)

@api_view(['POST'])
def search(request):
    if request.method == 'POST':
        serializer = SearchSerializer(data=request.data)
        if serializer.is_valid():
            embedding = _text_to_embedding(serializer.data["query"])
            images = Image.objects.all().filter(project=serializer.data["project"])
            images_sorted = sorted(images, key=lambda x: _cosine_distance(x.embedding, embedding), reverse=True)
            return Response(ImageSerializer(images_sorted, many=True).data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProjectView(mixins.CreateModelMixin, mixins.ListAPIView, generics.GenericAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

class ProjectDetailView(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

class ImageView(mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Project.objects.all()
    serializer_class = ImageSerializer

    def post(self, request, *args, **kwargs):
        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():
            embedding = _img_to_embedding(serializer.data["s3_link"])
            project = Project.objects.get(pk=serializer.data["project"])
            image = Image(
                project=project,
                s3_link=serializer.data["s3_link"],
                embedding=embedding,
            )
            image.save()
            return Response(ImageSerializer(image).data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ImageDetailView(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = Project.objects.all()
    serializer_class = ImageSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

import torch
import requests
import numpy as np
import pandas as pd
from io import BytesIO
from PIL import Image as ImagePIL
from transformers import CLIPProcessor, CLIPModel, CLIPTokenizer, CLIPImageProcessor

#Selecting device based on availability of GPUs
device = "cuda" if torch.cuda.is_available() else "cpu"
    
#Defining model, processor and tokenizer
model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32").to(device)
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")
# imageProcessor = CLIPImageProcessor.from_pretrained("openai/clip-vit-base-patch32")

def _img_to_embedding(url):
    image = ImagePIL.open(requests.get(url, stream=True).raw)
    image_processed = processor(text=None,images=image,return_tensors='pt')['pixel_values'].to(device)
    image_embedding = model.get_image_features(image_processed)
    return image_embedding.tolist()[0]

def _text_to_embedding(prompt):
    inputs = tokenizer(prompt, return_tensors="pt")
    text_embedding = model.get_text_features(**inputs)
    return text_embedding.tolist()[0]

def _cosine_distance(first, second):
    first_vector = np.array(first)
    second_vector = np.array(second)
    return np.dot(first_vector, second_vector) / np.linalg.norm(first_vector) / np.linalg.norm(second_vector) 
