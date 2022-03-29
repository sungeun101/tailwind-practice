import React from "react";
import bg from "../images/bg/bg_2.jpg";
import img from "../images/img/section2_img.png";

export default function Services() {
  return (
    <section id="services" className="relative">
      <img src={bg} alt="bg-aboutus" className="h-[80rem]" />
      <img
        src={img}
        alt="services"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12"
      />
      <ul className="flex gap-48 absolute bottom-28 mx-80">
        <li className="flex flex-col items-center w-3/4">
          <h1 className="text-xs md:text-base md:mb-2 font-semibold">
            Our Own Ad-Network
          </h1>
          <div className="text-xs md:text-sm text-center">
            We have our own media utilizing domestic and international traffic
            based on high technology, so it is possible to optimize not only
            domestic but oversea local marketing.
          </div>
        </li>
        <li className="flex flex-col items-center w-3/4">
          <h1 className="text-xs md:text-base md:mb-2 font-semibold">
            Data optimization
          </h1>
          <div className="text-xs md:text-sm text-center">
            We analyze data using various tools/solutions and set optimized
            media strategy through analyzed data.
          </div>
        </li>
        <li className="flex flex-col items-center w-3/4">
          <h1 className="text-xs md:text-base md:mb-2 font-semibold">
            Media mix optimization
          </h1>
          <div className="text-xs md:text-sm text-center">
            We have an autonomous solution that has been accumulated by a number
            of companies' performance marketing. With this solution, we are able
            to run optimized ad campaigns step-by-step KPI even rapid and
            radical traffic changes.
          </div>
        </li>
      </ul>
    </section>
  );
}
