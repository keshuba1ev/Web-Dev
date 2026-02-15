# Online Store — Kaspi.kz Product Catalog

Angular application displaying a catalog of real products from [kaspi.kz](https://kaspi.kz).

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm (comes with Node.js)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

## Project Structure

```
src/app/
├── models/
│   └── product.model.ts          # Product interface
├── components/
│   ├── product-list/
│   │   ├── product-list.component.ts
│   │   ├── product-list.component.html
│   │   └── product-list.component.css
│   └── product-card/
│       ├── product-card.component.ts
│       ├── product-card.component.html
│       └── product-card.component.css
├── app.ts
├── app.html
├── app.css
├── app.config.ts
└── app.routes.ts
```

## Features

- **12 real products** from kaspi.kz
- **Responsive CSS Grid** layout (desktop, tablet, mobile)
- **Visual star ratings** (filled, half, empty)
- **Share button** (WhatsApp & Telegram)
- **Image gallery** — lightbox modal with thumbnails and arrow navigation
- **Keyboard navigation** in lightbox (← → Esc)

## Technologies

- Angular 19 (standalone components)
- TypeScript
- CSS Grid / Flexbox
