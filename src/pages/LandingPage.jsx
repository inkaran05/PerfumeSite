import React from "react";
import { motion } from "framer-motion";
import "@fontsource/playfair-display";

export default function LandingPage() {
  return (
    <div className="relative h-screen w-full text-white font-sans overflow-hidden bg-black">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://videos.pexels.com/video-files/3130813/3130813-hd_1280_720_25fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-[Playfair_Display] font-bold tracking-wide mb-4">
          Unveil Your Signature
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Luxury fragrances crafted to elevate your presence.
        </p>
        <motion.a
          href="/shop"
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black px-8 py-3 rounded-full font-medium shadow-lg hover:bg-gray-100 transition"
        >
          Discover Scents
        </motion.a>
      </motion.div>
    </div>
  );
}
