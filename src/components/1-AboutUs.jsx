import React from "react";
import bg from "../images/bg/bg_1.jpg";
import img from "../images/img/section1_img.png";

export default function AboutUs() {
  return (
    <section id="aboutus" className="relative min-h-screen z-0 border-l">
      <img src={bg} alt="bg-aboutus" className="" />
      <img
        src={img}
        alt="aboutus"
        className="absolute -bottom-6 right-0 w-3/5 z-0"
      />
      <div className="absolute top-1/4 left-12 lg:left-28">
        <h1 className="text-2xl md:text-4xl lg:text-6xl md:mb-2">
          Global Mobile
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold ">
          Performance Marketing
        </h1>
        <h2 className="text-sm md:text-xl lg:text-2xl">
          Every campaign of OnetwoAD is perfectly transparent and
        </h2>
        <h2 className="text-sm md:text-xl lg:text-2xl">
          optimized for expandability, creativity, goal-oriented and ROI.
        </h2>
      </div>
    </section>
  );
}
