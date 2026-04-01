from django.urls import path
from api import views

urlpatterns = [
    path('categories/', views.categories_list),
    path('categories/<int:pk>/', views.category_detail),
    path('categories/<int:pk>/products/', views.category_products),
    path('products/', views.products_list),
    path('products/<int:product_id>/', views.product_detail),
]
