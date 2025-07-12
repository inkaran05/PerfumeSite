import React from "react";

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white text-gray-900 font-sans min-h-screen flex flex-col">
      {/* Header / Navbar */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-pink-700 font-serif">PerfumeSite</h1>
          <nav className="space-x-8 text-base font-semibold text-pink-600">
            <a href="/" className="hover:text-pink-800 transition">Home</a>
            <a href="/shop" className="hover:text-pink-800 transition">Shop</a>
            <a href="/login" className="hover:text-pink-800 transition">Login</a>
            <a href="/signup" className="hover:text-pink-800 transition">Signup</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-12 px-6 max-w-7xl mx-auto">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-pink-100 border-t border-pink-300 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-12 text-sm text-pink-700">
          <div>
            <h3 className="font-serif font-bold mb-3 text-pink-800">PerfumeSite</h3>
            <p>© {new Date().getFullYear()} PerfumeSite. All rights reserved.</p>
          </div>
          <div>
            <h3 className="font-serif font-bold mb-3 text-pink-800">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline hover:text-pink-900 transition">About Us</a></li>
              <li><a href="#" className="hover:underline hover:text-pink-900 transition">Contact</a></li>
              <li><a href="#" className="hover:underline hover:text-pink-900 transition">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-bold mb-3 text-pink-800">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-pink-900 transition">Instagram</a>
              <a href="#" className="hover:text-pink-900 transition">Twitter</a>
              <a href="#" className="hover:text-pink-900 transition">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
