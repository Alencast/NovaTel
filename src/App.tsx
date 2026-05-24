// import { useState } from 'react'
import Header from "./components/layout/Header.tsx";
import HeroSection from "./components/sections/Hero/HeroSection";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection/>
    </>
  );
}

export default App;
