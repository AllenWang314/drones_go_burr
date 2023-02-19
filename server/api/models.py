import uuid
from django.db import models
from django.contrib.postgres.fields import ArrayField

class Project(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    created = models.DateTimeField(auto_now_add=True)
    description = models.TextField()
    email = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    
    def __str__(self):
        return f"dataset {self.name}"

class Image(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    created = models.DateTimeField(auto_now_add=True)
    s3_link = models.CharField(max_length=400)
    embedding = ArrayField(models.FloatField(null=False, blank=True), blank=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, null=False, blank=False)
    description = models.CharField(max_length=400, blank=True, null=True) 