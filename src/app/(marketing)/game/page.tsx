// components/Gamificacao.tsx
"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Star,
  Users,
  ArrowUp,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import Header from "../components/sideBar/Header";

const heroesTop = [
  {
    medal: "🥇",
    name: "Ana S.",
    donations: 28,
    points: 280,
    level: "Líder Solidária",
    barWidth: "100%",
    badgeColor: "bg-yellow-100 text-yellow-800",
  },
  {
    medal: "🥈",
    name: "Lucas M.",
    donations: 23,
    points: 230,
    level: "Aliado do Bem",
    barWidth: "80%",
    badgeColor: "bg-gray-100 text-gray-800",
  },
  {
    medal: "🥉",
    name: "Carla D.",
    donations: 19,
    points: 190,
    level: "Apoio Constante",
    barWidth: "65%",
    badgeColor: "bg-amber-100 text-amber-800",
  },
];


export default function Gamificacao() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* MENU GLOBAL */}
      <Header />

      {/* CONTEÚDO */}
      <section className="flex-grow py-20 bg-gradient-to-b from-green-50/80 to-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-gray-900"
          >
            Gamificação e Ranking Solidário
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
          >
            Doe, acumule pontos, conquiste medalhas e suba no ranking dos heróis
            do bem! Transforme boas ações em conquistas visíveis e inspire
            outros a fazer o mesmo.
          </motion.p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Feature
              icon={<Star className="w-6 h-6" />}
              title="Pontuação por doação"
              desc="Ganhe pontos a cada doação realizada."
            />
            <Feature
              icon={<Trophy className="w-6 h-6" />}
              title="Medalhas e conquistas"
              desc="Desbloqueie badges especiais ao alcançar metas."
            />
            <Feature
              icon={<ArrowUp className="w-6 h-6" />}
              title="Suba de nível"
              desc="Quanto mais você doa, mais alto você chega!"
            />
            <Feature
              icon={<Users className="w-6 h-6" />}
              title="Ranking de doadores"
              desc="Veja quem mais contribuiu e entre para o topo!"
            />
          </div>

          {/* Ranking */}
          <motion.div
  initial={{ scale: 0.95, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="bg-white p-8 rounded-3xl shadow-xl max-w-3xl mx-auto border border-green-100"
>
  <h3 className="text-2xl font-semibold mb-2 text-gray-900">
    Top 3 Heróis do Mês
  </h3>
  <p className="text-sm text-gray-500 mb-6">
    Veja quem mais contribuiu neste ciclo solidário 💚
  </p>

  <div className="space-y-4">
    {heroesTop.map((hero) => (
      <div
        key={hero.name}
        className="rounded-2xl bg-gradient-to-r from-green-50 to-white border border-green-100 px-4 py-3 flex items-center gap-3"
      >
        <span className="text-3xl">{hero.medal}</span>

        <div className="flex-1">
          <div className="flex justify-between items-center gap-3">
            <p className="font-semibold text-gray-900">
              {hero.name}{" "}
              <span className="text-gray-500 text-sm">
                — {hero.donations} doações
              </span>
            </p>
            <span className="text-green-700 font-semibold text-sm">
              +{hero.points} pts
            </span>
          </div>

          <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full font-medium ${hero.badgeColor}`}
            >
              {hero.level}
            </span>
            <span>Nível {hero.medal === "🥇" ? "Ouro" : hero.medal === "🥈" ? "Prata" : "Bronze"}</span>
          </div>

          {/* Barra de progresso */}
          <div className="mt-2 h-2 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: hero.barWidth }}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
</motion.div>

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

function Feature({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center border border-green-50 hover:shadow-lg hover:-translate-y-1 transition-all"
    >
      <div className="w-10 h-10 rounded-full bg-green-50 text-green-700 flex items-center justify-center mb-3">
        {icon}
      </div>
      <h4 className="font-bold text-lg mb-1 text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600 text-center leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
