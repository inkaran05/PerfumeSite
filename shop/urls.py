from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('products/', views.product_list, name='product_list'),
    path('products/<int:pk>/', views.product_detail, name='product_detail'),

    # API endpoints
    path('api/perfumes/', views.perfume_list, name='perfume_list'),
    path('api/perfumes/<int:pk>/', views.perfume_detail_api, name='perfume_detail_api'),
]
