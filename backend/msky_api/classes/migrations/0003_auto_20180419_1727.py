# Generated by Django 2.0.4 on 2018-04-19 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classes', '0002_masterclass_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='masterclass',
            name='image',
            field=models.ImageField(blank=True, upload_to='img/%Y/%m/%d', verbose_name='Image'),
        ),
    ]
