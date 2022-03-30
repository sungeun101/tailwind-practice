import React from "react";
import bg from "../images/1-aboutus/bg.jpg";
import img from "../images/1-aboutus/img.png";

export default function AboutUs() {
  return (
    <section
      id="aboutus"
      className="relative h-[60vh]"
      style={{
        background: `url(${bg})`,
      }}
    >
      <img
        src={img}
        alt="aboutus"
        className="absolute bottom-0 right-[20%] w-[60%] "
      />
      <div className="absolute top-[13%] left-[15%] md:left-[10%]">
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl md:mb-1 lg:mb-2">
          Global Mobile
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold ">
          Performance Marketing
        </h1>
        <h2 className="text-sm md:text-lg lg:text-2xl">
          Every campaign of OnetwoAD is perfectly transparent and
        </h2>
        <h2 className="text-sm md:text-lg lg:text-2xl">
          optimized for expandability, creativity, goal-oriented and ROI.
        </h2>
      </div>
    </section>
  );
}
