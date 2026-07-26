"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "text-ink" : "text-ivory";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ivory border-b border-gold-light" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className={`font-display text-xl md:text-2xl tracking-wide ${
            scrolled ? "text-oxblood" : "text-ivory drop-shadow-md"
          }`}
        >
          Goan Parampara
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} className={`gp-underline ${textColor}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link href="/cart">
            <ShoppingBag size={20} className={textColor} />
          </Link>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={22} className={textColor} /> : <Menu size={22} className={textColor} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-3 bg-ivory text-ink">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
