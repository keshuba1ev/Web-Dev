from django.http import JsonResponse
from .models import Category, Product

def product_to_dict(product):
    return {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category_id': product.category.id
    }

def category_to_dict(category):
    return {
        'id': category.id,
        'name': category.name
    }

def product_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        return JsonResponse([product_to_dict(p) for p in products], safe=False)

def product_detail(request, id):
    try:
        product = Product.objects.get(pk=id)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)
        
    if request.method == 'GET':
        return JsonResponse(product_to_dict(product))

def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        return JsonResponse([category_to_dict(c) for c in categories], safe=False)

def category_detail(request, id):
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
        
    if request.method == 'GET':
        return JsonResponse(category_to_dict(category))

def category_products(request, id):
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
        
    if request.method == 'GET':
        products = category.products.all()
        return JsonResponse([product_to_dict(p) for p in products], safe=False)
