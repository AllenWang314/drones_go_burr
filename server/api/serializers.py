from rest_framework import serializers
from api.models import Project, Image 

class SearchSerializer(serializers.Serializer):
    project = serializers.CharField()
    query = serializers.CharField()

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'created', 'description', 'email', 'name']

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'created', 's3_link', 'project']