"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export function InfoSection() {
  const { translations } = useLanguage();

  return (
    <section className="bg-white section-padding px-8">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl text-raisin md:text-5xl font-bold leading-tight mb-4">
            {translations.info?.title || "Loading..."}
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            {translations.info?.description || "Loading..."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Statistics */}
            <div>
              <p className="text-3xl text-raisin font-bold">
                {translations.info?.stats?.buildings.value || "14,000"}
              </p>
              <p className="text-lg text-raisin">
                {translations.info?.stats?.buildings.label || "Buildings"}
              </p>
              <p className="text-sm text-quicksilver">
                {translations.info?.stats?.buildings.detail ||
                  "to be renovated by 2050"}
              </p>
            </div>
            <div>
              <p className="text-3xl text-raisin font-bold">
                {translations.info?.stats?.yearlyRenovations.value || "~200"}
              </p>
              <p className="text-lg text-raisin">
                {translations.info?.stats?.yearlyRenovations.label ||
                  "Renovated per year"}
              </p>
              <p className="text-sm text-quicksilver">
                {translations.info?.stats?.yearlyRenovations.detail ||
                  "should be ~500"}
              </p>
            </div>
            <div>
              <p className="text-3xl text-raisin font-bold">
                {translations.info?.stats?.averagePrice.value || "1-3 mil €"}
              </p>
              <p className="text-lg text-raisin">
                {translations.info?.stats?.averagePrice.label ||
                  "Average price of 1 project"}
              </p>
              <p className="text-sm text-quicksilver">
                {translations.info?.stats?.averagePrice.detail ||
                  "20k - 5 mil €"}
              </p>
            </div>
          </div>
        </div>

        {/* Right Content: Map of Estonia */}
        <div className="flex items-center justify-center md:flex">
          <div className="relative w-4/5 h-4/5" style={{ minHeight: "400px" }}>
            <Image
              src="/estonia.svg"
              alt={translations.info?.mapAlt || "Map of Estonia"}
              fill
              style={{ objectFit: "contain", opacity: 0.2 }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
