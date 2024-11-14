"use client";

import { useState, Suspense, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Dynamically import Three.js components with no SSR
const Scene = dynamic(() => import('./scene').then(mod => mod.Scene), {
  ssr: false,
  loading: () => (
    <div className="h-full flex items-center justify-center">
      Loading 3D Preview...
    </div>
  ),
});

const ROOF_TYPES = {
  gable: { height: 2, segments: 4 },
  flat: { height: 0.5, segments: 1 },
  hip: { height: 2, segments: 8 },
};

const COLORS = {
  white: "#ffffff",
  beige: "#f5d6ba",
  gray: "#808080",
  brown: "#8b4513",
  green: "#2e8b57",
  blue: "#4682b4",
};

const WINDOW_TYPES = {
  modern: { width: 1, height: 1.5, divisions: 1 },
  traditional: { width: 1, height: 2, divisions: 2 },
  colonial: { width: 1, height: 2, divisions: 4 },
};

export function BuildingConfigurator() {
  const [mounted, setMounted] = useState(false);
  const [config, setConfig] = useState({
    roofType: "gable",
    roofColor: "brown",
    wallColor: "beige",
    windowType: "modern",
    windowColor: "blue",
    doorColor: "brown"
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const updateConfig = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Roof Style</Label>
            <Select value={config.roofType} onValueChange={v => updateConfig('roofType', v)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gable">Gable</SelectItem>
                <SelectItem value="flat">Flat</SelectItem>
                <SelectItem value="hip">Hip</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Roof Color</Label>
            <Select value={config.roofColor} onValueChange={v => updateConfig('roofColor', v)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brown">Brown</SelectItem>
                <SelectItem value="gray">Gray</SelectItem>
                <SelectItem value="green">Green</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Wall Color</Label>
            <Select value={config.wallColor} onValueChange={v => updateConfig('wallColor', v)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="white">White</SelectItem>
                <SelectItem value="beige">Beige</SelectItem>
                <SelectItem value="gray">Gray</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Window Style</Label>
            <Select value={config.windowType} onValueChange={v => updateConfig('windowType', v)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="modern">Modern</SelectItem>
                <SelectItem value="traditional">Traditional</SelectItem>
                <SelectItem value="colonial">Colonial</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Window Color</Label>
            <Select value={config.windowColor} onValueChange={v => updateConfig('windowColor', v)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="gray">Gray</SelectItem>
                <SelectItem value="white">White</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Door Color</Label>
            <Select value={config.doorColor} onValueChange={v => updateConfig('doorColor', v)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brown">Brown</SelectItem>
                <SelectItem value="white">White</SelectItem>
                <SelectItem value="green">Green</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="h-[400px] bg-muted rounded-lg overflow-hidden">
          {mounted && <Scene {...config} />}
        </div>
      </div>
    </Card>
  );
}