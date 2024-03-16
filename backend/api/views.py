from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import News
from .serializers import NewsSerializer

# Create your views here.

@api_view(['GET'])
def hello_world(request):
    return Response({"message": "Hellooooo, world!"})

@api_view(['GET'])
def news_list(request):
    news = News.objects.all()
    serializer = NewsSerializer(news, many=True)
    return Response(serializer.data)