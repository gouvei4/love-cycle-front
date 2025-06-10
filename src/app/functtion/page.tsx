"use client";

import {
  MapPin,
  Gift,
  Send,
  HeartHandshake,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Etapas do processo
const steps = [
  {
    icon: <Gift className="w-8 h-8 text-green-600" />,
    title: "Escolha o que doar",
    description:
      "Roupas, alimentos, brinquedos, livros ou objetos úteis — tudo em bom estado é bem-vindo. Você também pode optar por uma doação via PIX, contribuindo financeiramente com causas sociais.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-green-600" />,
    title: "Conecte-se com ONGs próximas",
    description:
      "Utilize nosso mapa interativo para encontrar ONGs verificadas na sua região. Escolha aquela que mais se alinha aos seus valores e veja o que ela mais precisa no momento.",
  },
  {
    icon: <Send className="w-8 h-8 text-green-600" />,
    title: "Doe com segurança",
    description:
      "Combine a entrega presencial com a instituição ou envie sua contribuição via PIX diretamente pelo app. Tudo com rastreabilidade, transparência e segurança para você e para quem recebe.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-green-600" />,
    title: "Veja seu impacto real",
    description:
      "Receba atualizações de como sua doação está sendo usada, histórias reais de transformação e ganhe pontos no Ciclo Solidário — um sistema de recompensas para quem pratica o bem.",
  },
];

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Seção principal */}
      <section
        className="flex-grow py-24 px-6"
        aria-label="Como funciona a LoveCycle"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Como funciona a{" "}
            <span className="text-green-600">LoveCycle</span>?
          </h2>
          <p className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed">
            Nossa plataforma conecta pessoas generosas como você a ONGs
            confiáveis e impactantes. Acreditamos que doar deve ser simples,
            seguro e recompensador. Veja como participar do ciclo de amor.
          </p>

          {/* Etapas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-center"
              >
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA final */}
          <div className="mt-20 space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-xl text-gray-800 max-w-xl mx-auto"
            >
              Está pronto para transformar vidas com um simples gesto? Junte-se
              ao{" "}
              <span className="text-green-600 font-semibold">LoveCycle</span>{" "}
              e comece agora mesmo.
            </motion.p>

            <div className="flex justify-center gap-4 flex-wrap">

            <Link href="/login-user">
              <button
                className="bg-green-600 text-white px-6 py-3 rounded-2xl hover:bg-green-700 hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-green-400"
                aria-label="Comece a doar"
              >
                Comece a doar
              </button>
              </Link>

            <Link href="/login-ong">
              <button
                className="border border-green-600 text-green-600 px-6 py-3 rounded-2xl hover:bg-green-100 hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-green-400"
                aria-label="Sou ONG"
              >
                Sou ONG
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
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
    </div>
  );
}
