from django.contrib import admin
from .models import Project, Image

# Register your models here.

admin.site.register([Project, Image])