import HeroActions from "./HeroActions";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section className="flex mt-20 flex-col-reverse md:flex-row items-center gap-10">

       {/* LEFT SIDE */}
        <div className="space-y-6"> 
            <HeroContent />
            <HeroActions />
        </div>
        {/* RIGHT SIDE */}
        <HeroImage />
    </section>
  );
}
