import React from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Navbar from "./components/Navbar";
import Navbar1 from "./components/Navbar1";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='min-h-screen'>
      <Navbar1 />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
