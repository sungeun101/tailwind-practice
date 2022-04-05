import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import LogoImage from "../images/logo.jpg";

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

  const handleScrollMenu = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center px-6 md:px-24 lg:px-[15%] h-16">
        <div className="w-16">
          <a href="/">
            <img src={LogoImage} alt="logo" />
          </a>
        </div>

        <nav class="hidden md:flex">
          {menu.map((item) => (
            <button
              className="font-medium m-2"
              key={item.id}
              onClick={() => handleScrollMenu(item.id)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon class="h-5 w-5" />
        </button>
      </header>

      <nav
        className={`py-3 px-3 md:hidden flex flex-col items-center bg-main text-white z-50 absolute top-0 w-full ${
          !isMenuOpen && "hidden"
        }`}
      >
        <button
          className="flex justify-end w-[90%]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <XIcon class="h-5 w-5" />
        </button>
        {menu.map((item) => (
          <button
            className="p-2"
            key={item.id}
            onClick={() => handleScrollMenu(item.id)}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </>
  );
}
