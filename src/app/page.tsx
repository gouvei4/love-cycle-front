"use client";

import { motion } from "framer-motion";
import { CheckCircle, MapPin, Gamepad, Twitter, Instagram, Facebook } from 'lucide-react';
import Head from 'next/head';
import Link from "next/link";


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

        <motion.section
          className="bg-green-100 py-20 px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Conectando doações com quem mais precisa
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            LoveCycle aproxima pessoas e ONGs para facilitar doações de roupas,
            alimentos e objetos com impacto real.
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
                className="border border-green-600 text-green-600 px-6 py-3 rounded-2xl hover:bg-green-100 hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-green-400"
                aria-label="Sou ONG"
              >
                Sou ONG
              </button>
            </Link>

          </div>
        </motion.section>

        <motion.section
          className="py-16 px-6 bg-white flex-grow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-10">
            Como o LoveCycle funciona
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div
              tabIndex={0}
              className="bg-gray-50 p-6 rounded-2xl shadow transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-green-600 cursor-pointer"
              aria-label="Card Geolocalização"
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600 animate-pulse-slow" />
                Geolocalização
              </h3>
              <p>
                Conecte-se com ONGs e pontos de coleta próximos a você em segundos.
              </p>
            </div>

            <div
              tabIndex={0}
              className="bg-gray-50 p-6 rounded-2xl shadow transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-green-600 cursor-pointer"
              aria-label="Card Transparência garantida"
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Transparência garantida
              </h3>
              <p>
                As doações vão direto para ONGs verificadas e seguras.
              </p>
            </div>

            <div
              tabIndex={0}
              className="bg-gray-50 p-6 rounded-2xl shadow transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-green-600 cursor-pointer"
              aria-label="Card Gamificação"
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Gamepad className="w-5 h-5 text-green-600" />
                Gamificação
              </h3>
              <p>
                Ganhe pontos, conquistas e reconhecimento por suas ações solidárias.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-20 px-6 bg-gradient-to-b from-green-50 to-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-center text-green-700 mb-16">
            Doe em apenas 3 passos
          </h2>

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
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-5xl mb-6">{step.icon}</div>
                <h3 className="text-2xl font-semibold text-green-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>


        <motion.section
          className="py-16 px-6 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-12">
            O que dizem sobre o LoveCycle
          </h2>
          <div className="max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ana Silva',
                text: 'LoveCycle facilitou muito minhas doações. Agora sei que estão chegando para quem realmente precisa!',
                avatar: '/img/perfil1.jpg',
              },
              {
                name: 'Carlos Oliveira',
                text: 'Plataforma transparente e segura. Recomendo para todos que querem ajudar.',
                avatar: '/img/perfil2.jpg',
              },
              {
                name: 'Maria Fernanda',
                text: 'A gamificação me motivou a continuar doando com mais frequência. Adoro a ideia!',
                avatar: '/img/perfil3.jpg',
              },
            ].map(({ name, text, avatar }) => (
              <div
                key={name}
                className="bg-green-50 p-6 rounded-2xl shadow text-center"
              >
                <img
                  src={avatar}
                  alt={name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="italic text-gray-700 mb-3">"{text}"</p>
                <strong className="text-green-700">{name}</strong>
              </div>
            ))}
          </div>
        </motion.section>



        <motion.section
          className="py-16 px-6 bg-green-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-10">
            Fale conosco
          </h2>
          <form
            className="max-w-3xl mx-auto flex flex-col gap-6"
            aria-label="Formulário de contato"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Obrigado pelo contato! Em breve responderemos.');
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

        <footer className="bg-green-800 text-green-200 py-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
            <p>© {new Date().getFullYear()} LoveCycle. Todos os direitos reservados.</p>
            <div className="flex gap-6 text-green-300">
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
