import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes?.[0]
  );

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-serif mb-4">Product not found</h1>
        <Button onClick={() => navigate("/products")}>Back to Products</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      toast.error("Please select a size");
      return;
    }
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    });
    toast.success("Added to cart!");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Button
        variant="ghost"
        onClick={() => navigate("/products")}
        className="mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl font-serif font-bold mb-4 text-foreground">
              {product.name}
            </h1>
            <p className="text-3xl font-medium text-foreground">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="py-6 border-y border-border">
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          {product.sizes && (
            <div>
              <label className="block text-sm font-medium mb-3 text-foreground">
                Select Size
              </label>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className={selectedSize === size ? "bg-accent text-accent-foreground" : ""}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <Button
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {product.inStock ? (
                <>
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart
                </>
              ) : (
                "Out of Stock"
              )}
            </Button>
            {!product.inStock && (
              <p className="text-sm text-center text-muted-foreground">
                This item is currently unavailable
              </p>
            )}
          </div>

          <div className="pt-6 border-t border-border space-y-4 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Free shipping</span>
              <span>On orders over $100</span>
            </div>
            <div className="flex justify-between">
              <span>Returns</span>
              <span>30-day return policy</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>3-5 business days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
