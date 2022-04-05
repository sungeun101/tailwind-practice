import React from "react";
import bg from "../images/2-services/bg.jpg";
import img from "../images/2-services/img.png";
import icon1 from "../images/2-services/icon1.png";

export default function Services() {
  return (
    <section
      id="services"
      className="relative h-screen flex flex-col items-center justify-evenly lg:py-10 min-h-[900px]"
      style={{
        background: `url(${bg})`,
      }}
    >
      <img src={img} alt="services" className="w-[50%]" />
      <ul className="flex flex-wrap lg:flex-nowrap justify-center items-stretch px-[5%]">
        <li className="flex flex-col items-center basis-1/2">
          <img src={icon1} alt="service-icon" className="w-[19%]" />
          <div className="flex flex-col w-4/5 h-4/5 mt-3 bg-white px-3 py-6">
            <h1 className="text-xs md:text-lg md:mb-2 font-semibold text-center">
              Our Own Ad-Network
            </h1>
            <div className="text-xs md:text-sm lg:text-base text-center mt-2">
              We have our own media utilizing domestic and international traffic
              based on high technology, so it is possible to optimize not only
              domestic but oversea local marketing.
            </div>
          </div>
        </li>
        <li className="flex flex-col items-center basis-1/2">
          <img src={icon1} alt="service-icon" className="w-[19%]" />
          <div className="flex flex-col w-4/5 h-4/5 mt-3 bg-white px-3 py-6">
            <h1 className="text-xs md:text-lg md:mb-2 font-semibold text-center">
              Data optimization
            </h1>
            <div className="text-xs md:text-sm lg:text-base text-center mt-2">
              We analyze data using various tools/solutions and set optimized
              media strategy through analyzed data.
            </div>
          </div>
        </li>
        <li className="flex flex-col items-center basis-1/2">
          <img src={icon1} alt="service-icon" className="w-[19%]" />
          <div className="flex flex-col w-4/5 h-4/5 mt-3 bg-white px-3 py-6">
            <h1 className="text-xs md:text-lg md:mb-2 font-semibold text-center">
              Media mix optimization
            </h1>
            <div className="text-xs md:text-sm lg:text-base text-center mt-2">
              We have an autonomous solution that has been accumulated by a
              number of companies' performance marketing. With this solution, we
              are able to run optimized ad campaigns step-by-step KPI even in
              rapid and radical traffic changes.
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
