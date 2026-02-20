import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'online-store';

  productService = inject(ProductService);
  categories: Category[] = this.productService.getCategories();
  allProducts: Product[] = this.productService.getProducts();

  selectedCategoryId: number | null = null;
  filteredProducts: Product[] = [];

  selectCategory(category: Category) {
    this.selectedCategoryId = category.id;
    this.filteredProducts = this.allProducts.filter(p => p.categoryId === category.id);
  }
}
