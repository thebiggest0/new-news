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
    news = News.objects.all().order_by('-publishDate')
    serializer = NewsSerializer(news, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def selected_news(request, category):
    news = News.objects.filter(category=category)
    serializer = NewsSerializer(news, many=True)
    return Response(serializer.data)

# @api_view(['GET'])
# def news_detail(request, pk):
#     news = News.objects.get(news_id=pk)
#     serializer = NewsSerializer(news, many=False)
#     return Response(serializer.data)

# @api_view(['POST'])
# def news_create(request):
#     serializer = NewsSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)

# @api_view(['POST'])
# def news_update(request, pk):
#     news = News.objects.get(news_id=pk)
#     serializer = NewsSerializer(instance=news, data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)