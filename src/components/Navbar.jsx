import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import LogoImage from "../images/logo.jpg";
import classNames from "classnames";

const menu = [
  {
    id: "aboutus",
    name: "About Us",
  },
  {
    id: "services",
    name: "Services",
  },
  {
    id: "clients",
    name: "Clients",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-6 md:px-24 lg:px-[15%] h-16">
        <div className="w-16">
          <a href="/">
            <img src={LogoImage} alt="logo" />
          </a>
        </div>

        <div class="hidden md:flex">
          {menu.map((item) => (
            <div className="font-medium px-5" key={item.id}>
              {item.name}
            </div>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon class="h-5 w-5" />
        </button>
      </header>

      <div
        className={classNames(
          "py-3 px-3 md:hidden flex flex-col items-center bg-main text-white z-50 absolute top-0 w-full",
          {
            hidden: !isMenuOpen,
          }
        )}
      >
        <button
          className="flex justify-end w-[90%]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <XIcon class="h-5 w-5" />
        </button>
        {menu.map((item) => (
          <button className="p-2" key={item.id}>
            {item.name}
          </button>
        ))}
      </div>
    </>
  );
}
