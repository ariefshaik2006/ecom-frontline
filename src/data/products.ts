export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  images: string[];
  sizes?: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Artisan Ceramic Vase",
    price: 89.00,
    image: "/placeholder-product-1.jpg",
    category: "Home Decor",
    description: "Handcrafted ceramic vase with unique glaze patterns. Each piece is one-of-a-kind, made by skilled artisans using traditional techniques.",
    images: ["/placeholder-product-1.jpg"],
    inStock: true,
  },
  {
    id: 2,
    name: "Minimalist Desk Lamp",
    price: 125.00,
    image: "/placeholder-product-2.jpg",
    category: "Lighting",
    description: "Contemporary desk lamp with adjustable arm and dimmable LED. Perfect for modern workspaces with its clean lines and functional design.",
    images: ["/placeholder-product-2.jpg"],
    inStock: true,
  },
  {
    id: 3,
    name: "Wool Throw Blanket",
    price: 145.00,
    image: "/placeholder-product-3.jpg",
    category: "Textiles",
    description: "Luxuriously soft merino wool blanket with subtle herringbone pattern. Ethically sourced and perfect for cozy evenings.",
    images: ["/placeholder-product-3.jpg"],
    inStock: true,
  },
  {
    id: 4,
    name: "Leather Tote Bag",
    price: 220.00,
    image: "/placeholder-product-4.jpg",
    category: "Accessories",
    description: "Premium full-grain leather tote with brass hardware. Spacious interior with multiple pockets, ages beautifully over time.",
    images: ["/placeholder-product-4.jpg"],
    sizes: ["Small", "Medium", "Large"],
    inStock: true,
  },
  {
    id: 5,
    name: "Marble Serving Board",
    price: 78.00,
    image: "/placeholder-product-5.jpg",
    category: "Kitchen",
    description: "Natural white marble serving board with live edge detail. Perfect for entertaining, doubles as striking kitchen decor.",
    images: ["/placeholder-product-5.jpg"],
    inStock: true,
  },
  {
    id: 6,
    name: "Organic Cotton Robe",
    price: 98.00,
    image: "/placeholder-product-6.jpg",
    category: "Textiles",
    description: "Lightweight organic cotton robe with kimono-style sleeves. Breathable and comfortable for year-round lounging.",
    images: ["/placeholder-product-6.jpg"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: 7,
    name: "Brass Wall Sconce",
    price: 165.00,
    image: "/placeholder-product-7.jpg",
    category: "Lighting",
    description: "Vintage-inspired brass wall sconce with frosted glass shade. Adds warmth and character to any room.",
    images: ["/placeholder-product-7.jpg"],
    inStock: false,
  },
  {
    id: 8,
    name: "Linen Cushion Set",
    price: 85.00,
    image: "/placeholder-product-8.jpg",
    category: "Home Decor",
    description: "Set of two linen cushion covers in neutral tones. Pre-washed for softness, features hidden zipper closures.",
    images: ["/placeholder-product-8.jpg"],
    inStock: true,
  },
];

export const categories = [
  "All",
  "Home Decor",
  "Lighting",
  "Textiles",
  "Accessories",
  "Kitchen",
];
