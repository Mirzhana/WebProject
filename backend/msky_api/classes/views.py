from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from . import models
from . import serializers 

class ListClasses(generics.ListCreateAPIView):
    queryset = models.MasterClass.objects.all()
    serializer_class = serializers.ClassesSerializer


class DetailClasses(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.MasterClass.objects.all()
    serializer_class = serializers.ClassesSerializer
