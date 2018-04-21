from django.contrib import admin

from .models import MasterClass, Master, Category

admin.site.register(MasterClass)
admin.site.register(Master)
admin.site.register(Category)