from django.db import models
from django.forms import ModelForm

class Input(models.Model):
	first_name = models.CharField(max_length=100)
	last_name = models.CharField(max_length=100)
	email = models.CharField(max_length=20)
	phone = models.CharField(max_length=12)
	def __str__ (self):
		return self.first_name
  
class InputForm(ModelForm):
    class Meta:
        model = Input
        fields = ['first_name', 'last_name', 'email', 'phone']