import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Search, User, Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
];

const Navbar = ({ cartCount = 0 }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <Leaf size={16} className="text-bg" />
          </div>
          <span className="font-display text-lg font-semibold text-heading group-hover:text-accent transition-colors">
            PlantFusion
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={`font-sans text-sm transition-colors hover:text-accent ${
                  pathname === link.to ? "text-accent" : "text-body"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side icons */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="w-8 h-8 rounded-full flex items-center justify-center text-body hover:text-accent hover:bg-surface transition-all"
          >
            <Search size={17} />
          </button>

          {/* Cart with count badge */}
          <button
            aria-label="Cart"
            className="relative w-8 h-8 rounded-full flex items-center justify-center text-body hover:text-accent hover:bg-surface transition-all"
          >
            <ShoppingCart size={17} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-bg text-[9px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            aria-label="Profile"
            className="w-8 h-8 rounded-full flex items-center justify-center text-body hover:text-accent hover:bg-surface transition-all"
          >
            <User size={17} />
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center text-body hover:text-accent transition-colors ml-1"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-border px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block font-sans text-sm py-1 transition-colors hover:text-accent ${
                    pathname === link.to ? "text-accent" : "text-body"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
