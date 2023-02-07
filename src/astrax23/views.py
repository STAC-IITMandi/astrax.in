from django.shortcuts import render,redirect
from django.http import JsonResponse
from .models import (Speaker,Sponsor,Event)

def home(request):
    content ={
        'speakers_details':Speaker.objects.all(),
        'sponsors':Sponsor.objects.all(),
    
    }
    return render(request,'base.html',content)

def event(request):
    content={
        # 'speakers_details':Speaker.objects.all(),
        # 'sponsors':Sponsor.objects.all(),
        'event_details':Event.objects.all()
        
    }
    return render(request,'event.html',content)



