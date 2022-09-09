import React from "react";
import Data from "../component/data.json";
import Hero from "../component/Hero";
import SectionSatu from "../component/SectionSatu";
import SectionDua from "../component/SectionDua";
import Footer from "../component/Footer";

function Home() {

  return (
    <div className="w-full bg-bege overflow-hidden">
      <Hero />
      <SectionSatu />
      <SectionDua />
      <Footer />
    </div>
  );
}

export default Home;
