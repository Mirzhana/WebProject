from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListClasses.as_view()),
        path('<int:pk>/', views.DetailClasses.as_view()),

]