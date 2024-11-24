// components/value-proposition.tsx

"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const revenueStreams = [
  {
    title: "Compilation",
    description: "We gather building registry data in one place to make renovation planning efficient",
  },
  {
    title: "Drafting",
    description: "We create the design task documents for you",
  },
  {
    title: "SaaS",
    description: "Transparent and afforadable pricing through a subscription service. Try it for free, or get expanded features and support with a monthly or yearly plan",
  },
  {
    title: "Rapport",
    description: "We build trust and de-risk. Interact with a model of your home with all the renovations you need in real-time. Get a clear idea of renovation costs",
  },
];

export function ValueProposition() {
  return (
    <div className="px-20 mt-20">
      <motion.h3
        className="text-2xl font-bold gradient-text text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Our Role
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
            <p className="text-sm text-muted-foreground">{stream.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        {/* <Button className="bg-yellow-500 hover:bg-yellow-600">
          Connect With Us
        </Button> */}
      </div>
    </div>
  );
}
