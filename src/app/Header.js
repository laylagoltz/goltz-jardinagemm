"use client"; // necessário para usar useState e useEffect

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full backdrop-blur-md text-white shadow-lg z-50 transition-all duration-300 ${
        scrolled ? "bg-green-800/90 py-2" : "bg-green-800/70 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5">
        <h1 className="text-3xl font-extrabold tracking-wide hover:text-green-300 transition-colors">
          Goltz Jardinagem
        </h1>
        <nav className="space-x-6 text-lg font-medium">
          <Link href="/" className="hover:text-green-300 transition-colors">
            Home
          </Link>
          <Link href="/sobre" className="hover:text-green-300 transition-colors">
            Sobre
          </Link>
          <Link href="/servicos" className="hover:text-green-300 transition-colors">
            Serviços
          </Link>
          <Link href="/galeria" className="hover:text-green-300 transition-colors">
            Galeria
          </Link>
          <Link
            href="/contato"
            className="px-4 py-2 bg-green-700 rounded-full hover:bg-gradient-to-r hover:from-green-500 hover:to-green-900 transition-all"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
