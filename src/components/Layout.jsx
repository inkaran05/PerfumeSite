import React from "react";

export default function Layout({ children }) {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header / Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">PerfumeSite</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="/" className="text-gray-700 hover:text-black">Home</a>
            <a href="/shop" className="text-gray-700 hover:text-black">Shop</a>
            <a href="/cart" className="text-gray-700 hover:text-black">Cart (0)</a>
            <a href="/login" className="text-gray-700 hover:text-black">Login</a>
            <a href="/signup" className="text-gray-700 hover:text-black">Signup</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen py-10 px-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t mt-10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold mb-2">PerfumeSite</h3>
            <p>© {new Date().getFullYear()} PerfumeSite. All rights reserved.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-black">Instagram</a>
              <a href="#" className="hover:text-black">Twitter</a>
              <a href="#" className="hover:text-black">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
