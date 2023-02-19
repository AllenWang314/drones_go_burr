from django.urls import path
from . import views

urlpatterns = [
    path('ping/', views.ping),
    path('project/', views.ProjectView.as_view()),
    path('project/<str:pk>/', views.ProjectDetailView.as_view()),
    path('image/', views.ImageView.as_view()),
    path('image/<str:pk>/', views.ImageDetailView.as_view()),
    path('search/', views.search)
]