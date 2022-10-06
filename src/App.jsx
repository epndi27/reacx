import React from "react";
import Choose from "./components/Choose";

import BuildBeginer from "./components/BuildBeginer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MarketPlace from "./components/MarketPlace";
import ScrollToTop from "./components/ScrollToTop";
import Subscribe from "./components/Subscribe";


export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Home />
      
      <BuildBeginer />
      <Choose />
      <MarketPlace />
      <Subscribe />
      <Footer />
    </div>
  );
}
