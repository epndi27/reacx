import React from "react";
import BuildAdvanced from "./components/BuildAdvanced";

import BuildBeginer from "./components/BuildBeginer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MarketPlace from "./components/MarketPlace";
import ScrollToTop from "./components/ScrollToTop";
import Compare from "./components/Compare";


export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Home />
      
      <BuildBeginer />
      <BuildAdvanced />
      
      <Compare />
      <Footer />
    </div>
  );
}
