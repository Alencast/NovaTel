// import { useState } from 'react'
import Header from "./components/layout/Header.tsx";
import SectionHero from "./components/sections/Hero/SectionHero.tsx";
import "./App.css";
import SectionSolution from "./components/sections/Solutions/SectionSolution.tsx";
import SectionFeature from "./components/sections/Features/SectionFeature.tsx";
import SectionAbout from "./components/sections/About/SectionAbout.tsx";
import SectionCTA from "./components/sections/CTA/SectionCTA.tsx";
import Footer from "./components/layout/Footer.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-50">
        <Header />
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
      <div>
        <SectionCTA />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
