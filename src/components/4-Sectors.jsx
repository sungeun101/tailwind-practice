import React from "react";
import bg from "../images/4-sectors/bg.jpg";
import icon1 from "../images/4-sectors/icon1.jpg";
import icon2 from "../images/4-sectors/icon2.jpg";
import icon3 from "../images/4-sectors/icon3.jpg";
import icon4 from "../images/4-sectors/icon4.jpg";
import icon5 from "../images/4-sectors/icon5.jpg";
import icon6 from "../images/4-sectors/icon6.jpg";

export default function Sectors() {
  return (
    <section
      id="sectors"
      className="h-screen w-full relative  min-h-[800px]"
      style={{
        background: `url(${bg})`,
      }}
    >
      <div className="absolute bottom-0 w-full h-full flex flex-col justify-around items-center">
        <header className="flex flex-col items-center justify-center ">
          <h1 className="pt-[5%] text-xl md:text-2xl lg:text-4xl font-bold">
            Industries & Sectors
          </h1>
          <h2 className="pt-[2%] pb-[3%] md:text-lg lg:text-xl">
            We offer comprehensive marketing solution in various field.
          </h2>
        </header>

        <div className="bg-main w-[4%] h-1"></div>

        <main className="h-[88%] relative flex  flex-col items-center justify-center  w-full">
          <ul className="h-[30vh] w-full flex gap-2  justify-center  mb-2">
            <li className="relative">
              <img src={icon1} alt="icon" className="h-full" />
              <p className="absolute top-0"></p>
            </li>
            <li className="relative">
              <img src={icon3} alt="icon" className="h-full" />
              <p className="absolute top-0"></p>
            </li>
            <li className="relative">
              <img src={icon5} alt="icon" className="h-full" />
              <p className="absolute top-0"></p>
            </li>
          </ul>
          <ul className="h-[30vh] w-full flex gap-2 justify-center ">
            <li className="relative">
              <img src={icon2} alt="icon" className="h-full" />
              <p className="absolute top-0"></p>
            </li>
            <li className="relative">
              <img src={icon4} alt="icon" className="h-full" />
              <p className="absolute top-0"></p>
            </li>
            <li className="relative">
              <img src={icon6} alt="icon" className="h-full" />
              <p className="absolute top-0"></p>
            </li>
          </ul>
        </main>
      </div>
    </section>
  );
}
