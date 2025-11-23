import { Link } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Elegant home interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        </div>
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
            Curated for Living
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Discover timeless pieces that transform your space into a sanctuary of style and comfort.
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-accent text-accent-foreground hover:opacity-90 transition-opacity animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground">
            Featured Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handpicked pieces that embody craftsmanship and timeless design
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/products">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-foreground">
                Crafted with Purpose
              </h2>
              <p className="text-muted-foreground mb-4">
                Every piece in our collection tells a story of craftsmanship, sustainability, and thoughtful design. We work with artisans who share our commitment to quality and ethical production.
              </p>
              <p className="text-muted-foreground mb-6">
                From locally sourced materials to time-honored techniques, each item is chosen to bring lasting beauty to your home.
              </p>
              <Link to="/products">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
            <div className="aspect-square bg-muted rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
