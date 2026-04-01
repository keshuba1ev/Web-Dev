# To switch between implementations, uncomment the corresponding section

# --- Level 2: FBV ---
# from .fbv import (
#     categories_list, 
#     category_detail, 
#     category_products,
#     products_list, 
#     product_detail
# )

# --- Level 3: CBV ---
# from .cbv import (
#     CategoryListAPIView, 
#     CategoryDetailAPIView, 
#     CategoryProductsAPIView,
#     ProductListAPIView, 
#     ProductDetailAPIView
# )
# categories_list = CategoryListAPIView.as_view()
# category_detail = CategoryDetailAPIView.as_view()
# category_products = CategoryProductsAPIView.as_view()
# products_list = ProductListAPIView.as_view()
# product_detail = ProductDetailAPIView.as_view()

# --- Level 4: Mixins ---
# from .mixins import (
#     CategoryListAPIView, 
#     CategoryDetailAPIView, 
#     CategoryProductsAPIView,
#     ProductListAPIView, 
#     ProductDetailAPIView
# )
# categories_list = CategoryListAPIView.as_view()
# category_detail = CategoryDetailAPIView.as_view()
# category_products = CategoryProductsAPIView.as_view()
# products_list = ProductListAPIView.as_view()
# product_detail = ProductDetailAPIView.as_view()

# --- Level 5: Generics ---
from .generics import (
    CategoryListAPIView, 
    CategoryDetailAPIView, 
    CategoryProductsAPIView,
    ProductListAPIView, 
    ProductDetailAPIView
)
categories_list = CategoryListAPIView.as_view()
category_detail = CategoryDetailAPIView.as_view()
category_products = CategoryProductsAPIView.as_view()
products_list = ProductListAPIView.as_view()
product_detail = ProductDetailAPIView.as_view()
