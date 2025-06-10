// components/Gamificacao.tsx
"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Users, ArrowUp, Twitter, Instagram, Facebook } from "lucide-react"

export default function Gamificacao() {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Gamificação e Ranking Solidário
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Doe, acumule pontos, conquiste medalhas e suba no ranking dos heróis do bem! Transforme boas ações em conquistas visíveis e inspire outros a fazer o mesmo.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Feature icon={<Star />} title="Pontuação por doação" desc="Ganhe pontos a cada doação realizada." />
            <Feature icon={<Trophy />} title="Medalhas e conquistas" desc="Desbloqueie badges especiais ao alcançar metas." />
            <Feature icon={<ArrowUp />} title="Suba de nível" desc="Quanto mais você doa, mais alto você chega!" />
            <Feature icon={<Users />} title="Ranking de doadores" desc="Veja quem mais contribuiu e entre no topo!" />
          </div>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-xl max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-semibold mb-4">Top 3 Heróis do Mês</h3>
            <ul className="text-left space-y-3">
              <li className="flex justify-between">
                <span>🥇 Ana S. — 28 doações</span>
                <span className="text-green-600 font-semibold">+280 pts</span>
              </li>
              <li className="flex justify-between">
                <span>🥈 Lucas M. — 23 doações</span>
                <span className="text-green-600 font-semibold">+230 pts</span>
              </li>
              <li className="flex justify-between">
                <span>🥉 Carla D. — 19 doações</span>
                <span className="text-green-600 font-semibold">+190 pts</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10"
          >
            <a 
              href="/functtion" 
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition"
            >
              Comece agora e suba no ranking!
            </a>
          </motion.div>
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

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
    >
      <div className="text-green-600 mb-3">{icon}</div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="text-sm text-gray-600 text-center">{desc}</p>
    </motion.div>
  )
}
