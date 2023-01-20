from django.shortcuts import render,redirect
from django.http import JsonResponse
from .models import (Speaker,Sponsor)

def home(request):
    content ={
        'speakers_details':Speaker.objects.all(),
        'sponsors':Sponsor.objects.all()
    }
    return render(request,'base.html',content)



