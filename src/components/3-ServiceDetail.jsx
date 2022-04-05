import React from "react";
import icon1 from "../images/3-service-detail/icon1.png";
import icon2 from "../images/3-service-detail/icon2.png";
import icon3 from "../images/3-service-detail/icon3.png";
import icon4 from "../images/3-service-detail/icon4.png";
import icon5 from "../images/3-service-detail/icon5.png";
import icon6 from "../images/3-service-detail/icon6.png";
import icon7 from "../images/3-service-detail/icon7.png";
import icon8 from "../images/3-service-detail/icon8.png";

export default function ServiceDetail() {
  return (
    <section id="service-detail" className="h-screen relative min-h-[1100px]">
      <div className="absolute bottom-0 w-full h-full flex flex-col justify-around items-center py-[2%]">
        <header className="flex flex-col items-center justify-center text-xl md:text-2xl lg:text-4xl font-bold">
          <h1>
            Performance Based <span className="text-orange">ADS</span>
          </h1>
        </header>

        <div className="bg-main w-[4%] h-1"></div>

        <main className="h-[88%] w-full relative flex flex-col items-center justify-between max-w-[900px]">
          <ul className=" flex justify-between w-full">
            <div className="flex flex-col items-center w-[190px]">
              <img src={icon1} alt="icon" className="w-[7em]" />
              <p className="text-xs md:text-sm lg:text-lg font-semibold text-center">
                App Download Incentive Campaign
              </p>
            </div>
            <div className="flex flex-col items-center w-[190px]">
              <img src={icon2} alt="icon" className="w-[7em]" />
              <p className="text-xs md:text-sm lg:text-lg font-semibold text-center">
                Ranking-up on Playstore
              </p>
            </div>
          </ul>

          <ul className=" flex justify-between w-[50%] -mt-[4%]">
            <div className="flex flex-col items-center w-[190px]">
              <img src={icon3} alt="icon" className="w-[7em]" />
              <p className="text-xs md:text-sm lg:text-lg font-semibold text-center">
                App Download Non - Incentive Campaign
              </p>
            </div>
            <div className="flex flex-col items-center w-[190px]">
              <img src={icon4} alt="icon" className="w-[7em]" />
              <p className="text-xs md:text-sm lg:text-lg font-semibold text-center">
                mobile app traffic gathering campaign
              </p>
            </div>
          </ul>

          <ul className=" flex justify-between w-[100%] md:w-[80%] -mt-[4%]">
            <div className="flex flex-col items-center w-[190px]">
              <img src={icon5} alt="icon" className="w-[7em]" />
              <p className="text-xs md:text-sm lg:text-lg font-semibold text-center">
                Mobile promotion campaign
              </p>
            </div>
            <div className="flex flex-col items-center w-[190px]">
              <img src={icon6} alt="icon" className="w-[7em]" />
              <p className="text-xs md:text-sm lg:text-lg font-semibold text-center">
                a mobile marketing strategy establishment
              </p>
            </div>
          </ul>

          <ul className=" flex  justify-center -mt-[12%]">
            <div className="flex flex-col items-center w-[190px]">
              <img src={icon7} alt="icon" className="w-[7em]" />
              <p className="text-xs md:text-sm lg:text-lg font-semibold text-center">
                Data analysis by Tracking tool
              </p>
            </div>
          </ul>

          <ul className=" flex justify-center -mt-[4%]">
            <div className="flex flex-col items-center w-[190px]">
              <img src={icon8} alt="icon" className="w-[7em]" />
              <p className="text-xs md:text-sm lg:text-lg font-semibold text-center">
                Retargeting Campaign (PC / Mobile)
              </p>
            </div>
          </ul>
        </main>
      </div>
    </section>
  );
}
