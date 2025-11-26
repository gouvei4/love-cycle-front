"use client";

import { motion } from "framer-motion";
import {
  Mail,
  User,
  MessageSquare,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import Header from "../components/sideBar/Header";

export default function Contato() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado pelo contato! Em breve responderemos 💚");
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* MENU GLOBAL */}
      <Header />

      {/* CONTEÚDO */}
      <section className="flex-grow py-20 bg-gradient-to-b from-green-50/80 to-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-gray-900"
          >
            Fale com a gente 💌
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 mb-10 text-lg"
          >
            Tem dúvidas, sugestões ou quer se conectar com a LoveCycle? Preencha
            o formulário abaixo e responderemos o quanto antes!
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-3xl shadow-xl space-y-6 text-left border border-green-100"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium text-sm text-gray-700">
                  Nome
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Seu nome"
                    required
                    className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
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
                    required
                    className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                  />
                </div>
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
                  required
                  className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 resize-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 hover:scale-[1.01] transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-green-400"
              >
                Enviar mensagem
              </button>
              <p className="text-xs text-gray-500 text-center">
                Ou, se preferir, envie um e-mail diretamente para{" "}
                <span className="font-medium text-green-700">
                  contato@lovecycle.app
                </span>
                .
              </p>
            </div>
          </motion.form>
        </div>
      </section>

      {/* FOOTER */}
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
