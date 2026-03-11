class Product:
    def __init__(self, name, price, category):
        self.name = name
        self.price = price
        self.category = category

    def display_info(self):
        return f"{self.name} ({self.category}) - ${self.price}"

    def apply_discount(self, percent):
        self.price -= self.price * (percent / 100)
    
    def __str__(self):
        return f"Product: {self.name}, Price: ${self.price:.2f}"

class ElectronicProduct(Product):
    def __init__(self, name, price, brand, warranty_years):
        super().__init__(name, price, "Electronics")
        self.brand = brand
        self.warranty_years = warranty_years

    def extend_warranty(self, years):
        self.warranty_years += years

    def display_info(self):
        return f"{self.name} by {self.brand} - ${self.price} ({self.warranty_years} years warranty)"

class ClothingProduct(Product):
    def __init__(self, name, price, size, material):
        super().__init__(name, price, "Clothing")
        self.size = size
        self.material = material

    def try_on(self):
        return f"Trying on the {self.name} of size {self.size}."

    def display_info(self):
        return f"{self.name} ({self.material}) - Size: {self.size} - ${self.price}"
