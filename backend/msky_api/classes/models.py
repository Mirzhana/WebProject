from django.db import models

# Create your models here.
class Category(models.Model):
	name = models.CharField(max_length=200)
	def __str__(self):
		return self.name
class MasterClass(models.Model):
	title = models.CharField(max_length=200)
	image = models.ImageField(upload_to='img/%Y/%m/%d', blank=True, verbose_name='Image')
	description = models.CharField(max_length=500)
	master = models.ForeignKey('master', on_delete=models.SET_NULL, null=True)
	date = models.DateField(null=True, blank=True)
	category = models.ManyToManyField(Category, help_text="Select a Category for this masterclass")
	STATUS=(
		('na', 'Not Available'),
		('a', 'Available'), 
	)
	status= models.CharField(max_length=1, choices=STATUS, blank=True, default='a')
	def __str__(self):
		return self.title
	
     
class Master(models.Model):
	first_name = models.CharField(max_length=100)
	last_name = models.CharField(max_length=100)
	def __str__(self):
		return self.first_name







