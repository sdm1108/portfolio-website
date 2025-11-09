"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`fixed w-full z-30 transition ${scrolled ? 'backdrop-blur bg-white/70 dark:bg-slate-900/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">YourName</Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {links.map(l => <Link key={l.href} href={l.href} className="hover:underline">{l.label}</Link>)}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
