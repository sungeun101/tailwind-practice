import React, { forwardRef } from "react";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import bg from "../images/4-contact/bg.jpg";

export default forwardRef(function Contact(props, ref) {
  return (
    <section
      ref={(el) => (ref.current[3] = el)}
      id="contact"
      className="relative min-h-[350px] h-[70vh] lg:h-screen max-h-[400px] md:max-h-[600px] lg:max-h-[96vh]"
      style={{
        background: `url(${bg})`,
      }}
    >
      <div className="absolute bottom-0 w-full h-full flex flex-col justify-around items-center py-[3%]">
        <header className="flex flex-col items-center justify-center">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Contact Us
          </h1>
        </header>

        <div className="bg-main w-[4%] h-1 mt-3"></div>

        <ul className="h-full w-[100%] lg:w-[80%] flex items-center justify-around">
          <li className="flex flex-wrap flex-col items-center w-[50%]">
            <PhoneIcon className="w-[15%] pb-5" />
            <p className="text-sm md:text-md lg:text-lg">+82 10-5678-1234</p>
          </li>
          <li className="flex flex-col items-center w-[50%]">
            <LocationMarkerIcon className="w-[15%] pb-5" />
            <p className="text-sm md:text-md lg:text-lg">Seoul, South Korea</p>
          </li>
          <li className="flex flex-col items-center w-[50%]">
            <MailIcon className="w-[15%] pb-5" />
            <p className="text-sm md:text-md lg:text-lg">
              onetwo@justonetwo.com
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
});
