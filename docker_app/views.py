import collections
from django.http import HttpResponse
from django.shortcuts import render
import docker
import json
from django.http import JsonResponse
from django.template.loader import get_template
from django.template import Context, Template



client = docker.from_env()
# client = docker.DockerClient(base_url='tcp://35.244.27.235:2375')

    
  
# Create your views here.
def container(request):
    return render(request,'Containers.html')




def images(request):
    return render(request,'Images.html')


def starti(request):
    if request.method == 'POST':
        img=request.POST.get('image')
        name= 'haidd'
        res=client.containers.run(img, detach=True,name=name)
        return JsonResponse({'msg':'sucess'})

def deletei(request):
    if request.method == 'POST':
        img=request.POST.get('image')
        image=client.images.remove(img)
        return JsonResponse({'msg':'sucess'})


def startc(request):
    if request.method == 'POST':
        con=request.POST.get('container')
        container=client.containers.get(con)
        container.start()
        return JsonResponse({'msg':'sucess'})


def stopc(request):
    if request.method == 'POST':
        con=request.POST.get('container')
        container=client.containers.get(con)
        container.stop()
        return JsonResponse({'msg':'sucess'})


def deletec(request):
    if request.method == 'POST':
        con=request.POST.get('container')
        container=client.containers.get(con)
        container.stop()
        container.remove()
        return JsonResponse({'msg':'sucess'})
        

def getcontainers(request):
    containers =[]
    if request.is_ajax():
        for container in client.containers.list(all=True):
            dict = collections.OrderedDict()
            dict['id']= container.id
            container_name = client.containers.get(container.id)
            dict['state'] = container_name.attrs['State']['Status']
            dict['image'] = container_name.attrs['Config']['Image']
            dict['name']=container_name.name
            containers.append(dict)
        list= json.dumps(containers)
        decoded_json = json.loads(list) 
        t = get_template('container.html')
        html = t.render({'containers':decoded_json})
        print(html)
        return HttpResponse(html)


def getimages(request):
    images =[]
    if request.is_ajax():
        for image in client.images.list():
            dict = collections.OrderedDict()
            dict['name']= str(image).split("'")[1]
            images.append(dict)
            list= json.dumps(images)
        decoded_json = json.loads(list) 
        t = get_template('image.html')
        html = t.render({'images':decoded_json})
        return HttpResponse(html)
        
    

def console(request):
    container=request.GET['container']
    shell=request.GET['shell']
    container_name = client.containers.get(container)
    name=container_name.attrs['Config']['Image']
    return render(request,'Console.html',{'container':container,'shell':shell,'name':name})
    
