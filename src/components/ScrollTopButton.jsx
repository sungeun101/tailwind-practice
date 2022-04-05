import React, { useEffect, useState } from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/solid";

export default function ScrollTopButton() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  const handleWindowScroll = () => {
    if (window.scrollY > 648) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowTopButton(false);
  };

  return (
    <button
      className={`${
        showTopButton ? "opacity-90 visible" : "opacity-0 invisible"
      } fixed right-2 bottom-2 font-medium m-2 text-white bg-orange rounded-full p-2 transition-all duration-150 ease-in hover:animate-bounce z-50`}
      onClick={scrollToTop}
    >
      <ChevronDoubleUpIcon class="h-4 w-4" />
    </button>
  );
}
