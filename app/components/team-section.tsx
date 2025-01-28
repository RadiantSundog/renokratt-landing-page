"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

export function TeamSection() {
  const { translations } = useLanguage();

  const founders = translations.team?.founders || [];
  const mentors = translations.team?.mentors || [];

  return (
    <section className="section-padding bg-muted/30">
      <div id="about" className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {translations.team?.title || "Meet Our Team"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-md md:text-lg">
            {translations.team?.subtitle ||
              "A dedicated team of experts committed to revolutionizing the renovation industry"}
          </p>
        </motion.div>

        {/* Founders Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {founders.map((founder: any, index: number) => (
            <motion.div
              key={founder.name}
              className="bg-card rounded-xl p-8 shadow-lg w-full sm:w-80 flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl">{founder.name}</h3>
                  <p className="text-sm md:text-md text-muted-foreground">
                    {founder.role}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {founder.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() =>
                    (window.location.href = `mailto:${founder.email}`)
                  }
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {translations.team?.contact || "Contact"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open(founder.linkedin, "_blank")}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mentors Section */}
        <motion.div
          className="text-center mb-12 pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            {translations.team?.mentorsTitle || "Our Mentors"}
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-md md:text-lg">
            {translations.team?.mentorsSubtitle ||
              "Industry experts guiding our vision and strategy"}
          </p>
        </motion.div>

        {/* Mentors Grid */}
        <div className="flex flex-wrap justify-center gap-8 pb-16">
          {mentors.map((mentor: any, index: number) => (
            <motion.div
              key={mentor.name}
              className="bg-card rounded-xl p-8 shadow-lg w-full sm:w-80 flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="rounded-full object-contain"
                />
              </div>
              <h4 className="font-semibold text-lg md:text-xl">{mentor.name}</h4>
              <p className="text-sm md:text-md text-muted-foreground">
                {mentor.role}
              </p>
              <p className="text-sm md:text-md text-muted-foreground">
                {mentor.organization}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
