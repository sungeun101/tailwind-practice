import React from "react";
import bg from "../images/bg/bg_4.jpg";
import img from "../images/img/section5_img.png";

export default function Sectors() {
  return (
    <section id="sectors" className="relative flex flex-col items-center">
      <img src={bg} alt="bg-sectors" className="h-[80rem]" />
      <h1 className="absolute top-0 mt-9 text-xl md:text-2xl lg:text-4xl font-bold z-100">
        Industries & Sectors
      </h1>
      <h2 className="absolute top-24 text-xl">
        We offer comprehensive marketing solution in various field.
      </h2>
      <div className="absolute top-0 leading-10">
        <img src={img} alt="sectors" className="" />
        <ul className="text-4xl font-semibold">
          <li className="absolute top-[21rem] left-[23rem] w-12">
            Financial Services
          </li>
          <li className="absolute top-[25rem] left-[40.6rem] w-12">Game</li>
          <li className="absolute top-[25.5rem] left-[56rem] w-12">
            Food& Beverages
          </li>
          {/* ctrl+space 자동완성 */}
        </ul>
      </div>
    </section>
  );
}
