import React, { forwardRef, useState } from "react";
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

export default forwardRef(function Navbar(props, clickedRef) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollMenu = (i) => {
    clickedRef.current[i].scrollIntoView();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* pc */}
      <header className="flex justify-between items-center px-6 md:px-24 lg:px-[15%] h-16">
        <div className="w-16">
          <a href="/">
            <img src={LogoImage} alt="logo" />
          </a>
        </div>

        <nav className="hidden md:flex">
          {menu.map((item, index) => (
            <button
              className="font-medium m-2"
              key={item.id}
              onClick={() => handleScrollMenu(index)}
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

      {/* mobile */}
      <nav
        className={`py-3 px-3 md:hidden flex flex-col items-center bg-main text-white z-50 absolute w-full ${
          isMenuOpen
            ? "opacity-100 visible top-0"
            : "opacity-0 invisible -top-96"
        } transition-all duration-200 ease-in`}
      >
        <button
          className="flex justify-end w-[90%]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <XIcon class="h-5 w-5" />
        </button>
        {menu.map((item, index) => (
          <button
            className="p-2"
            key={item.id}
            onClick={() => handleScrollMenu(index)}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </>
  );
});
