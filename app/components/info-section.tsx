"use client";

import Image from "next/image";

export function InfoSection() {
  return (
    <section className="bg-white section-padding px-8">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl text-raisin md:text-5xl font-bold leading-tight mb-4">
            Save time, and more easily
            <br />
            get homeowner buy-in
          </h2>
          <p className="text-lg text-quicksilver mb-8">
            Renokratt is a configurator to simulate building renovation design
            options for Soviet-era apartment buildings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Statistics */}
            <div>
              <p className="text-3xl text-raisin font-bold">14,000</p>
              <p className="text-lg text-raisin">Buildings</p>
              <p className="text-sm text-quicksilver">
                to be renovated by 2050
              </p>
            </div>
            <div>
              <p className="text-3xl text-raisin font-bold">~200</p>
              <p className="text-lg text-raisin">Renovated per year</p>
              <p className="text-sm text-quicksilver">should be ~500</p>
            </div>
            <div>
              <p className="text-3xl text-raisin font-bold">1-3 mil €</p>
              <p className="text-lg text-raisin">Average price of 1 project</p>
              <p className="text-sm text-quicksilver">20k - 5 mil €</p>
            </div>
          </div>
        </div>

        {/* Right Content: Map of Estonia */}
        <div className="flex items-center justify-center hidden md:flex">
          <div className="relative w-4/5 h-4/5" style={{ minHeight: "400px" }}>
            <Image
              src="/estonia.svg"
              alt="Map of Estonia"
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
