import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-product transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
          {product.category}
        </p>
        <h3 className="font-serif text-lg mb-2 text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-foreground">
            ${product.price.toFixed(2)}
          </p>
          {!product.inStock && (
            <span className="text-xs text-muted-foreground">Out of stock</span>
          )}
        </div>
      </div>
    </Link>
  );
};
