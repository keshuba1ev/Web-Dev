from models import Product, ElectronicProduct, ClothingProduct

def main():
    laptop = ElectronicProduct("Laptop Pro", 1200, "TechBrand", 2)
    tshirt = ClothingProduct("Casual T-Shirt", 25, "L", "Cotton")
    generic = Product("Generic Box", 10, "Misc")

    products = [laptop, tshirt, generic]

    for product in products:
        print(product)
        print(product.display_info())
        if isinstance(product, ElectronicProduct):
            product.extend_warranty(1)
            print(f"Extended warranty. New info: {product.display_info()}")
        elif isinstance(product, ClothingProduct):
            print(product.try_on())
        print("-" * 20)

if __name__ == "__main__":
    main()
