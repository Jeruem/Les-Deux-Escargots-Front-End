"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "Menu" },
  { href: "/boissons", label: "Boissons" },
  { href: "/reservation", label: "Réservation" },
  { href: "/find-us", label: "Adresse" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-wide">
          Les Deux Escargots
        </Link>

        <button
          className="md:hidden p-2 border rounded-lg"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          ☰
        </button>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link className="text-sm hover:underline underline-offset-4" href={l.href}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/reservation"
              className="text-sm px-3 py-2 rounded-xl border hover:bg-black hover:text-white transition"
            >
              Réserver
            </Link>
          </li>
        </ul>
      </nav>

      {open && (
        <ul className="md:hidden border-t bg-white">
          {links.map((l) => (
            <li key={l.href} className="px-4 py-3">
              <Link className="block" href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
