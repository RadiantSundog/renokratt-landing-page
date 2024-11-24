import React from "react";

export function DemoSection() {
  return (
    <section id="configurator" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 gradient-text text-center">
          Our Configurator in Action
        </h2>
        <div
          className="relative"
          style={{ paddingTop: "56.25%" /* 16:9 Aspect Ratio */ }}
        >
          {/* Replace 'your-video-id' with your actual YouTube video ID or video source URL */}
          <iframe
            src="https://www.youtube.com/embed/your-video-id"
            title="Product Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
