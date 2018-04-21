from django.forms import ModelForm
from .models import Input
class InputForm(ModelForm):
    class Meta:
        model = Input
        fields = [
            'first_name',
            'last_name',
            'email',
            'phone',
        ]