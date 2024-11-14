"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileStack,
  PencilRuler,
  HousePlus,
  Contact,
} from "lucide-react";
import { StatsSection } from "./stats-section";
import Image from "next/image";

const services = [
  {
    icon: FileStack,
    title: "Data Consolidation",
    description: "Comprehensive data gathering and organization services for renovation projects.",
    features: ["Document Collection", "Data Organization", "Information Analysis", "Digital Storage"]
  },
  {
    icon: PencilRuler,
    title: "Design Task Documentation",
    description: "Professional documentation and planning services for renovation tasks.",
    features: ["Technical Drawings", "Specification Writing", "Design Guidelines", "Project Documentation"],
    graphic: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=800&q=80"
  },
  {
    icon: HousePlus,
    title: "Configuration",
    description: "Customizable renovation planning and configuration tools.",
    features: ["Interactive Tools", "Custom Solutions", "Real-time Preview", "Option Analysis"]
  },
  {
    icon: Contact,
    title: "Consultation and Advising",
    description: "Expert consultation services for renovation projects.",
    features: ["Expert Guidance", "Project Planning", "Cost Analysis", "Timeline Planning"],
    graphic: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&q=80"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
          Our Services
        </h2>
        <Tabs defaultValue="data-consolidation" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <TabsTrigger
                  key={service.title}
                  value={service.title.toLowerCase().replace(/\s+/g, '-')}
                  className="flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span>{service.title.split(" ")[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {services.map((service) => {
            const Icon = service.icon;
            const value = service.title.toLowerCase().replace(/\s+/g, '-');
            return (
              <TabsContent
                key={service.title}
                value={value}
              >
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-yellow-500 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  {service.graphic && (
                    <div className="mt-8 rounded-lg overflow-hidden">
                      <img
                        src={service.graphic}
                        alt={service.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  )}
                  {value === 'configuration' && (
                    <div className="mt-8">
                    </div>
                  )}
                  {value === 'data-consolidation' && (
                    <div className="mt-8">
                      <StatsSection />
                    </div>
                  )}
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
