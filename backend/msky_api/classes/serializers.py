from rest_framework import serializers
from . import models


class ClassesSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'master',
            'description',
            'date',
            'category',
            'image',
        )
        model = models.MasterClass