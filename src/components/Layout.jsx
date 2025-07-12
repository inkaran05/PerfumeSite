import React from "react";

export default function Layout({ children }) {
  return (
    <div className="bg-[#121212] text-[#e6e1dc] font-sans min-h-screen flex flex-col">
      {/* Header / Navbar */}
      <header className="bg-[#121212] border-b border-[#c5a880] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#c5a880] font-serif">PerfumeSite</h1>
          <nav className="space-x-10 text-lg font-semibold text-[#c5a880]">
            <a href="/" className="hover:text-[#f0e6d2] transition">Home</a>
            <a href="/shop" className="hover:text-[#f0e6d2] transition">Shop</a>
            <a href="/login" className="hover:text-[#f0e6d2] transition">Login</a>
            <a href="/signup" className="hover:text-[#f0e6d2] transition">Signup</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-16 px-6 max-w-7xl mx-auto">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#121212] border-t border-[#c5a880] mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-12 text-sm text-[#c5a880]">
          <div>
            <h3 className="font-serif font-bold mb-3 text-[#c5a880]">PerfumeSite</h3>
            <p>© {new Date().getFullYear()} PerfumeSite. All rights reserved.</p>
          </div>
          <div>
            <h3 className="font-serif font-bold mb-3 text-[#c5a880]">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline hover:text-[#f0e6d2] transition">About Us</a></li>
              <li><a href="#" className="hover:underline hover:text-[#f0e6d2] transition">Contact</a></li>
              <li><a href="#" className="hover:underline hover:text-[#f0e6d2] transition">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-bold mb-3 text-[#c5a880]">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[#f0e6d2] transition">Instagram</a>
              <a href="#" className="hover:text-[#f0e6d2] transition">Twitter</a>
              <a href="#" className="hover:text-[#f0e6d2] transition">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
