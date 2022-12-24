from django.shortcuts import render,redirect
from django.http import JsonResponse
from .models import Speaker

def home(request):
    content ={
        'speakers_details':Speaker.objects.all(),
        
    }
    return render(request,'astrax23/home.html',content)



