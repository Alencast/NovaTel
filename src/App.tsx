// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import Store from "./pages/Store.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
   <BrowserRouter> 
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
