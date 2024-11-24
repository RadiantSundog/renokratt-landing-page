"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Charts = dynamic(() => import("./charts"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full flex items-center justify-center">
      <p className="text-muted-foreground">Loading charts...</p>
    </div>
  ),
});

const barData = [
  { name: "2019", value: 150 },
  { name: "2020", value: 180 },
  { name: "2021", value: 250 },
  { name: "2022", value: 320 },
  { name: "2023", value: 400 },
];

const pieData = [
  { name: "Residential", value: 60 },
  { name: "Commercial", value: 25 },
  { name: "Industrial", value: 15 },
];

export function StatsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section id="stats" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
          Market Statistics
        </h2>
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="projects">Annual Projects</TabsTrigger>
            <TabsTrigger value="distribution">Project Distribution</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Projects Completed</h3>
              <Charts type="bar" data={barData} />
            </Card>
          </TabsContent>

          <TabsContent value="distribution">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Project Types</h3>
              <Charts type="pie" data={pieData} />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
