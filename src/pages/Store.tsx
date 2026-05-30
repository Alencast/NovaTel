import Header from "../components/layout/Header";
import HeroSection from "../components/sections/Hero/SectionHero";
import Footer from "../components/layout/Footer";
import SectionProducts from "../components/sections/Products/SectionProducts";

export default function Store() { 
    return ( 
        <>
        <Header showCart={true} cartCount={0} onCartClick={() => alert("Cart clicked!")} />
        <HeroSection />
        <SectionProducts />
        <Footer />
        </>
    );
}