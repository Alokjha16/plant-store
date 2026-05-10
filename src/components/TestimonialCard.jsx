import { Star } from "lucide-react";

const TestimonialCard = ({ review }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < review.rating
                ? "fill-accent text-accent"
                : "fill-transparent text-border"
            }
          />
        ))}
      </div>

      {/* Review text */}
      <p className="font-sans text-sm text-body leading-relaxed">
        "{review.comment}"
      </p>

      {/* Reviewer info */}
      <div className="flex items-center gap-3 mt-auto">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-9 h-9 rounded-full object-cover border border-border"
        />
        <div>
          <p className="font-sans font-semibold text-heading text-sm">{review.name}</p>
          <p className="text-xs text-muted">{review.location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
