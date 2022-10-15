import React from "react";
import BuildAdvanced from "./components/BuildAdvanced";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Forum from "./Forum";

import BuildBeginer from "./components/BuildBeginer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import Compare from "./components/Compare";

export default function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter> */}

      <ScrollToTop />
      <Home />
      <BuildBeginer />
      <BuildAdvanced />
      <Compare />
      <Footer />
    </div>
  );
}
