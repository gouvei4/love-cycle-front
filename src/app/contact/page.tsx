"use client"

import { motion } from "framer-motion"
import { Mail, User, MessageSquare, Twitter, Instagram, Facebook } from "lucide-react"

export default function Contato() {
  return (
    <>
      <section className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Fale com a gente 💌
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 mb-10"
          >
            Tem dúvidas, sugestões ou quer se conectar com o LoveCycle? Preencha o formulário abaixo e responderemos o quanto antes!
          </motion.p>

          <motion.form 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl space-y-6 text-left"
          >
            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">
                Nome
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">
                Mensagem
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <textarea
                  placeholder="Escreva sua mensagem aqui..."
                  rows={5}
                  className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-pink-700 transition"
            >
              Enviar mensagem
            </button>
          </motion.form>
        </div>
      </section>

      <footer className="bg-green-800 text-green-200 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
          <p>
            © {new Date().getFullYear()} LoveCycle. Todos os direitos
            reservados.
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
  )
}
