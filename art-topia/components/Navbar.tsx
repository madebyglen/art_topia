"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Artists", href: "/artists" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto h-20 px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold tracking-[0.3em] text-white hover:text-yellow-400 transition duration-300"
        >
          ART-TOPIA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm uppercase tracking-[0.15em] text-white/80 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}

          <button className="px-5 py-2 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition duration-300 shadow-lg shadow-yellow-400/20">
            Explore
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 px-6 py-6 flex flex-col gap-5 border-t border-white/10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-yellow-400 uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}

          <button className="mt-2 px-5 py-3 rounded-full bg-yellow-400 text-black font-semibold">
            Explore
          </button>
        </div>
      </div>
    </header>
  );
}