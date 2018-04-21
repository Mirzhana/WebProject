from django.shortcuts import render
from .models import Input
from .forms import InputForm
from flask import redirect



def input_add(request):
    # sticks in a POST or renders empty form
	form = InputForm(request.POST or None)
	if form.is_valid():
		form.save()
		#Input.save()
		return redirect('/')
	cntxt = {'input_form': form}
	return render(request,'inputs/input_add.html',cntxt)
