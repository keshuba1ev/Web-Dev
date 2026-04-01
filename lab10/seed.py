import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from django.contrib.auth.models import User
from api.models import Category, Product

# Create superuser
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'admin')

# Create Categories and Products
if not Category.objects.exists():
    for i in range(1, 5):
        category = Category.objects.create(name=f'Category {i}')
        for j in range(1, 6):
            Product.objects.create(
                name=f'Product {j} of Cat {i}',
                price=10.0 * j,
                description=f'Description for Product {j} of Cat {i}',
                count=100,
                is_active=True,
                category=category
            )

print("Seed completed successfully.")
