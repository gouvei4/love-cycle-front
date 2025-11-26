"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  MapPin,
  Gamepad,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/sideBar/Header";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeInStagger = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6 },
  }),
};

export default function Home() {
  return (
    <>
      <Head>
        <title>LoveCycle - Conectando doações com quem mais precisa</title>
        <meta
          name="description"
          content="LoveCycle aproxima pessoas e ONGs para facilitar doações de roupas, alimentos e objetos com impacto real."
        />
        <meta property="og:title" content="LoveCycle - Doações com impacto" />
        <meta
          property="og:description"
          content="Junte-se ao ciclo do bem e faça a diferença."
        />
        <meta property="og:image" content="/social-preview.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 flex flex-col">
        {/* HEADER SEPARADO */}
        <Header />

        {/* HERO */}
        <motion.section
          className="bg-gradient-to-b from-green-50 to-white py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-green-100 text-xs font-medium text-green-700 mb-4">
                🌍 Plataforma social • Roupas, alimentos e objetos
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-900 leading-tight">
                Conectando doações
                <br />
                com quem mais precisa
              </h1>
              <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-700">
                LoveCycle aproxima pessoas e ONGs para facilitar doações de
                roupas, alimentos e objetos com impacto real e transparência em
                cada etapa.
              </p>
              <div className="flex justify-center md:justify-start gap-4 flex-wrap">
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
                    className="border border-green-600 text-green-700 px-6 py-3 rounded-2xl hover:bg-green-50 hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-green-200"
                    aria-label="Sou ONG"
                  >
                    Sou ONG
                  </button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>ONGs verificadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Doações rastreáveis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Gamificação solidária</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-6 bg-gradient-to-tr from-green-100 via-emerald-50 to-white rounded-3xl blur-xl" />
                <div className="relative bg-white rounded-3xl shadow-xl border border-green-100 p-4">
                  <Image
                    src="/img/img3.jpg"
                    alt="Ilustração de pessoas doando pela plataforma LoveCycle"
                    width={600}
                    height={500}
                    className="w-full h-auto rounded-2xl object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* COMO FUNCIONA */}
        <motion.section
          id="como-funciona"
          className="py-16 px-6 bg-white flex-grow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-4">
            Como o LoveCycle funciona
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Em poucos cliques você encontra ONGs próximas, acompanha suas
            doações e ainda participa de um ciclo de solidariedade gamificado.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <motion.div
              tabIndex={0}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-green-600 cursor-pointer"
              aria-label="Card Geolocalização"
              custom={0}
              variants={fadeInStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />
                Geolocalização
              </h3>
              <p className="text-gray-600">
                Conecte-se com ONGs e pontos de coleta próximos a você em
                segundos.
              </p>
            </motion.div>

            <motion.div
              tabIndex={0}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-green-600 cursor-pointer"
              aria-label="Card Transparência garantida"
              custom={1}
              variants={fadeInStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Transparência garantida
              </h3>
              <p className="text-gray-600">
                As doações vão direto para ONGs verificadas e seguras, com
                histórico acessível.
              </p>
            </motion.div>

            <motion.div
              tabIndex={0}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-green-600 cursor-pointer"
              aria-label="Card Gamificação"
              custom={2}
              variants={fadeInStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Gamepad className="w-5 h-5 text-green-600" />
                Gamificação
              </h3>
              <p className="text-gray-600">
                Ganhe pontos, conquistas e reconhecimento por suas ações
                solidárias.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* PASSOS */}
        <motion.section
          id="passos"
          className="py-20 px-6 bg-gradient-to-b from-green-50 to-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-center text-green-700 mb-4">
            Doe em apenas 3 passos
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Simples, rápido e seguro. Em poucos minutos você conecta o que
            sobra na sua casa com quem mais precisa.
          </p>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
            {[
              {
                icon: "🌱",
                title: "Escolha uma ONG",
                text: "Explore as ONGs disponíveis na plataforma e selecione aquela que mais ressoa com sua causa.",
              },
              {
                icon: "💬",
                title: "Converse diretamente",
                text: "Utilize o chat integrado ou entre em contato usando os dados fornecidos pela ONG.",
              },
              {
                icon: "🎁",
                title: "Realize a doação",
                text: "Finalize sua doação com segurança e ajude quem precisa de forma prática e confiável.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-5xl mb-6">{step.icon}</div>
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* DEPOIMENTOS */}
        <motion.section
          id="depoimentos"
          className="py-16 px-6 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-4">
            O que dizem sobre o LoveCycle
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Pessoas e organizações que já fazem parte do ciclo do bem.
          </p>
          <div className="max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ana Silva",
                text: "LoveCycle facilitou muito minhas doações. Agora sei que estão chegando para quem realmente precisa!",
                avatar: "/img/perfil1.jpg",
              },
              {
                name: "Carlos Oliveira",
                text: "Plataforma transparente e segura. Recomendo para todos que querem ajudar.",
                avatar: "/img/perfil2.jpg",
              },
              {
                name: "Maria Fernanda",
                text: "A gamificação me motivou a continuar doando com mais frequência. Adoro a ideia!",
                avatar: "/img/perfil3.jpg",
              },
            ].map(({ name, text, avatar }) => (
              <div
                key={name}
                className="bg-green-50 p-6 rounded-2xl shadow text-center border border-green-100"
              >
                <Image
                  src={avatar}
                  alt={name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="italic text-gray-700 mb-3">&quot;{text}&quot;</p>
                <strong className="text-green-700">{name}</strong>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CONTATO */}
        <motion.section
          id="contato"
          className="py-16 px-6 bg-green-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-4">
            Fale conosco
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Tem interesse em cadastrar sua ONG, ser parceiro ou apoiar o
            projeto? Envie uma mensagem e entraremos em contato.
          </p>
          <form
            className="max-w-3xl mx-auto flex flex-col gap-6"
            aria-label="Formulário de contato"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Obrigado pelo contato! Em breve responderemos.");
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
              className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              required
              rows={5}
              className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-2xl hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-green-400"
              aria-label="Enviar mensagem"
            >
              Enviar
            </button>
          </form>
        </motion.section>

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
    </>
  );
}
