"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Import Next.js Image component

const founders = [
  {
    name: "Joosep Viik",
    role: "Founder & CEO",
    description: "Renovation Domain Expert",
    email: "joosep.viik@create.ee",
    image: "/joosep-avatar.png",
    linkedin: "https://www.linkedin.com/in/joosepviik/",
  },
  {
    name: "Karel Kangro",
    role: "Co-founder & CTO",
    description: "Technical Lead & System Architect",
    email: "karel@spiral.ee",
    image: "/karel-avatar.png",
    linkedin: "https://www.linkedin.com/in/karel-kangro/",
  },
];

const mentors = [
  {
    name: "Ergo Pikas (PhD)",
    role: "Tenured Assistant Professor",
    organization: "TalTech",
    image: "/taltech-logo.png",
  },
  {
    name: "Martin Talts",
    role: "CEO of KMT Prefab",
    organization: "KMT Prefab",
    image: "/kmt-logo.png",
  },
  {
    name: "Renee Puusepp (PhD)",
    role: "Senior Researcher",
    organization: "EKA & Creatomus",
    image: "/creatomus-logo.png",
  },
];

export function TeamSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated team of experts committed to revolutionizing the renovation industry
          </p>
        </motion.div>

        {/* Founders Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              className="bg-card rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-6">
                <div className="relative w-24 h-24">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl">{founder.name}</h3>
                  <p className="text-lg text-muted-foreground">{founder.role}</p>
                  <p className="text-sm text-muted-foreground mt-1">{founder.description}</p>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() =>
                    (window.location.href = `mailto:${founder.email}`)
                  }
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
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
          className="text-center mb-12 pt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">Our Mentors</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry experts guiding our vision and strategy
          </p>
        </motion.div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-32">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              className="bg-card rounded-xl p-6 shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4">
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h4 className="font-semibold">{mentor.name}</h4>
              <p className="text-sm text-muted-foreground">{mentor.role}</p>
              <p className="text-sm text-muted-foreground">{mentor.organization}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
