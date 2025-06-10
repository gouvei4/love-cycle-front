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

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-white">
      <main className="flex-grow">
        <section aria-labelledby="about-title" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Texto principal */}
            <div>
              <h2
                id="about-title"
                className="text-4xl font-extrabold text-gray-900 mb-8"
              >
                Sobre a <span className="text-green-600">LoveCycle</span>
              </h2>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-prose">
                A <strong>LoveCycle</strong> nasceu para tornar as doações mais
                simples, seguras e alegres! Aqui, conectamos corações dispostos a
                ajudar com ONGs sérias e confiáveis, usando tecnologia, gamificação
                e muita transparência para fortalecer o ciclo do bem.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: <Sprout className="text-green-600" size={24} aria-hidden="true" />,
                    title: "Nossa missão",
                    description:
                      "Cultivar um ciclo contínuo de solidariedade, espalhando impacto positivo e transformador onde mais precisamos.",
                  },
                  {
                    icon: <Handshake className="text-green-600" size={24} aria-hidden="true" />,
                    title: "Nossos valores",
                    description:
                      "Empatia, ética, inclusão, responsabilidade social e inovação. É isso que pulsa em cada uma das nossas ações.",
                  },
                  {
                    icon: <Rocket className="text-green-600" size={24} aria-hidden="true" />,
                    title: "Nossa visão",
                    description:
                      "Ser a ponte digital mais confiável entre doadores e beneficiários, levando amor e transformação pelo Brasil e além.",
                  },
                  {
                    icon: <CreditCard className="text-green-600" size={24} aria-hidden="true" />,
                    title: "Doe por PIX",
                    description:
                      "Escolha a ONG que você quer apoiar e doe diretamente via PIX de forma prática, segura e transparente.",
                  },
                ].map(({ icon, title, description }) => (
                  <article
                    key={title}
                    className="border-l-4 border-green-600 pl-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-green-500 transition-all duration-300 cursor-default"
                  >
                    <h3 className="text-xl font-semibold flex items-center gap-3 mb-2">
                      {icon}
                      {title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Imagem ilustrativa */}
            <div
              className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500"
              role="img"
              aria-label="Ilustração representando doações e solidariedade"
            >
              <Image
                src="/img/sobre.png"
                alt="Ilustração sobre doações e solidariedade"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer fixado ao fim da página */}
      <footer className="bg-green-800 text-green-200 py-8 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
          <p>© {new Date().getFullYear()} LoveCycle. Todos os direitos reservados.</p>
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
