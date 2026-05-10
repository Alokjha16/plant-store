import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";

const FloatingTag = ({ text, className }) => (
  <div
    className={`absolute bg-card/90 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 flex items-center gap-2 ${className}`}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-accent block" />
    <span className="font-sans text-xs text-body whitespace-nowrap">{text}</span>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-bg flex items-center overflow-hidden pt-16">
      {/* Subtle radial glow in the background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Text content */}
        <div className="flex flex-col gap-6 z-10">
          {/* Eyebrow tag */}
          <span className="inline-flex items-center gap-2 bg-accent-muted/40 border border-accent-muted text-accent text-xs font-sans font-medium px-3 py-1.5 rounded-full w-fit">
            🌿 Nature's best, delivered to you
          </span>

          {/* Main heading — Figma shows "Earth's Exhale" in large serif font */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-heading font-semibold leading-[1.1] tracking-tight">
            Earth's
            <br />
            <span className="text-accent">Exhale</span>
          </h1>

          <p className="font-sans text-base text-muted leading-relaxed max-w-sm">
            Curated indoor and outdoor plants that bring life, colour, and calm
            to every corner of your home.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mt-2">
            <Link to="/products">
              <Button>
                <ShoppingBag size={15} />
                Shop Now
              </Button>
            </Link>
            <Button variant="outline">
              Explore Collection
              <ArrowRight size={15} />
            </Button>
          </div>

          {/* Quick stats */}
          <div className="flex gap-8 mt-4 pt-6 border-t border-border">
            {[
              { value: "200+", label: "Plant Varieties" },
              { value: "50K+", label: "Happy Customers" },
              { value: "4.9★", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-xl font-semibold text-heading">
                  {stat.value}
                </p>
                <p className="font-sans text-xs text-muted mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Hero image with floating tags */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-accent/10 blur-xl scale-110" />

            {/* Plant image in a rounded square */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-border">
              <img
                src="https://images.unsplash.com/photo-1526397751294-331021109fbd?w=600&q=80"
                alt="Featured plant"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"; }}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
            </div>

            {/* Floating info tags — as seen in the Figma design */}
            <FloatingTag
              text="Aglaonema Plant"
              className="-left-8 top-1/3"
            />
            <FloatingTag
              text="₹340 — Free Delivery"
              className="-right-4 bottom-1/4"
            />

            {/* Small decorative plant thumbnail */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl overflow-hidden border-2 border-accent shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=100&q=80"
                alt="Plant preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
