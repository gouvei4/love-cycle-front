import Image from "next/image";
import { Sprout, Handshake, Rocket, CreditCard } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Sobre a LoveCycle</h2>
          <p className="text-lg text-gray-700 mb-6">
            A <strong>LoveCycle</strong> nasceu com o propósito de transformar doações em ações conscientes, seguras e acessíveis.
            Conectamos pessoas dispostas a ajudar com ONGs reais, utilizando tecnologia, transparência e um toque de gamificação
            para engajar quem faz o bem.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-green-600 pl-6 bg-white rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 cursor-default">
              <h3 className="text-xl font-semibold flex items-center gap-3">
                <Sprout className="text-green-600" size={24} />
                Nossa missão
              </h3>
              <p className="text-gray-600">
                Incentivamos o ciclo contínuo da solidariedade, promovendo impacto real e duradouro nas comunidades que atendemos.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6 bg-white rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 cursor-default">
              <h3 className="text-xl font-semibold flex items-center gap-3">
                <Handshake className="text-green-600" size={24} />
                Nossos valores
              </h3>
              <p className="text-gray-600">
                Ética, empatia, inclusão, responsabilidade social e inovação guiam todas as nossas ações e decisões diárias.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6 bg-white rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 cursor-default">
              <h3 className="text-xl font-semibold flex items-center gap-3">
                <Rocket className="text-green-600" size={24} />
                Nossa visão
              </h3>
              <p className="text-gray-600">
                Ser a principal ponte digital entre doadores e quem precisa, ampliando o impacto social no Brasil e além.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6 bg-white rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 cursor-default">
              <h3 className="text-xl font-semibold flex items-center gap-3">
                <CreditCard className="text-green-600" size={24} />
                Doe por PIX
              </h3>
              <p className="text-gray-600 mt-2">
                Para doar por PIX, escolha a ONG de sua preferência e entre em contato diretamente para receber a chave e fazer sua contribuição segura.
              </p>
            </div>
          </div>
        </div>

        {/* Imagem ilustrativa */}
        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/img/sobre.png"
            alt="Ilustração sobre doações e solidariedade"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
