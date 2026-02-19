import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-green-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-green-600 flex items-center justify-center text-white font-bold text-sm">
            LC
          </div>
          <span className="font-semibold text-lg text-green-800">
            LoveCycle
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a
            href="/functtion"
            className="hover:text-green-700 transition-colors"
          >
            Como funciona
          </a>
          <a href="/about" className="hover:text-green-700 transition-colors">
            Sobre
          </a>
          <a href="/game" className="hover:text-green-700 transition-colors">
            Gameficação
          </a>
          <a href="/contact" className="hover:text-green-700 transition-colors">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login-user"
            className="hidden md:inline-flex text-sm px-4 py-2 rounded-full border border-green-600 text-green-700 hover:bg-green-50 transition-colors"
          >
            Entrar
          </Link>
          <Link href="/login-user">
            <button className="text-sm bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
              Começar agora
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
