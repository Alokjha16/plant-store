import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <Router>
      <div className="min-h-screen bg-bg text-body font-sans">
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/product/:id"
            element={
              <ProductPage onAddToCart={() => setCartCount((c) => c + 1)} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
