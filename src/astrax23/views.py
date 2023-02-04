from django.shortcuts import render,redirect
from django.http import JsonResponse
from .models import (Speaker,Sponsor,Team,Event)

def home(request):
    content ={
        'speakers_details':Speaker.objects.all(),
        'sponsors':Sponsor.objects.all(),
    }
    return render(request,'base.html',content)

def team(request):
    content ={
        'team_members':Team.objects.all(),
    }
    return render(request,'team.html',content)    



