"use client";

import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-16 w-full flex justify-between px-4 md:px-28 2xl:px-80 2xl:h-28 items-center py-4 fixed z-20 bg-white transition-shadow duration-500 ${
        scrolled ? "shadow-xl" : ""
      }`}
    >
      <a href={"/"} className="font-bold text-2xl">
        Nilai
      </a>
      <div className="flex gap-2 md:gap-4 items-center">
        <a>
          <img src="/whatsapp.svg" className="h-10 w-10" />
        </a>
        <a>
          <img src="/instagram.svg" className="h-10 w-10" />
        </a>
      </div>
    </div>
  );
};
