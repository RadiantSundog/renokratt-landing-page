"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const partners = [
  {
    name: "Beamline",
    logo: "/beamline-logo.png",
    link: "https://www.beamline.fund/",
  },
  {
    name: "Baltic Innovation Agency",
    logo: "/bia-logo.png",
    link: "https://bia.ee/",
  },
  {
    name: "Sparkup",
    logo: "/sparkup-logo.png",
    link: "https://teaduspark.ee/en/",
  },
  {
    name: "KIK",
    logo: "/kik-logo.png",
    link: "https://kik.ee",
  },
  {
    name: "NextGen EU",
    logo: "/eu-logo.png",
    link: "", // Empty link
  },
  {
    name: "Ministry of Climate",
    logo: "/ministry-logo.png",
    link: "https://kliimaministeerium.ee/en",
  },
];

export function PartnersSection() {
  const { translations } = useLanguage();

  return (
    <section id="partners" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            {translations.partners?.title || "Our partners"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {translations.partners?.subtitle ||
              "Collaborating with leaders in innovation and sustainability"}
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => {
            const PartnerContainer = partner.link ? "a" : "div";

            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PartnerContainer
                  href={partner.link || undefined}
                  target={partner.link ? "_blank" : undefined}
                  rel={partner.link ? "noopener noreferrer" : undefined}
                  className={`bg-white rounded-lg shadow-lg flex items-center justify-center p-8 hover:shadow-xl transition-shadow ${
                    !partner.link ? "cursor-default" : ""
                  }`}
                >
                  <div className="relative w-40 h-24">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      style={{ objectFit: "contain" }}
                      priority={index < 3} // Load the first 3 images with priority
                    />
                  </div>
                </PartnerContainer>
              </motion.div>
            );
          })}
        </div>

        {/* Descriptive Text */}
        <motion.div
          className="text-left mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            {translations.partners?.beamlineMessage ||
              "Renokratt OÜ is a participant in the “Energy | Climate Focus” acceleration program. The “Energy | Climate Focus” acceleration program implemented by Beamline Accelerator is supported by the Environmental Investment Centre (KIK) within the framework of the Estonian recovery plan from the European Union&apos;s Recovery and Resilience Fund (RRF) and is aimed at implementing green technology development programs."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
