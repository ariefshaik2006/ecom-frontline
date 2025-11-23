import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl font-serif font-bold mb-4 text-foreground">
            Your Cart is Empty
          </h1>
          <p className="text-muted-foreground mb-8">
            Start adding some beautiful pieces to your collection
          </p>
          <Link to="/products">
            <Button className="bg-accent text-accent-foreground">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button
        variant="ghost"
        onClick={() => navigate("/products")}
        className="mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Continue Shopping
      </Button>

      <h1 className="text-4xl font-serif font-bold mb-8 text-foreground">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex gap-4 p-4 bg-card rounded-lg shadow-elegant"
            >
              <div className="w-24 h-24 bg-muted rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg mb-1 text-foreground">
                  {item.name}
                </h3>
                {item.size && (
                  <p className="text-sm text-muted-foreground mb-2">
                    Size: {item.size}
                  </p>
                )}
                <p className="text-lg font-medium text-foreground">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1, item.size)
                    }
                    className="h-8 w-8"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center font-medium text-foreground">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1, item.size)
                    }
                    className="h-8 w-8"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card p-6 rounded-lg shadow-elegant sticky top-24">
            <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">
              Order Summary
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between text-lg font-semibold text-foreground">
                  <span>Total</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Link to="/checkout">
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:opacity-90 transition-opacity">
                Proceed to Checkout
              </Button>
            </Link>
            <p className="text-xs text-center text-muted-foreground mt-4">
              Taxes calculated at checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
