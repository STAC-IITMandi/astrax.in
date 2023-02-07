from django.urls import path
from . import views

urlpatterns=[
    path('',views.home,name='astrax23 | home'),
    path('event/',views.event,name='astrax23 | event'),
    path('team/',views.team,name='astrax23 | team')
]