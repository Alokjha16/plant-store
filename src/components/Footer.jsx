import { Leaf, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Company: ["About Us", "Careers", "Press", "Blog"],
  Shop: ["Indoor Plants", "Outdoor Plants", "Succulents", "Gift Plants"],
  Support: ["FAQs", "Shipping Policy", "Return Policy", "Contact Us"],
};

const socialIcons = [
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2 w-fit">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Leaf size={16} className="text-bg" />
              </div>
              <span className="font-display text-lg font-semibold text-heading">
                PlantFusion
              </span>
            </Link>

            <p className="font-sans text-sm text-muted leading-relaxed max-w-xs">
              We have Small and Best C2 Plants Collections. Bringing nature
              closer to you, one plant at a time.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2 mt-1">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-card border border-border rounded-full px-4 py-2 text-sm text-body placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              />
              <button className="bg-accent text-bg text-sm font-sans font-medium px-4 py-2 rounded-full hover:bg-accent-light transition-colors active:scale-95">
                Subscribe
              </button>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-1">
              {socialIcons.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-4">
              <h4 className="font-sans font-semibold text-heading text-sm">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-sm text-muted hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-muted">
            © 2025 PlantFusion. All rights reserved.
          </p>
          <p className="font-sans text-xs text-muted">
            Made with 🌿 for plant lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
