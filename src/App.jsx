import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/1-AboutUs";
import Services from "./components/2-Services";
import Clients from "./components/3-Clients";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";
import Contact from "./components/4-Contact";

function App() {
  const refForScroll = useRef([]);

  return (
    <div className="text-main relative">
      <ScrollTopButton />
      <Navbar ref={refForScroll} />
      <AboutUs ref={refForScroll} />
      <Services ref={refForScroll} />
      <Clients ref={refForScroll} />
      <Contact ref={refForScroll} />
      <Footer />
    </div>
  );
}

export default App;
