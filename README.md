# AddMe — Add to Cart (Client)
AddMe is a modern, responsive e‑commerce frontend built with React and Vite. It lets customers browse products by category, view details, manage their cart, add a delivery address, and review past orders. It also includes a seller area to add products, see the product list, and manage orders.

## Features

- **Home and discovery** – Curated banners, best sellers, categories
- **Product catalog** – Category pages and a full products listing
- **Product details** – Image, pricing, rating, and add‑to‑cart
- **Cart & checkout** – View cart, update quantities, add delivery address
- **Orders** – View past orders
- **Authentication UI** – User login modal
- **Seller portal** – Seller login, add product, product list, and orders under `/seller`
- **Responsive UI** – Built with Tailwind CSS 4 for a clean, mobile‑first layout
- **Toasts & UX** – Friendly notifications via react‑hot‑toast

## Tech stack

- **React 19** with **Vite 7**
- **React Router 7** for routing
- **Tailwind CSS 4** for styling
- **react-hot-toast** for notifications

## Project structure

```
client/
├─ public/                # Static assets (favicon, etc.)
├─ src/
│  ├─ assets/             # Images and icons
│  ├─ components/         # Reusable UI (Navbar, Footer, cards, etc.)
│  ├─ context/            # App context (state like login modal, seller state)
│  ├─ pages/              # Route pages (Home, Cart, Products, Orders)
│  │  └─ seller/          # Seller routes (AddProduct, ProductList, Orders, Layout)
│  ├─ App.jsx             # Routes and layout
│  ├─ main.jsx            # App bootstrap
│  └─ index.css           # Global styles (Tailwind)
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
```

## Routing overview

- `/` – Home
- `/products` – All products
- `/products/:category` – Products by category
- `/products/:category/:id` – Product details
- `/cart` – Cart
- `/add-address` – Add delivery address
- `/my-orders` – Orders
- `/seller` – Seller area (login → layout)
  - `/seller` – Add product (default)
  - `/seller/product-list` – Seller product list
  - `/seller/orders` – Seller orders

## Getting started

1. **Install Node.js** (LTS recommended)
2. **Install dependencies**
   - `npm install`
3. **Run the app**
   - `npm run dev`
   - Open the URL shown in the terminal (usually `http://localhost:5173`)

## Scripts

- `npm run dev` – Start Vite dev server
- `npm run build` – Production build
- `npm run preview` – Preview the production build locally
- `npm run lint` – Lint the codebase

## Environment variables

Create a `.env` file in the project root for any runtime config. Common examples:

```
# Example
VITE_API_BASE_URL=https://api.example.com
```

Note: `.env` is already in `.gitignore` to avoid leaking secrets.

## Styling

The UI uses Tailwind CSS 4. Utility classes are applied directly in components. You can extend styles in `index.css` or via Tailwind config if needed.

## Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Commit your changes: `git commit -m "Describe your change"`
3. Push the branch: `git push -u origin feature/your-feature`
4. Open a Pull Request

## License

Add your license of choice here (e.g., MIT). If not specified, all rights reserved.
