import React from "react";
import bg from "../images/bg/bg_4.jpg";
import img from "../images/img/section5_img.png";

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
          <h2 className="py-[2%] md:text-lg lg:text-xl">
            We offer comprehensive marketing solution in various field.
          </h2>
        </header>

        <div className="bg-main w-[4%] h-1"></div>

        <main className="h-[88%] w-full relative flex flex-col items-center justify-between max-w-screen-lg">
          contents...
        </main>
      </div>
    </section>
  );
}
