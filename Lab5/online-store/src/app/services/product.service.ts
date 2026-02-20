import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    getCategories(): Category[] {
        return [
            { id: 1, name: 'Smartphones' },
            { id: 2, name: 'Laptops' },
            { id: 3, name: 'Tablets' },
            { id: 4, name: 'Headphones' }
        ];
    }

    getProducts(): Product[] {
        return [
            // Smartphones
            {
                id: 1, categoryId: 1,
                name: 'Samsung Galaxy S25 Ultra 12GB/256GB Titanium Black',
                description: 'Flagship smartphone featuring a 6.8-inch display, 200MP camera, and Snapdragon 8 Gen 4 processor.',
                price: 669894, rating: 5,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Samsung_Galaxy_S24%2C_Sperrbildschirm.JPG/600px-Samsung_Galaxy_S24%2C_Sperrbildschirm.JPG',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Samsung_Galaxy_S24%2C_Sperrbildschirm.JPG/600px-Samsung_Galaxy_S24%2C_Sperrbildschirm.JPG'],
                link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116044354/?c=750000000',
                likes: 0
            },
            {
                id: 2, categoryId: 1,
                name: 'Apple iPhone 15 Pro Max 256GB Black Titanium',
                description: 'Powerful and sleek, featuring an A17 Pro chip and a durable titanium frame.',
                price: 585990, rating: 4.9,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/IPhone_Pro.jpg/600px-IPhone_Pro.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/IPhone_Pro.jpg/600px-IPhone_Pro.jpg'],
                link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-titan-113138420/?c=750000000',
                likes: 0
            },
            {
                id: 3, categoryId: 1,
                name: 'Google Pixel 8 Pro 12GB/128GB Obsidian',
                description: 'The best Android experience with incredible AI camera features.',
                price: 450000, rating: 4.8,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Google_Pixel_8%2C_shown_in_Shibuya_Stream_2.jpg/600px-Google_Pixel_8%2C_shown_in_Shibuya_Stream_2.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Google_Pixel_8%2C_shown_in_Shibuya_Stream_2.jpg/600px-Google_Pixel_8%2C_shown_in_Shibuya_Stream_2.jpg'],
                link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-128-gb-chernyi-113824131/?c=750000000',
                likes: 0
            },
            {
                id: 4, categoryId: 1,
                name: 'Xiaomi 13T Pro 12GB/512GB Black',
                description: 'High performance smartphone with Leica cameras and 120W fast charging.',
                price: 299990, rating: 4.7,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Xiaomi_13_front.jpg/600px-Xiaomi_13_front.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Xiaomi_13_front.jpg/600px-Xiaomi_13_front.jpg'],
                link: 'https://kaspi.kz/shop/p/xiaomi-13t-pro-12-gb-512-gb-chernyi-113426217/?c=750000000',
                likes: 0
            },
            {
                id: 5, categoryId: 1,
                name: 'OnePlus 12 16GB/512GB Silky Black',
                description: 'Next-level flagship performance with Hasselblad cameras.',
                price: 420000, rating: 4.8,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/OnePlus_9_Pro_Morning_Mist.jpg/600px-OnePlus_9_Pro_Morning_Mist.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/OnePlus_9_Pro_Morning_Mist.jpg/600px-OnePlus_9_Pro_Morning_Mist.jpg'],
                link: 'https://kaspi.kz/shop/p/oneplus-12-16-gb-512-gb-chernyi-115049363/?c=750000000',
                likes: 0
            },
            // Laptops
            {
                id: 6, categoryId: 2,
                name: 'Apple MacBook Air 13 M2 8GB/256GB Silver',
                description: 'Supercharged by M2, perfectly portable.',
                price: 495000, rating: 4.9,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/600px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/600px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg'],
                link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxy3-serebristyi-106110064/?c=750000000',
                likes: 0
            },
            {
                id: 7, categoryId: 2,
                name: 'ASUS ROG Zephyrus G14 16GB/1TB',
                description: 'Powerful gaming laptop in a compact 14-inch form factor.',
                price: 850000, rating: 4.8,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Asus_ROG_Strix_Hero_Edition.jpg/600px-Asus_ROG_Strix_Hero_Edition.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Asus_ROG_Strix_Hero_Edition.jpg/600px-Asus_ROG_Strix_Hero_Edition.jpg'],
                link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-ga402xv-14-16-gb-ssd-1000-gb-win-11-hn039w-90nr0c01-m00210-seryi-113076739/?c=750000000',
                likes: 0
            },
            {
                id: 8, categoryId: 2,
                name: 'Lenovo ThinkPad X1 Carbon Gen 11',
                description: 'Premium business laptop with legendary keyboard and durability.',
                price: 920000, rating: 4.7,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Lenovo_ThinkPad_X1_Ultrabook_%28Nov_16%2C_2012%29.png/600px-Lenovo_ThinkPad_X1_Ultrabook_%28Nov_16%2C_2012%29.png',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Lenovo_ThinkPad_X1_Ultrabook_%28Nov_16%2C_2012%29.png/600px-Lenovo_ThinkPad_X1_Ultrabook_%28Nov_16%2C_2012%29.png'],
                link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-gen-11-14-16-gb-ssd-512-gb-win-11-pro-21hm003krk-chernyi-111008064/?c=750000000',
                likes: 0
            },
            {
                id: 9, categoryId: 2,
                name: 'Dell XPS 13 Plus 16GB/512GB',
                description: 'Radical design with seamless glass touchpad and edge-to-edge keyboard.',
                price: 890000, rating: 4.6,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Dell_XPS_13_9350_laptop.jpg/600px-Dell_XPS_13_9350_laptop.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Dell_XPS_13_9350_laptop.jpg/600px-Dell_XPS_13_9350_laptop.jpg'],
                link: 'https://kaspi.kz/shop/p/dell-xps-13-plus-9320-13-4-16-gb-ssd-512-gb-win-11-pro-210-bdxw-pl-serebristyi-108081691/?c=750000000',
                likes: 0
            },
            {
                id: 10, categoryId: 2,
                name: 'HP Spectre x360 2-in-1',
                description: 'Versatile convertible laptop with gorgeous OLED display.',
                price: 750000, rating: 4.8,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/HP_Spectre_x360_13-ac000_20170530.jpg/600px-HP_Spectre_x360_13-ac000_20170530.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/HP_Spectre_x360_13-ac000_20170530.jpg/600px-HP_Spectre_x360_13-ac000_20170530.jpg'],
                link: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-ef2003nw-13-5-16-gb-ssd-1000-gb-win-11-8v6k9ea-chernyi-113647167/?c=750000000',
                likes: 0
            },
            // Tablets
            {
                id: 11, categoryId: 3,
                name: 'Apple iPad Pro 11 M2 128GB Space Gray',
                description: 'The ultimate iPad experience with the breakthrough M2 chip.',
                price: 430000, rating: 4.9,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/IPad_Pro_12.9-inch_%283rd_generation%29_-_Space_Gray.jpg/600px-IPad_Pro_12.9-inch_%283rd_generation%29_-_Space_Gray.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/IPad_Pro_12.9-inch_%283rd_generation%29_-_Space_Gray.jpg/600px-IPad_Pro_12.9-inch_%283rd_generation%29_-_Space_Gray.jpg'],
                link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2022-wifi-11-djuim-8-gb-128-gb-seryi-107277684/?c=750000000',
                likes: 0
            },
            {
                id: 12, categoryId: 3,
                name: 'Samsung Galaxy Tab S9 11" 8GB/128GB',
                description: 'Premium Android tablet with AMOLED display and S Pen included.',
                price: 380000, rating: 4.8,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Samsung_Galaxy_Tab_S6_10.5_inch.png/600px-Samsung_Galaxy_Tab_S6_10.5_inch.png',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Samsung_Galaxy_Tab_S6_10.5_inch.png/600px-Samsung_Galaxy_Tab_S6_10.5_inch.png'],
                link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-wi-fi-11-djuim-8-gb-128-gb-bezhevyi-112349767/?c=750000000',
                likes: 0
            },
            {
                id: 13, categoryId: 3,
                name: 'Lenovo Tab P11 Pro Gen 2 8GB/256GB',
                description: 'Great entertainment tablet with 120Hz OLED display.',
                price: 180000, rating: 4.5,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Lenovo_IdeaPad_Miix_10_Tablet_%281%29.jpg/600px-Lenovo_IdeaPad_Miix_10_Tablet_%281%29.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Lenovo_IdeaPad_Miix_10_Tablet_%281%29.jpg/600px-Lenovo_IdeaPad_Miix_10_Tablet_%281%29.jpg'],
                link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-pro-gen-2-11-2-djuim-8-gb-256-gb-seryi-106571556/?c=750000000',
                likes: 0
            },
            {
                id: 14, categoryId: 3,
                name: 'Xiaomi Pad 6 8GB/256GB',
                description: 'Excellent value tablet with smooth 144Hz screen and powerful processor.',
                price: 159000, rating: 4.7,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Xiaomi_Mi_Pad_2.jpg/600px-Xiaomi_Mi_Pad_2.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Xiaomi_Mi_Pad_2.jpg/600px-Xiaomi_Mi_Pad_2.jpg'],
                link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112351299/?c=750000000',
                likes: 0
            },
            {
                id: 15, categoryId: 3,
                name: 'Apple iPad Air 5 10.9" M1 64GB',
                description: 'Light, bright, and full of might with the Apple M1 chip.',
                price: 295000, rating: 4.8,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/IPad_Air_2020_%2851012790753%29.jpg/600px-IPad_Air_2020_%2851012790753%29.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/IPad_Air_2020_%2851012790753%29.jpg/600px-IPad_Air_2020_%2851012790753%29.jpg'],
                link: 'https://kaspi.kz/shop/p/apple-ipad-air-2022-wi-fi-10-9-djuim-8-gb-64-gb-seryi-104235471/?c=750000000',
                likes: 0
            },
            // Headphones
            {
                id: 16, categoryId: 4,
                name: 'Sony WH-1000XM5 Wireless Noise Cancelling',
                description: 'Industry leading noise cancellation and premium sound.',
                price: 189000, rating: 4.9,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Sony_MDR-1R_%281%29.jpg/600px-Sony_MDR-1R_%281%29.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Sony_MDR-1R_%281%29.jpg/600px-Sony_MDR-1R_%281%29.jpg'],
                link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105223634/?c=750000000',
                likes: 0
            },
            {
                id: 17, categoryId: 4,
                name: 'Apple AirPods Pro 2nd Gen',
                description: 'Active Noise Cancellation and adaptive transparency mode.',
                price: 115000, rating: 4.8,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/AirPods_Pro_%282nd_generation%29.jpg/600px-AirPods_Pro_%282nd_generation%29.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/AirPods_Pro_%282nd_generation%29.jpg/600px-AirPods_Pro_%282nd_generation%29.jpg'],
                link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
                likes: 0
            },
            {
                id: 18, categoryId: 4,
                name: 'Samsung Galaxy Buds2 Pro',
                description: 'Ultimate Hi-Fi sound in your ear with seamless connectivity.',
                price: 79000, rating: 4.7,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Samsung_Galaxy_buds.jpg/600px-Samsung_Galaxy_buds.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Samsung_Galaxy_buds.jpg/600px-Samsung_Galaxy_buds.jpg'],
                link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-seryi-106126602/?c=750000000',
                likes: 0
            },
            {
                id: 19, categoryId: 4,
                name: 'Sennheiser Momentum 4 Wireless',
                description: 'Incredible 60-hour battery life and audiophile signature sound.',
                price: 150000, rating: 4.8,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sennheiser_Momentum_Brown.jpg/600px-Sennheiser_Momentum_Brown.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sennheiser_Momentum_Brown.jpg/600px-Sennheiser_Momentum_Brown.jpg'],
                link: 'https://kaspi.kz/shop/p/sennheiser-momentum-4-wireless-chernyi-106404323/?c=750000000',
                likes: 0
            },
            {
                id: 20, categoryId: 4,
                name: 'Bose QuietComfort Earbuds II',
                description: 'Customized sound and the worlds best noise cancellation.',
                price: 135000, rating: 4.7,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bose_QuietComfort_Earbuds.jpg/600px-Bose_QuietComfort_Earbuds.jpg',
                images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bose_QuietComfort_Earbuds.jpg/600px-Bose_QuietComfort_Earbuds.jpg'],
                link: 'https://kaspi.kz/shop/p/bose-quietcomfort-earbuds-ii-chernyi-106950337/?c=750000000',
                likes: 0
            }
        ];
    }
}
