"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const tiers = [
  {
    name: "Free",
    description: "Essential renovation planning tools",
    price: "0",
    features: [
      "Registry info of YOUR address",
      "Renovation options",
      "Ballpark prices",
      "Savings potential",
      "Renovation guidelines",
      "Financing options",
      "Contractor listing",
    ],
    cta: "Start for free",
    variant: "outline",
  },
  {
    name: "Premium",
    description: "Advanced insights and AI-powered tools",
    price: "199",
    features: [
      "Tailored for YOUR building",
      "Energy and CO2 calculations",
      "Data-rich insights",
      "AI rendered visuals",
      "Cost analysis algorithms",
      "Detailed info for bidding",
      "EIS grant checklist",
    ],
    cta: "Subscribe",
    variant: "default",
    popular: true,
  },
];

const revenueStreams = [
  {
    title: "Contractor Referral",
    description: "Connect with verified renovation experts",
  },
  {
    title: "Co-branded Marketing",
    description: "Partner with leading brands in the industry",
  },
  {
    title: "Market Statistics",
    description: "Access detailed market insights and trends",
  },
  {
    title: "Design Project Service",
    description: "Professional design consultation services",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Transparent Pricing
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that best fits your renovation needs. From basic
            planning to advanced AI-powered insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-2xl p-8 ${
                tier.popular ? "border-2 border-yellow-500" : "border"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {tier.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-yellow-500 text-white">
                    <Zap className="w-4 h-4 mr-1" />
                    Popular
                  </span>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-4">{tier.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  {tier.price !== "0" && (
                    <span className="text-muted-foreground ml-2">/month</span>
                  )}
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  tier.popular ? "bg-yellow-500 hover:bg-yellow-600" : ""
                }`}
                variant={tier.variant as any}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <motion.h3
            className="text-2xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Additional Services
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={stream.title}
                className="p-6 rounded-lg border bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="font-semibold mb-2">{stream.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {stream.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-yellow-500 hover:bg-yellow-600">
              Connect With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
