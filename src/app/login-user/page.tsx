"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Twitter, Instagram, Facebook, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-md mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-center mb-6">Acesse sua conta</h2>

            <form className="space-y-5">
              <div>
                <label className="block mb-1 font-medium text-sm text-gray-700">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium text-sm text-gray-700">Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className="pl-10 pr-10 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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

              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
              >
                Entrar
              </button>

              <div className="mt-4 text-center">
                <a
                  href="/login-ong"
                  className="inline-block text-green-600 hover:underline font-semibold cursor-pointer"
                >
                  Sou ONG? Clique aqui para realizar o login
                </a>
              </div>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
              Ainda não tem conta?{" "}
              <a href="/register-user" className="text-green-600 hover:underline font-medium">
                Cadastre-se
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-green-800 text-green-200 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
          <p>
            © {new Date().getFullYear()} LoveCycle. Todos os direitos reservados.
          </p>
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
    </>
  );
}
