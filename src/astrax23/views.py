from django.shortcuts import render,redirect
from django.http import JsonResponse
from .models import Speaker,Events

def home(request):
    speakers_details=Speaker.objects.all()
    events_details=Events.objects.all()
    return render(request,"astrax23/home.html",{"Speaker":speakers_details,"Events":events_details})



