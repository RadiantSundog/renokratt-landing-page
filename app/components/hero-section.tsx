"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Data-Powered Renovation Insights for YOUR Building
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Renovation is hard, but with us it doesn't have to be
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600">
            Get Started <ChevronRight className="ml-2 h-4 w-4" />
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
}
