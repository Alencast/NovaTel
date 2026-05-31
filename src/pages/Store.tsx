import Header from "../components/layout/Header";
import HeroSection from "../components/sections/Hero/SectionHero";
import Footer from "../components/layout/Footer";
import SectionProducts from "../components/sections/Products/SectionProducts";
import { useState } from "react";
import SectionCart from "../components/CartSideBar/SectionCart";

export default function Store() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <Header
        showCart={true}
        cartCount={0}
        onCartClick={() => setIsCartOpen(!isCartOpen)}
      />
      <HeroSection />
      <SectionProducts />
      <SectionCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Footer />
    </>
  );
}
