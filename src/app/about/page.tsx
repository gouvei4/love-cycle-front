"use client";

import Image from "next/image";
import {
  Sprout,
  Handshake,
  Rocket,
  CreditCard,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";
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
    transition: { delay: 0.12 * i, duration: 0.6 },
  }),
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* MENU GLOBAL */}
      <Header />

      {/* CONTEÚDO */}
      <section
        aria-labelledby="about-title"
        className="flex-grow bg-gradient-to-b from-green-50/80 to-white py-20 px-6"
      >
        <motion.div
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          {/* Texto principal */}
          <div>
            <h2
              id="about-title"
              className="text-4xl font-extrabold text-gray-900 mb-6"
            >
              Sobre a <span className="text-green-600">LoveCycle</span>
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-prose">
              A <strong>LoveCycle</strong> nasceu para tornar as doações mais
              simples, seguras e alegres! Conectamos corações dispostos a ajudar
              com ONGs sérias e confiáveis, usando tecnologia, gamificação e
              muita transparência para fortalecer o ciclo do bem.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <Sprout
                      className="text-green-600"
                      size={24}
                      aria-hidden="true"
                    />
                  ),
                  title: "Nossa missão",
                  description:
                    "Cultivar um ciclo contínuo de solidariedade, espalhando impacto positivo e transformador onde mais precisamos.",
                },
                {
                  icon: (
                    <Handshake
                      className="text-green-600"
                      size={24}
                      aria-hidden="true"
                    />
                  ),
                  title: "Nossos valores",
                  description:
                    "Empatia, ética, inclusão, responsabilidade social e inovação. É isso que pulsa em cada uma das nossas ações.",
                },
                {
                  icon: (
                    <Rocket
                      className="text-green-600"
                      size={24}
                      aria-hidden="true"
                    />
                  ),
                  title: "Nossa visão",
                  description:
                    "Ser a ponte digital mais confiável entre doadores e beneficiários, levando amor e transformação pelo Brasil e além.",
                },
                {
                  icon: (
                    <CreditCard
                      className="text-green-600"
                      size={24}
                      aria-hidden="true"
                    />
                  ),
                  title: "Doe por PIX",
                  description:
                    "Escolha a ONG que você quer apoiar e doe diretamente via PIX de forma prática, segura e transparente.",
                },
              ].map(({ icon, title, description }, index) => (
                <motion.article
                  key={title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeInStagger}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-green-50 px-5 py-4 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-50 text-green-700 flex items-center justify-center flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Imagem ilustrativa */}
          <motion.div
            className="relative w-full h-96 rounded-3xl overflow-hidden shadow-xl border border-green-100"
            role="img"
            aria-label="Ilustração representando doações e solidariedade"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/img/sobre.png"
              alt="Ilustração sobre doações e solidariedade"
              fill
              className="object-cover"
              priority
            />
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
