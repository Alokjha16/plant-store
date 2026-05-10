const SectionTitle = ({ title, subtitle, align = "left" }) => {
  const alignClass = {
    left: "text-left",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={`flex flex-col gap-2 ${alignClass[align]}`}>
      <h2 className="font-display text-2xl md:text-3xl text-heading font-semibold leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-sm text-muted max-w-md">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
