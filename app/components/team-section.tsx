"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

// Split team members into founders and team
const founders = [
  {
    name: "Joosep Viik",
    role: "Founder & CEO",
    description: "Renovation Domain Expert",
    email: "joosep.viik@create.ee",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80"
  },
  {
    name: "Karel Kangro",
    role: "Co-founder & CTO",
    description: "Technical Lead & System Architect",
    email: "karel@spiral.ee",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&q=80"
  }
];

const teamMembers = [
  {
    name: "Mihkel Jaaniste",
    role: "Operations",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&q=80"
  },
  {
    name: "Ilya Vasilyev",
    role: "UI, UX, Frontend",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&q=80"
  },
  {
    name: "Alexander Levero",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80"
  },
  {
    name: "Kalmer Gross",
    role: "Business Development",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80"
  }
];

const mentors = [
  {
    name: "Ergo Pikas (PhD)",
    role: "Tenured Assistant Professor",
    organization: "TalTech",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&q=80"
  },
  {
    name: "Martin Talts",
    role: "CEO of KMT Prefab",
    organization: "KMT Prefab",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&q=80"
  },
  {
    name: "Renee Puusepp (PhD)",
    role: "Senior Researcher",
    organization: "EKA & Creatomus",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&q=80"
  }
];

export function TeamSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
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
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl">{founder.name}</h3>
                  <p className="text-lg text-muted-foreground">{founder.role}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {founder.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => window.location.href = `mailto:${founder.email}`}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Members Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-card rounded-xl p-4 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mentors */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Our Mentors</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry experts guiding our vision and strategy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="rounded-full object-cover w-full h-full"
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