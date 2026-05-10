const Button = ({ children, variant = "solid", onClick, className = "", type = "button" }) => {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-sans font-medium text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  const variants = {
    solid:
      "bg-accent text-bg hover:bg-accent-light active:scale-95",
    outline:
      "border border-accent text-accent hover:bg-accent hover:text-bg active:scale-95",
    ghost:
      "text-body hover:text-heading hover:bg-surface active:scale-95",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
