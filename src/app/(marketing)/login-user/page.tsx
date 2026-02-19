"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Twitter,
  Instagram,
  Facebook,
  Eye,
  EyeOff,
} from "lucide-react";
import Link from "next/link";
import Header from "../components/sideBar/Header";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login de demonstração. Em breve conectamos com o backend 💚");
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <section className="flex-grow bg-gradient-to-b from-green-50/80 to-gray-50 py-20">
        <div className="max-w-md mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-green-100"
          >
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
              Acesse sua conta
            </h2>
            <p className="text-center text-sm text-gray-600 mb-8">
              Entre para continuar doando e acompanhando seu impacto pelo
              LoveCycle.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 font-medium text-sm text-gray-700">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium text-sm text-gray-700">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    required
                    className="pl-10 pr-10 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-gray-500 hover:text-green-600 transition-colors"
                    tabIndex={-1}
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-xs text-green-700 hover:underline"
                >
                  Esqueci minha senha
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 hover:scale-[1.01] transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-green-400"
              >
                Entrar
              </button>

              <div className="mt-4 text-center text-sm text-gray-600">
                <p className="mb-1">
                  <Link
                    href="/login-ong"
                    className="text-green-700 hover:underline font-semibold"
                  >
                    Sou ONG — acessar painel de instituição
                  </Link>
                </p>
              </div>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              Ainda não tem conta?{" "}
              <Link
                href="/register-user"
                className="text-green-700 hover:underline font-medium"
              >
                Cadastre-se
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="bg-green-800 text-green-200 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
          <div>
            <p className="font-medium">
              © {new Date().getFullYear()} LoveCycle. Todos os direitos
              reservados.
            </p>
            <p className="text-sm text-green-300 mt-1">
              Conectando doações com impacto real em comunidades por todo o
              Brasil.
            </p>
          </div>
          <div className="flex gap-6 text-green-300">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
