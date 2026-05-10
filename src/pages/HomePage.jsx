import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroSection from "../components/HeroSection";
import PlantCard from "../components/PlantCard";
import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import Button from "../components/Button";
import { plants, reviews } from "../data/plants";

const TrendingCard = ({ plant }) => (
  <Link
    to={`/product/${plant.id}`}
    className="flex-shrink-0 w-36 bg-card border border-border rounded-xl overflow-hidden hover:border-accent-muted transition-all hover:-translate-y-0.5 duration-200"
  >
    <div className="h-28 overflow-hidden">
      <img
        src={plant.image}
        alt={plant.name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-2.5">
      <p className="font-sans text-xs font-semibold text-heading truncate">{plant.name}</p>
      <p className="font-sans text-xs text-accent mt-0.5">₹{plant.price}</p>
    </div>
  </Link>
);

const HomePage = () => {
  // Split the plant list for different sections
  const trendingPlants = plants.slice(0, 4);
  const topSelling = plants;

  return (
    <main>
      <HeroSection />

      <section className="py-14 bg-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-8">
            <SectionTitle
              title="Our Trendy Plants"
              subtitle="The ones everyone's been taking home lately"
            />
            <Link
              to="/products"
              className="hidden sm:flex items-center gap-1.5 text-accent text-sm font-sans hover:gap-2.5 transition-all"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          {/* Horizontal scroll on mobile, flex-wrap on desktop */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide md:flex-wrap">
            {trendingPlants.map((plant) => (
              <TrendingCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="rounded-2xl border border-border overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Text side */}
            <div className="bg-card p-8 md:p-12 flex flex-col justify-center gap-5">
              <span className="text-xs font-sans font-semibold text-accent uppercase tracking-widest">
                Featured Collection
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-heading font-semibold leading-tight">
                For Your Desks &amp;
                <br />
                Decorations
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed max-w-xs">
                Compact, low-maintenance plants that fit perfectly on your desk,
                shelf, or windowsill — and actually make your space feel alive.
              </p>
              <div>
                <Button>Shop the Edit</Button>
              </div>
            </div>

            <div className="relative h-60 md:h-auto min-h-[280px]">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                alt="Featured desk plants"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-bg/80 backdrop-blur-sm border border-border rounded-xl px-3 py-2">
                <p className="text-xs text-muted font-sans">Starting from</p>
                <p className="font-display text-lg text-heading font-semibold">₹199</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-8">
            <SectionTitle
              title="Our Top Selling Plants"
              subtitle="The crowd favourites — and for good reason"
            />
            <Link
              to="/products"
              className="hidden sm:flex items-center gap-1.5 text-accent text-sm font-sans hover:gap-2.5 transition-all"
            >
              See all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {topSelling.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="rounded-2xl border border-border overflow-hidden grid grid-cols-1 md:grid-cols-2 direction-rtl">
            {/* Image side — flipped from previous banner */}
            <div className="relative h-60 md:h-auto min-h-[300px] order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&q=80"
                alt="Best plants collection"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-card p-8 md:p-12 flex flex-col justify-center gap-5 order-1 md:order-2">
              <span className="text-xs font-sans font-semibold text-accent uppercase tracking-widest">
                Our Best
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-heading font-semibold leading-tight">
                We Have Small And Best C2 Plants Collections
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed max-w-xs">
                Hand-picked for quality, delivered with care. Every plant is
                nurtured from seed to your doorstep.
              </p>
              <div className="flex gap-3">
                <Button>Shop Collection</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-8">
            <SectionTitle
              title="Customer Review"
              subtitle="Real words from real plant parents"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reviews.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
