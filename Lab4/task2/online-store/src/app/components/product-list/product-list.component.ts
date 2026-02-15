import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, ProductCardComponent],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    products: Product[] = [
        {
            id: 1,
            name: 'Samsung Galaxy S25 Ultra',
            description: 'Флагманский смартфон Samsung с 6.9" Dynamic AMOLED дисплеем, процессором Snapdragon 8 Elite и титановым корпусом.',
            price: 649990,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800',
            images: [
                'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800',
                'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800',
                'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800'
            ],
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-12-gb-256-gb-titanium-silverblue-124839488/'
        },
        {
            id: 2,
            name: 'Apple iPhone 16 Pro Max',
            description: 'Премиум-смартфон Apple с чипом A18 Pro, 48 Мп камерой и экраном Super Retina XDR 6.9 дюймов.',
            price: 799990,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
            images: [
                'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
                'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
                'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800'
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-desert-titanium-121940962/'
        },
        {
            id: 3,
            name: 'Apple MacBook Air 13 M2',
            description: 'Ультратонкий ноутбук Apple с чипом M2, 8 ГБ ОЗУ и 256 ГБ SSD. Безшумный и производительный для работы и учёбы.',
            price: 419900,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
            images: [
                'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
                'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
                'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800'
            ],
            link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-3-2022-mlxw3-8-gb-256-gb-macos-grey-106296168/'
        },
        {
            id: 4,
            name: 'Xiaomi Redmi Note 13 Pro',
            description: 'Смартфон с камерой 200 Мп, AMOLED дисплеем 120 Гц и быстрой зарядкой 67 Вт. Отличный выбор за свою цену.',
            price: 109990,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800',
            images: [
                'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800',
                'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800',
                'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800'
            ],
            link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-8-gb-256-gb-midnight-black-116451618/'
        },
        {
            id: 5,
            name: 'Apple AirPods Pro 2',
            description: 'Беспроводные наушники с активным шумоподавлением, адаптивным звуком и зарядным кейсом USB-C.',
            price: 109990,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800',
            images: [
                'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800',
                'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800',
                'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800'
            ],
            link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-usb-c-mtjv3-white-113703374/'
        },
        {
            id: 6,
            name: 'Sony PlayStation 5 Slim',
            description: 'Игровая консоль нового поколения с поддержкой 4K, SSD на 1 ТБ, обновлённая модель с компактным дизайном.',
            price: 299990,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800',
            images: [
                'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800',
                'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800',
                'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800'
            ],
            link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-1-tb-white-115775468/'
        },
        {
            id: 7,
            name: 'Dyson V15 Detect',
            description: 'Беспроводной пылесос с лазерной подсветкой пыли, мощным всасыванием и HEPA-фильтрацией.',
            price: 399990,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800',
            images: [
                'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800',
                'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800',
                'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800'
            ],
            link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-yellow-iron-nickel-110365210/'
        },
        {
            id: 8,
            name: 'Samsung Galaxy Watch 7',
            description: 'Умные часы с BioActive-датчиком, GPS и круглым Super AMOLED дисплеем. Идеальные для фитнеса.',
            price: 149990,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800',
            images: [
                'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800',
                'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800',
                'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800'
            ],
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-7-44mm-green-121756064/'
        },
        {
            id: 9,
            name: 'ASUS Vivobook 15 X1504ZA',
            description: 'Ноутбук для учёбы и работы с 15.6" Full HD экраном, Intel Core i5-1235U, 8 ГБ ОЗУ и 512 ГБ SSD.',
            price: 249900,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
            images: [
                'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
                'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
                'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800'
            ],
            link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1504za-nj604-15-6-8-gb-ssd-512-gb-core-i5-intel-uhd-graphics-dos-grey-111689974/'
        },
        {
            id: 10,
            name: 'Apple iPad 10 2022',
            description: 'Планшет с 10.9" Liquid Retina дисплеем, чипом A14 Bionic и поддержкой Apple Pencil первого поколения.',
            price: 249990,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800',
            images: [
                'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800',
                'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800',
                'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800'
            ],
            link: 'https://kaspi.kz/shop/p/apple-ipad-10-2022-10-9-64-gb-wi-fi-silver-mpq03-109085988/'
        },
        {
            id: 11,
            name: 'JBL Charge 5',
            description: 'Портативная Bluetooth-колонка с мощным звуком, защитой IP67 от воды и пыли. До 20 часов автономной работы.',
            price: 59990,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800',
            images: [
                'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800',
                'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800',
                'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800'
            ],
            link: 'https://kaspi.kz/shop/p/jbl-charge-5-black-100828108/'
        },
        {
            id: 12,
            name: 'Lenovo IdeaPad 3 15IAU7',
            description: 'Универсальный ноутбук с экраном 15.6" Full HD, процессором Intel Core i3-1215U, 8 ГБ ОЗУ и SSD 256 ГБ.',
            price: 189990,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1531297172864-ff7321c2237b?w=800',
            images: [
                'https://images.unsplash.com/photo-1531297172864-ff7321c2237b?w=800',
                'https://images.unsplash.com/photo-1531297172864-ff7321c2237b?w=800',
                'https://images.unsplash.com/photo-1531297172864-ff7321c2237b?w=800'
            ],
            link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15iau7-82rk00nmrk-15-6-8-gb-ssd-256-gb-core-i3-intel-uhd-graphics-dos-abyss-blue-108915362/'
        }
    ];

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
