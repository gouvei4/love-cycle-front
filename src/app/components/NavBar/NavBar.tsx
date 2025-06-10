'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600">
          LoveCycle
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
          <Link href="/about" className="hover:text-green-600">Sobre</Link>
          <Link href="/functtion" className="hover:text-green-600">Como Funciona</Link>
          <Link href="/game" className="hover:text-green-600">Gameficação</Link>
          <Link href="/contact" className="hover:text-green-600">Contato</Link>
          <Link href="/login-user" className="ml-4 px-4 py-2 rounded-2xl border border-green-600 text-green-600 hover:bg-green-50 transition">Entrar</Link>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-gray-700 font-medium">
          <Link href="/about" className="block">Sobre</Link>
          <Link href="/functtion" className="block">Como Funciona</Link>
          <Link href="/game" className="block">ONGs</Link>
          <Link href="/contact" className="block">Contato</Link>
          <Link href="/login" className="block px-4 py-2 border border-green-600 text-green-600 rounded-2xl w-fit">Entrar</Link>
        </div>
      )}
    </header>
  );
}
