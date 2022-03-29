import React from "react";
import img from "../images/img/section3_img.png";

export default function ServiceDetail() {
  return (
    <section
      id="service-detail"
      className="relative h-[70rem] flex flex-col items-center"
    >
      <h1 className="mt-9 text-xl md:text-2xl lg:text-4xl font-bold">
        Performance Based <span className="text-orange">ADS</span>
      </h1>
      <div className="absolute top-0">
        <img src={img} alt="service-detail" className="" />
        <ul className="">
          <li className="flex gap-[33rem] absolute top-[22.5rem] left-[11rem] text-lg font-semibold">
            <p className="w-[13rem] text-center">
              App Download Incentive Campaign
            </p>
            <p className="w-[13rem] text-center">Ranking-up on Playstore</p>
          </li>
          <li className="flex gap-[5rem] absolute top-[27.8rem] left-[25.3rem] text-lg font-semibold">
            <p className="w-[13rem] text-center">
              App Download Non - Incentive Campaign
            </p>
            <p className="w-[13rem] text-center">
              Mobile app traffic gathering campaign
            </p>
          </li>
          <li className="flex gap-[21rem] absolute top-[42rem] left-[17rem] text-lg font-semibold">
            <p className="w-[13rem] text-center">Mobile promotion campaign</p>
            <p className="w-[13rem] text-center">
              a mobile marketing strategy establishment
            </p>
          </li>
          <li className="absolute top-[47rem] left-[34rem] text-lg font-semibold">
            <p className="w-[13rem] text-center">
              Data analysis by Tracking tool
            </p>
          </li>
          <li className="absolute top-[63.5rem] left-[34rem] text-lg font-semibold">
            <p className="w-[13rem] text-center">
              Retargeting Campaign (PC / Mobile)
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
