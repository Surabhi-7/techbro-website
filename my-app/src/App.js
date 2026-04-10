import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FireCursor from "./components/FireCursor";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <FireCursor />
    </div>
  );
}

export default App;