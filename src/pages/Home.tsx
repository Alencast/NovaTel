// import { useState } from 'react'
import Header from "../components/layout/Header.tsx";
import SectionHero from "../components/sections/Hero/SectionHero.tsx";
import SectionSolution from "../components/sections/Solutions/SectionSolution.tsx";
import SectionFeature from "../components/sections/Features/SectionFeature.tsx";
import SectionAbout from "../components/sections/About/SectionAbout.tsx";

export default function Home() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-50">
        <Header showCart={false} />
        <SectionHero />
      </div>
      <div>
        <SectionSolution />
      </div>
      <div>
        <SectionFeature />
      </div>
      <div>
       <SectionAbout />
      </div>
    </>
  );
}

