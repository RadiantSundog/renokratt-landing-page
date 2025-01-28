"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export function HeroSection() {
  const { translations, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = window.innerHeight / 2 - section.offsetHeight / 2;
      const adjustment = 320; // Adjust this value to scroll slightly less
      const topPosition =
        section.getBoundingClientRect().top +
        window.scrollY +
        offset -
        adjustment;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="home" className="bg-white flex flex-col pb-28">
      {/* Navbar */}
      <nav className="w-full bg-white pb-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/renokratt-logo-light.svg"
              alt="Renokratt Logo"
              width={40}
              height={40}
              className="object-contain h-auto w-[8rem] sm:w-[12rem]"
              priority
            />
          </div>

          {/* Navigation Links (Centered) */}
          <div className="hidden md:flex space-x-8 items-center justify-center flex-1">
            <a
              onClick={() => scrollToSection("home")}
              className="text-raisin hover:text-black font-medium cursor-pointer"
            >
              {translations.nav?.home || "Home"}
            </a>
            <a
              onClick={() => scrollToSection("services")}
              className="text-raisin hover:text-black font-medium cursor-pointer"
            >
              {translations.nav?.services || "Services"}
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="text-raisin hover:text-black font-medium whitespace-nowrap cursor-pointer"
            >
              {translations.nav?.about || "About us"}
            </a>
          </div>

          {/* Language Selector and Contact Button */}
          <div className="hidden md:flex space-x-4 items-center">
            <Button
              className="h-10 bg-raisin hover:bg-yellow-500 text-platinum rounded px-8"
              onClick={() => scrollToSection("contact")}
            >
              {translations.nav?.contact || "Contact"}
            </Button>
            <select
              onChange={(e) =>
                setLanguage(e.target.value as "en" | "et" | "ru")
              }
            >
              <option value="en">ENG</option>
              <option value="et">EST</option>
              {/* <option value="ru">Rus</option> */}
            </select>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="block md:hidden text-raisin"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 px-4 pb-4">
            <a
              onClick={() => scrollToSection("home")}
              className="text-raisin hover:text-black font-medium cursor-pointer"
            >
              {translations.nav?.home || "Home"}
            </a>
            <a
              onClick={() => scrollToSection("services")}
              className="text-raisin hover:text-black font-medium cursor-pointer"
            >
              {translations.nav?.services || "Services"}
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="text-raisin hover:text-black font-medium whitespace-nowrap cursor-pointer"
            >
              {translations.nav?.about || "About us"}
            </a>
            <Button
              className="h-10 bg-raisin text-platinum rounded hover:bg-yellow-500"
              onClick={() => scrollToSection("contact")}
            >
              {translations.nav?.contact || "Contact"}
            </Button>
            {/* Language Select Dropdown */}
            <div className="flex justify-center mt-4">
              <select
                onChange={(e) =>
                  setLanguage(e.target.value as "en" | "et" | "ru")
                }
                className="text-raisin"
              >
                <option value="en">ENG</option>
                <option value="et">EST</option>
                {/* <option value="ru">Russian</option> */}
              </select>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] bg-platinum rounded-3xl overflow-hidden flex items-center justify-center">
        {/* Hero Image */}
        <Image
          src="/hero-img1.jpg"
          alt="Hero Image"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        {/* Text Content */}
        <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 w-[90%] md:w-[60%] lg:w-[50%] bg-white/80 p-6 md:p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-raisin">
            {translations.hero?.title ||
              "Simplify and support your renovation projects"}
          </h1>
          <p className="text-md md:text-lg lg:text-xl text-quicksilver mt-4">
            {translations.hero?.subtitle ||
              "Renovation consulting is complex, we make it easier"}
          </p>
        </div>
      </section>
    </div>
  );
}
