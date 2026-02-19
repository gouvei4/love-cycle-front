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
import Header from "../components/sideBar/Header";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeInStagger = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.5 },
  }),
};

// Etapas do processo
const steps = [
  {
    icon: <Gift className="w-7 h-7" />,
    title: "Escolha o que doar",
    description:
      "Roupas, alimentos, brinquedos, livros ou objetos úteis — tudo em bom estado é bem-vindo. Você também pode optar por uma doação via PIX, contribuindo financeiramente com causas sociais.",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "Conecte-se com ONGs próximas",
    description:
      "Utilize nosso mapa interativo para encontrar ONGs verificadas na sua região. Escolha aquela que mais se alinha aos seus valores e veja o que ela mais precisa no momento.",
  },
  {
    icon: <Send className="w-7 h-7" />,
    title: "Doe com segurança",
    description:
      "Combine a entrega presencial com a instituição ou envie sua contribuição via PIX diretamente pelo app. Tudo com rastreabilidade, transparência e segurança para você e para quem recebe.",
  },
  {
    icon: <HeartHandshake className="w-7 h-7" />,
    title: "Veja seu impacto real",
    description:
      "Receba atualizações de como sua doação está sendo usada, histórias reais de transformação e ganhe pontos no Ciclo Solidário — um sistema de recompensas para quem pratica o bem.",
  },
];

export default function ComoFuncionaPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* MENU GLOBAL */}
      <Header />

      {/* SEÇÃO PRINCIPAL */}
      <section
        className="flex-grow bg-gradient-to-b from-green-50/80 to-gray-50 py-20 px-6"
        aria-label="Como funciona a LoveCycle"
      >
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Como funciona a{" "}
            <span className="text-green-600">LoveCycle</span>?
          </h2>
          <p className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed">
            Nossa plataforma conecta pessoas generosas como você a ONGs
            confiáveis e impactantes. Acreditamos que doar deve ser simples,
            seguro e recompensador. Veja como participar do ciclo de amor.
          </p>

          {/* ETAPAS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeInStagger}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all text-left md:text-center border border-green-50"
              >
                <div className="flex md:justify-center items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 text-green-700 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-green-700 md:hidden">
                    Passo {index + 1}
                  </span>
                </div>

                <div className="md:block hidden mb-2 text-xs font-semibold uppercase tracking-wide text-green-700">
                  Passo {index + 1}
                </div>

                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA FINAL EM CARD */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-20 max-w-3xl mx-auto bg-white rounded-3xl shadow-md border border-green-100 px-8 py-10"
          >
            <p className="text-xl text-gray-800 mb-6 leading-relaxed">
              Está pronto para transformar vidas com um simples gesto? Junte-se
              ao{" "}
              <span className="text-green-600 font-semibold">LoveCycle</span> e
              comece agora mesmo.
            </p>

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
                  className="border border-green-600 text-green-600 px-6 py-3 rounded-2xl hover:bg-green-50 hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-green-200"
                  aria-label="Sou ONG"
                >
                  Sou ONG
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* RODAPÉ */}
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
