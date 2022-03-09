from . import views
from django.contrib import admin
from django.urls import path,include



urlpatterns = [
   
    path('',views.images,name='images'),
    path('starti',views.starti,name='starti'),
    path('deletei',views.deletei,name='deletei'),
    path('containers',views.container,name='container'),
    path('getcontainers',views.getcontainers,name='getcontainers'),
    path('getimages',views.getimages,name='getimages'),
    path('stopc',views.stopc,name='stopc'),
    path('deletec',views.deletec,name='deletec'),
    path('console',views.console,name='console'),
    path('startc',views.startc,name='startc'),
]
