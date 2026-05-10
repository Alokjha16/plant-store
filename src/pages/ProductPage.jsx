import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  ArrowLeft,
  Droplets,
  Sun,
  Gauge,
  ChevronRight,
} from "lucide-react";
import PlantCard from "../components/PlantCard";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { plants } from "../data/plants";

const CareTag = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col items-center gap-1.5 bg-card border border-border rounded-xl p-3 flex-1 min-w-[80px]">
    <Icon size={16} className="text-accent" />
    <span className="font-sans text-[10px] text-muted">{label}</span>
    <span className="font-sans text-xs font-semibold text-heading">{value}</span>
  </div>
);

const ProductPage = ({ onAddToCart }) => {
  const { id } = useParams();
  const plant = plants.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [added, setAdded] = useState(false);

  if (!plant) {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center gap-4 pt-16">
        <p className="font-display text-2xl text-heading">Plant not found 🌿</p>
        <Link to="/" className="text-accent text-sm hover:underline">
          ← Back to home
        </Link>
      </div>
    );
  }

  const relatedPlants = plants.filter((p) => p.id !== plant.id).slice(0, 4);
  const discount = Math.round(
    ((plant.originalPrice - plant.price) / plant.originalPrice) * 100
  );

  const handleAddToCart = () => {
    onAddToCart?.();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-bg pt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted font-sans mb-8">
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <span>Products</span>
          <ChevronRight size={12} />
          <span className="text-body">{plant.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card aspect-square">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-full object-cover"
              />
              {plant.badge && (
                <span className="absolute top-4 left-4 bg-accent text-bg text-xs font-sans font-semibold px-3 py-1.5 rounded-full">
                  {plant.badge}
                </span>
              )}
              {discount > 0 && (
                <span className="absolute top-4 right-4 bg-red-500/90 text-white text-xs font-sans font-semibold px-3 py-1.5 rounded-full">
                  -{discount}% off
                </span>
              )}
            </div>

            <div className="flex gap-3">
              {relatedPlants.slice(0, 3).map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="w-16 h-16 rounded-xl overflow-hidden border border-border hover:border-accent transition-colors"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="font-sans text-xs text-accent font-semibold uppercase tracking-widest mb-2">
                {plant.category}
              </p>
              <h1 className="font-display text-3xl md:text-4xl text-heading font-semibold leading-tight">
                {plant.name}
              </h1>
              <p className="font-sans text-sm text-muted mt-1">{plant.nickname}</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.floor(plant.rating)
                        ? "fill-accent text-accent"
                        : "fill-transparent text-border"
                    }
                  />
                ))}
              </div>
              <span className="font-sans text-sm font-semibold text-heading">
                {plant.rating}
              </span>
              <span className="font-sans text-xs text-muted">
                ({plant.reviews} reviews)
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl text-heading font-semibold">
                ₹{plant.price}
              </span>
              {plant.originalPrice && (
                <span className="font-sans text-base text-muted line-through">
                  ₹{plant.originalPrice}
                </span>
              )}
              {discount > 0 && (
                <span className="font-sans text-sm text-accent font-semibold">
                  Save {discount}%
                </span>
              )}
            </div>

            <p className="font-sans text-sm text-body leading-relaxed border-t border-border pt-5">
              {plant.description}
            </p>

            {plant.care && (
              <div className="flex gap-2">
                <CareTag icon={Droplets} label="Water" value={plant.care.water} />
                <CareTag icon={Sun} label="Light" value={plant.care.light} />
                <CareTag icon={Gauge} label="Level" value={plant.care.difficulty} />
              </div>
            )}


            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-0 border border-border rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2.5 text-body hover:text-accent hover:bg-surface transition-all font-sans font-medium"
                >
                  −
                </button>
                <span className="px-4 py-2.5 text-heading font-sans font-semibold text-sm border-x border-border min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2.5 text-body hover:text-accent hover:bg-surface transition-all font-sans font-medium"
                >
                  +
                </button>
              </div>

              <Button onClick={handleAddToCart} className="flex-1 sm:flex-none px-8">
                <ShoppingCart size={15} />
                {added ? "Added! 🌿" : "Add to Cart"}
              </Button>

              <button
                onClick={() => setWishlist((w) => !w)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  wishlist
                    ? "border-red-500 text-red-500 bg-red-500/10"
                    : "border-border text-muted hover:border-red-400 hover:text-red-400"
                }`}
                aria-label="Wishlist"
              >
                <Heart size={16} className={wishlist ? "fill-red-500" : ""} />
              </button>

              <button
                className="w-10 h-10 rounded-full border border-border text-muted flex items-center justify-center hover:border-accent hover:text-accent transition-all"
                aria-label="Share"
              >
                <Share2 size={16} />
              </button>
            </div>

            {/* Tags */}
            {plant.tags && (
              <div className="flex flex-wrap gap-2 pt-1">
                {plant.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-xs bg-surface border border-border text-muted px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-end justify-between mb-8">
            <SectionTitle
              title="You Might Also Like"
              subtitle="More plants that go great together"
            />
            <Link
              to="/"
              className="hidden sm:flex items-center gap-1.5 text-accent text-sm font-sans"
            >
              <ArrowLeft size={13} /> Back to all
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedPlants.map((p) => (
              <PlantCard key={p.id} plant={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
