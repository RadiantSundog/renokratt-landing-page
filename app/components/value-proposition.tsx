"use client";

import {
  BookOpenText,
  ChartNoAxesCombined,
  BriefcaseBusiness,
} from "lucide-react";

export function ValueProposition() {
  return (
    <section
      id="services"
      className="bg-white section-padding px-8 relative"
      style={{
        backgroundImage: "url('/interlaced.png')",
        backgroundSize: "400px 400px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl text-raisin font-bold mb-12">Our services</h2>

        {/* Grid of Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* First Offering */}
          <div className="flex flex-col items-start space-y-4">
            <BookOpenText className="text-raisin w-12 h-12" />
            <h3 className="text-lg text-raisin font-bold">
              Knowledge repository
            </h3>
            <p className="text-quicksilver">
              We gather building registry, Estonian Land Board, and TalTech data
              in one place to make renovation planning efficient.
            </p>
          </div>

          {/* Second Offering */}
          <div className="flex flex-col items-start space-y-4">
            <ChartNoAxesCombined className="text-raisin w-12 h-12" />
            <h3 className="text-lg text-raisin font-bold">
              Data-powered insights
            </h3>
            <p className="text-quicksilver">
              We show you the expected renovation estimation of total costs,
              comparison of running costs, and impact on energy performance.
            </p>
          </div>

          {/* Third Offering */}
          <div className="flex flex-col items-start space-y-4">
            <BriefcaseBusiness className="text-raisin w-12 h-12" />
            <h3 className="text-lg text-raisin font-bold">Sales support</h3>
            <p className="text-quicksilver">
              Pitch the benefits of the renovation. Choose the renovation
              options for your home in real-time. Build trust and de-risk as you
              reach consensus among the homeowners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
