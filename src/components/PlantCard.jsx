import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";

const PlantCard = ({ plant }) => {
  return (
    <Link
      to={`/product/${plant.id}`}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(76,175,80,0.15)] hover:border-accent-muted"
    >
      {/* Badge */}
      {plant.badge && (
        <span className="absolute top-3 left-3 z-10 bg-accent text-bg text-[10px] font-sans font-semibold px-2.5 py-1 rounded-full">
          {plant.badge}
        </span>
      )}

      {/* Plant image */}
      <div className="relative h-48 bg-surface overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80`;
          }}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card content */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-sans font-semibold text-heading text-sm leading-tight">
              {plant.name}
            </h3>
            <span className="text-xs text-muted mt-0.5 block">{plant.category}</span>
          </div>

          {/* Star rating */}
          <div className="flex items-center gap-1 shrink-0">
            <Star size={11} className="fill-accent text-accent" />
            <span className="text-xs text-muted">{plant.rating}</span>
          </div>
        </div>

        {/* Price row */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans font-bold text-heading text-base">
              ₹{plant.price}
            </span>
            {plant.originalPrice && (
              <span className="text-xs text-muted line-through">
                ₹{plant.originalPrice}
              </span>
            )}
          </div>

          {/* Cart button — stops propagation so Link doesn't fire */}
          <button
            onClick={(e) => e.preventDefault()}
            className="w-8 h-8 rounded-full bg-accent-muted border border-accent text-accent flex items-center justify-center transition-all duration-200 hover:bg-accent hover:text-bg active:scale-90"
            aria-label="Add to cart"
          >
            <ShoppingCart size={14} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PlantCard;
