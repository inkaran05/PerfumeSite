import React from "react";
import { motion } from "framer-motion";

// If using fontsource for Playfair Display
// npm install @fontsource/playfair-display
import "@fontsource/playfair-display";

const products = [
  {
    name: "Mystic No.1",
    price: "₹2,999",
    img: "https://source.unsplash.com/400x400/?perfume,bottle",
  },
  {
    name: "Mystic No.2",
    price: "₹2,999",
    img: "https://source.unsplash.com/400x400/?perfume,fragrance",
  },
  {
    name: "Mystic No.3",
    price: "₹2,999",
    img: "https://source.unsplash.com/400x400/?perfume,luxury",
  },
];

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-[Playfair_Display] tracking-wide">PerfumeSite</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#" className="text-gray-700 hover:text-black">Home</a>
            <a href="#" className="text-gray-700 hover:text-black">Shop</a>
            <a href="#" className="text-gray-700 hover:text-black">Cart (0)</a>
            <a href="#" className="text-gray-700 hover:text-black">Login</a>
            <a href="#" className="text-gray-700 hover:text-black">Signup</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="h-screen bg-gradient-to-b from-gray-100 to-white flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-[Playfair_Display] font-bold mb-4"
        >
          Unveil Your Essence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-xl mb-6"
        >
          Discover timeless fragrances that define you. Elegance captured in every drop.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Explore Scents
        </motion.button>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12 font-[Playfair_Display]">Our Signature Scents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="shadow-xl rounded-xl overflow-hidden transition"
            >
              <img src={product.img} alt={product.name} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4 font-[Playfair_Display]">Our Story</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Born from the spirit of innovation and passion, our perfumes are crafted with the finest ingredients to leave a lasting impression.
        </p>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-black text-white text-center">
        <h2 className="text-2xl mb-4 font-[Playfair_Display]">Join Our Fragrance Circle</h2>
        <p className="mb-6">Get early access to new scents and exclusive offers.</p>
        <form className="flex justify-center gap-2 flex-wrap px-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-full w-72 text-black focus:outline-none"
          />
          <button className="bg-white text-black px-6 rounded-full hover:bg-gray-200 transition">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-10 text-center text-sm text-gray-700">
        <p>&copy; {new Date().getFullYear()} PerfumeSite. All rights reserved.</p>
      </footer>
    </div>
  );
}
