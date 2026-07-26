export const IMG = {
  hero: "https://goanparampara.com/wp-content/uploads/slider/cache/7fbe745cbf67d590426a92e0cc371d4f/Copy-of-DSC00352-1-scaled.jpg",
  story1:
    "https://goanparampara.com/wp-content/uploads/2025/07/Copy-of-DSC00459.jpg",
  story2:
    "https://goanparampara.com/wp-content/uploads/2025/07/WhatsApp-Image-2023-07-01-at-10.50.02-AM.jpeg",
  gallery: [
    "https://goanparampara.com/wp-content/uploads/slider/cache/60ac39354526d57e8521cc486f846cc9/WhatsApp-Image-2024-06-07-at-11.31.03-AM.jpg",
    "https://goanparampara.com/wp-content/uploads/slider/cache/699caa54241f5de0dae51a72c2a9a9e7/WhatsApp-Image-2025-09-17-at-5.52.31-PM.jpg",
    "https://goanparampara.com/wp-content/uploads/slider/cache/f3cb7b38b02886d4d93b07af98f9ff58/WhatsApp-Image-2025-09-17-at-5.51.54-PM.jpg",
    "https://goanparampara.com/wp-content/uploads/slider/cache/8daf6f04fb719e35457b2c1e080d4a9c/WhatsApp-Image-2025-09-17-at-5.48.41-PM.jpg",
    "https://goanparampara.com/wp-content/uploads/slider/cache/65a8f20335bd4f36ae563556900fbeed/WhatsApp-Image-2025-09-17-at-5.43.44-PM-1.jpg",
    "https://goanparampara.com/wp-content/uploads/slider/cache/9da3fe7a075ef9c433c90da22beed006/WhatsApp-Image-2025-09-17-at-5.40.27-PM-1.jpg",
  ],
};

export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};

// Placeholder catalog — replace with a live fetch from Medusa
// once the backend is wired up (see /lib/medusa.ts stub).
export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "designer-kunbi-blue-saree",
    name: "Designer Kunbi Blue Saree",
    price: "₹5,500.00",
    image:
      "https://goanparampara.com/wp-content/uploads/2026/07/IMG20260710123126.jpg-300x400.jpeg",
  },
  {
    id: "kunbi-executive-laptop-bag",
    name: "Kunbi Executive Laptop Bag",
    price: "₹1,499.00",
    image:
      "https://goanparampara.com/wp-content/uploads/2026/07/1000094638.jpg-300x169.jpeg",
  },
  {
    id: "kunbi-laptop-bag",
    name: "Kunbi Laptop Bag",
    price: "₹999.00",
    image:
      "https://goanparampara.com/wp-content/uploads/2026/07/IMG20260710183452.jpg-300x225.jpeg",
  },
  {
    id: "kunbi-office-bag",
    name: "Kunbi Office Bag",
    price: "₹699.00",
    image:
      "https://goanparampara.com/wp-content/uploads/2026/07/IMG20260710183236.jpg-300x225.jpeg",
  },
];

export const NAV_LINKS = [
  { label: "Sarees", href: "/category/sarees" },
  { label: "Accessories", href: "/category/accessories" },
  { label: "Shawls", href: "/category/shawls" },
  { label: "Jackets", href: "/category/jackets" },
  { label: "Gifting", href: "/category/gifting" },
];
