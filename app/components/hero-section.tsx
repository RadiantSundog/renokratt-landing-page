"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = window.innerHeight / 2 - contactSection.offsetHeight / 2;
      const adjustment = 320; // Adjust this value to scroll slightly less
      const topPosition =
        contactSection.getBoundingClientRect().top + window.scrollY + offset - adjustment;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white flex flex-col">
      {/* Navbar */}
      <nav id="home" className="w-full bg-white pb-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/renokratt-logo-light.svg"
              alt="Renokratt Logo"
              width={40}
              height={40}
              className="object-contain h-auto w-[15rem] sm:w-[20rem]"
              priority
            />
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="text-raisin hover:text-black font-medium">
              Home
            </a>
            <a href="#services" className="text-raisin hover:text-black font-medium">
              Services
            </a>
            <a href="#about" className="text-raisin hover:text-black font-medium whitespace-nowrap">
              About us
            </a>
            <Button
              className="h-10 bg-raisin hover:bg-yellow-500 text-platinum rounded px-4"
              onClick={scrollToContact}
            >
              Contact
            </Button>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="block md:hidden text-raisin"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 px-4 pb-4">
            <a href="#home" className="text-raisin hover:text-black font-medium">
              Home
            </a>
            <a href="#services" className="text-raisin hover:text-black font-medium">
              Services
            </a>
            <a href="#about" className="text-raisin hover:text-black font-medium whitespace-nowrap">
              About us
            </a>
            <Button
              className="h-10 bg-raisin text-platinum rounded hover:bg-yellow-500"
              onClick={scrollToContact}
            >
              Contact
            </Button>
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
            Simplify and support
            <br />
            your renovation projects
          </h1>
          <p className="text-md md:text-lg lg:text-xl text-quicksilver mt-4">
            Renovation consulting is complex, we make it easier
          </p>
        </div>
      </section>
    </div>
  );
}
