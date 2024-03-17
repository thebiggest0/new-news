from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello_world),
    path('news/', views.news_list),
    # path('news/<int:pk>/', views.news_detail),
    path('news/<str:category>/', views.selected_news),
]