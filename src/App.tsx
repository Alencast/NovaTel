// import { useState } from 'react'
import Header from "./components/layout/Header.tsx";

import "./App.css";
import HeroContent from "./components/sections/HeroSection/HeroContent.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroContent />
    </>
  );
}

export default App;
