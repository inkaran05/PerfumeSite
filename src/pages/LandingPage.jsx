import React from "react";
import { motion } from "framer-motion";
import "@fontsource/playfair-display";

export default function LandingPage() {
  return (
    <div className="relative h-screen w-full font-sans overflow-hidden bg-[#121212] text-[#e6e1dc]">

      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-80 z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />

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
        <p className="text-2xl md:text-3xl text-[#c5a880] mb-10 max-w-3xl drop-shadow-md">
          Luxury fragrances crafted to elevate your presence.
        </p>
        <motion.a
          href="/shop"
          whileHover={{ scale: 1.05 }}
          className="border border-[#c5a880] text-[#c5a880] px-10 py-4 rounded-full font-semibold shadow-xl hover:bg-[#c5a880] hover:text-[#121212] transition"
        >
          Discover Scents
        </motion.a>
      </motion.div>
    </div>
  );
}
