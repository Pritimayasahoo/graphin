# Shopping Cart Application

A ReactJS-based e-commerce shopping cart application with Context API for state management and localStorage for data persistence.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository
```bash
git clone <https://github.com/Pritimayasahoo/graphin.git>
cd shopping-cart
```

2. Install dependencies
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will run on `http://localhost:5173` (Vite's default port)

Open your browser and navigate to the URL shown in the terminal.

## Building for Production

To create a production build:
```bash
npm run build
```

The optimized build will be created in the `dist/` folder.

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
shopping-cart/
├── public/
├── src/
│   ├── components/
│   │   ├── ProductList.js
│   │   ├── ProductCard.js
│   │   ├── Cart.js
│   │   └── CartItem.js
│   ├── context/
│   │   └── CartContext.js
│   ├── data/
│   │   └── products.js
│   ├── styles/
│   │   ├── ProductList.css
│   │   ├── ProductCard.css
│   │   ├── Cart.css
│   │   └── CartItem.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Features

- Browse products with images and pricing
- Add products to cart
- Update item quantities
- Remove items from cart
- Real-time cart total calculation
- localStorage persistence (cart data persists after page refresh)
- Responsive design for all devices

## Technologies Used

- React
- Vite (Build tool)
- React Context API
- CSS3
- localStorage API

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)