"use client";

import { useRef, useState } from "react";

export default function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="flex flex-col items-center text-center py-12 px-6">
      <a href="/about">
        <button className="border border-gray-400 rounded-full px-4 py-1 text-sm mb-4">
          About
        </button>
      </a>
      <h2 className="text-[20px] font-semibold">Aman New York</h2>
      <p className="text-gray-600 max-w-2xl mt-2">
        East meets West and old meets new. Manhattan’s iconic Crown Building is
        reimagined as Aman New York, where the city’s original architectural
        splendor and Aman’s harmonious design language collide, reimagining the
        inimitable tranquility of Aman in the heart of Manhattan’s midtown. With
        a year-round Garden Terrace, flagship Aman Spa and spacious suites all
        among the largest in the city.
      </p>
      <div className="mt-6 w-full max-w-4xl">
        <div className="relative w-full h-[500px] bg-black rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/images/video.mp4" type="video/mp4" />
          </video>
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 bg-white bg-opacity-70 text-black px-3 py-1 text-sm rounded-full shadow-md hover:bg-opacity-90 transition"
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>
      </div>
    </section>
  );
}
