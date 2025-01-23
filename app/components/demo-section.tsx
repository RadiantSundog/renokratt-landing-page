"use client";

import { useEffect, useState } from "react";

export function DemoSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [videoSrc, setVideoSrc] = useState("/demo.mp4"); // Default to desktop video

  useEffect(() => {
    // Indicate the component has mounted
    setIsMounted(true);

    // Update video source based on screen size
    const updateVideoSource = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setVideoSrc(isMobile ? "/demo-mobile.mp4" : "/demo.mp4");
    };

    updateVideoSource(); // Run on initial render
    window.addEventListener("resize", updateVideoSource); // Listen for screen size changes

    return () => {
      window.removeEventListener("resize", updateVideoSource); // Clean up
    };
  }, []);

  if (!isMounted) {
    // Render nothing during server-side rendering
    return null;
  }

  return (
    <section className="bg-white section-padding px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Video Player */}
        <div className="w-full h-full bg-gray-200 rounded-3xl">
          <video
            className="w-full h-full object-cover rounded-3xl"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
