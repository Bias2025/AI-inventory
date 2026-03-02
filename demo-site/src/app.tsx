import React from "react";
import Shell from "./components/Shell";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import DemoTabs from "./components/DemoTabs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Shell>
      <Hero />
      <FeatureGrid />
      <DemoTabs />
      <Footer />
    </Shell>
  );
}
