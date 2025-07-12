import React from "react";
import { motion } from "framer-motion";
import "@fontsource/playfair-display";

export default function LandingPage() {
  return (
    <div className="relative h-screen w-full text-white font-sans overflow-hidden bg-gradient-to-br from-pink-700 via-pink-900 to-purple-900">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 blur-sm z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://videos.pexels.com/video-files/3130813/3130813-hd_1280_720_25fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 max-w-4xl mx-auto"
      >
        <h1 className="text-6xl md:text-8xl font-[Playfair_Display] font-extrabold tracking-wide mb-6 drop-shadow-lg">
          Unveil Your Signature
        </h1>
        <p className="text-2xl md:text-3xl text-pink-200 mb-10 max-w-3xl drop-shadow-md">
          Luxury fragrances crafted to elevate your presence.
        </p>
        <motion.a
          href="/shop"
          whileHover={{ scale: 1.05 }}
          className="bg-pink-100 text-pink-900 px-10 py-4 rounded-full font-semibold shadow-xl hover:bg-pink-200 transition"
        >
          Discover Scents
        </motion.a>
      </motion.div>
    </div>
  );
}
