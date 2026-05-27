import ActionsHero from "./ActionsHero";
import ContentHero from "./ContentHero";
import ImageHero from "./ImageHero";

export default function SectionHero() {
  return (
    <section className="flex mt-20 flex-col-reverse md:flex-row items-center gap-10">

       {/* LEFT SIDE */}
        <div className="space-y-6 px-6 md:px-30 md:w-2/2"> 
            <ContentHero />
            <ActionsHero />
        </div>
        {/* RIGHT SIDE */}
        <ImageHero />
    </section>
  );
}
