import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-item.component.html',
    styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
    product = input.required<Product>();
    animationDelay = input<string>('0s');

    openGallery = output<{ product: Product; index: number }>();
    remove = output<number>();

    currentImageIndex: number = 0;

    // --- Star Rating ---
    getStarArray(rating: number): string[] {
        const stars: string[] = [];
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 >= 0.3;

        for (let i = 0; i < fullStars; i++) {
            stars.push('full');
        }
        if (hasHalf && stars.length < 5) {
            stars.push('half');
        }
        while (stars.length < 5) {
            stars.push('empty');
        }
        return stars;
    }

    formatPrice(price: number): string {
        return price.toLocaleString('ru-KZ') + ' ₸';
    }

    // --- Card Image (dots) ---
    getCurrentImage(): string {
        return this.product().images[this.currentImageIndex] || this.product().image;
    }

    setImageIndex(index: number): void {
        this.currentImageIndex = index;
    }

    // --- Share ---
    shareMenuOpen: boolean = false;

    toggleShareMenu(event: Event): void {
        event.stopPropagation();
        this.shareMenuOpen = !this.shareMenuOpen;
    }

    closeShareMenu(): void {
        this.shareMenuOpen = false;
    }

    shareWhatsApp(): void {
        const text = encodeURIComponent('Check out this product: ' + this.product().name + ' ' + this.product().link);
        window.open('https://wa.me/?text=' + text, '_blank');
        this.shareMenuOpen = false;
    }

    shareTelegram(): void {
        const url = encodeURIComponent(this.product().link);
        const text = encodeURIComponent(this.product().name);
        window.open('https://t.me/share/url?url=' + url + '&text=' + text, '_blank');
        this.shareMenuOpen = false;
    }

    // --- Gallery ---
    onImageClick(): void {
        this.openGallery.emit({ product: this.product(), index: this.currentImageIndex });
    }

    // --- Like & Delete ---
    onLike(): void {
        this.product().likes++;
    }

    onRemove(): void {
        this.remove.emit(this.product().id);
    }
}
