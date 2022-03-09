

from django.contrib import admin
from django.urls import path,include

import docker_app

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('docker_app.urls')),
   
]
