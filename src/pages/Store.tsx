import Header from "../components/layout/Header";
import HeroSection from "../components/sections/Hero/SectionHero";

export default function Store() { 
    return ( 
        <>
        <Header showCart={true} cartCount={0} onCartClick={() => alert("Cart clicked!")} />
        <HeroSection />
        </>
    );
}