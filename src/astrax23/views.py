from django.shortcuts import render,redirect
from django.http import JsonResponse

def home(request):
    return render(request,'astrax23/base.html')
