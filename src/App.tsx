// import { useState } from 'react'
import Header from "./components/layout/Header.tsx";
import HeroSection from "./components/sections/Hero/HeroSection";
import "./App.css";
import IndexService from "./components/sections/Services/ServiceIndex.tsx";
import FeaturesIndex from "./components/sections/Features/FeatureIndex.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-50">
        <Header />
        <HeroSection />
      </div>
      <div>
        <IndexService />
      </div>
      <div>
        <FeaturesIndex />
      </div>
    </>
  );
}

export default App;
