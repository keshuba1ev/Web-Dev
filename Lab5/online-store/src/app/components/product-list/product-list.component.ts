import { Component, HostListener, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, ProductItemComponent],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    // New Angular 17+ syntax for input
    products = input.required<Product[]>();

    // We don't necessarily need an output here if we just mutate the array,
    // but the requirements say ProductItem emits output to ProductList.

    onProductRemoved(productId: number) {
        const index = this.products().findIndex(p => p.id === productId);
        if (index > -1) {
            this.products().splice(index, 1);
        }
    }

    // --- Lightbox Gallery ---
    galleryProduct: Product | null = null;
    galleryIndex: number = 0;

    onOpenGallery(event: { product: Product; index: number }): void {
        this.galleryProduct = event.product;
        this.galleryIndex = event.index;
    }

    closeGallery(): void {
        this.galleryProduct = null;
        this.galleryIndex = 0;
    }

    galleryPrev(): void {
        if (this.galleryProduct) {
            this.galleryIndex = (this.galleryIndex - 1 + this.galleryProduct.images.length) % this.galleryProduct.images.length;
        }
    }

    galleryNext(): void {
        if (this.galleryProduct) {
            this.galleryIndex = (this.galleryIndex + 1) % this.galleryProduct.images.length;
        }
    }

    gallerySetIndex(index: number): void {
        this.galleryIndex = index;
    }

    @HostListener('document:keydown', ['$event'])
    handleKeydown(event: KeyboardEvent): void {
        if (!this.galleryProduct) return;
        if (event.key === 'Escape') this.closeGallery();
        if (event.key === 'ArrowLeft') this.galleryPrev();
        if (event.key === 'ArrowRight') this.galleryNext();
    }
}
