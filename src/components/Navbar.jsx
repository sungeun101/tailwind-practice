import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import LogoImage from "../images/img/logo.jpg";
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
      <header className="flex justify-between items-center px-6 md:px-24 lg:px-48">
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
          "py-2 px-3 md:hidden flex flex-col items-center bg-main text-white z-50",
          {
            hidden: !isMenuOpen,
          }
        )}
      >
        {menu.map((item) => (
          <button className="p-2" key={item.id}>
            {item.name}
          </button>
        ))}
      </div>
    </>
  );
}
