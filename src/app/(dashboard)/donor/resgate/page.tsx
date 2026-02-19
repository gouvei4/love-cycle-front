"use client";

import { useState } from "react";
import styles from "./resgate.module.css";
import { Ticket, Star, ChevronLeft, ChevronRight } from "lucide-react";
import RedeemModal from "../components/RedeemModal";

interface Parceiro {
  id: number;
  nome: string;
  beneficio: string;
  custo: number;
  categoria: string;
  image: string;
}

const PARCEIROS: Parceiro[] = [
  { id: 1, nome: "Farmácia Preço Baixo", beneficio: "R$ 20,00 de desconto", custo: 500, categoria: "Saúde", image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=400&h=250&auto=format&fit=crop" },
  { id: 2, nome: "Supermercado Atacadão", beneficio: "Vale-compras de R$ 50", custo: 1200, categoria: "Alimentação", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&h=250&auto=format&fit=crop" },
  { id: 3, nome: "Drogaria São Paulo", beneficio: "15% OFF em Vitaminas", custo: 300, categoria: "Saúde", image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=400&h=250&auto=format&fit=crop" },
  { id: 4, nome: "Mercado do Bairro", beneficio: "R$ 10,00 em Hortifruti", custo: 250, categoria: "Alimentação", image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=400&h=250&auto=format&fit=crop" },
  { id: 5, nome: "Pague Menos", beneficio: "Brinde: Protetor Solar", custo: 800, categoria: "Saúde", image: "https://images.unsplash.com/photo-1550572017-ed20015ade0a?q=80&w=400&h=250&auto=format&fit=crop" },
  { id: 6, nome: "Carrefour", beneficio: "R$ 40,00 de desconto", custo: 1000, categoria: "Alimentação", image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=400&h=250&auto=format&fit=crop" },
  { id: 7, nome: "Farmácia Popular", beneficio: "R$ 15,00 de desconto", custo: 400, categoria: "Saúde", image: "https://images.unsplash.com/photo-1631549916768-4119b295f78b?q=80&w=400&h=250&auto=format&fit=crop" },
  { id: 8, nome: "Hortifruti Natural", beneficio: "Suco Natural Grátis", custo: 150, categoria: "Alimentação", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=400&h=250&auto=format&fit=crop" },
  { id: 9, nome: "Drogaria Onofre", beneficio: "Entrega Grátis", custo: 100, categoria: "Saúde", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=400&h=250&auto=format&fit=crop" },
  { id: 10, nome: "Assaí Atacadista", beneficio: "R$ 30,00 de desconto", custo: 700, categoria: "Alimentação", image: "https://images.unsplash.com/photo-1506484334406-382becd2817e?q=80&w=400&h=250&auto=format&fit=crop" },
];

export default function ResgatePage() {
  const meusPontos = 1250;

  const [selectedParceiro, setSelectedParceiro] = useState<Parceiro | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (parceiro: Parceiro) => {
    setSelectedParceiro(parceiro);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <header className={styles.headerBalance}>
        <div className={styles.balanceInfo}>
          <h2>Seus Pontos Disponíveis</h2>
          <div className={styles.balanceValue}>
            <Star size={40} fill="#28a745" stroke="#28a745" /> {meusPontos}
          </div>
        </div>
        <Ticket size={80} className={styles.ticketIcon} />
      </header>

      <h2 className={styles.sectionTitle}>Vitrine de Recompensas</h2>

      <div className={styles.grid}>
        {PARCEIROS.map((parceiro) => (
          <div key={parceiro.id} className={styles.cardParceiro}>
            <div className={styles.imageContainer}>
              <img src={parceiro.image} alt={parceiro.nome} className={styles.productImage} />
              <span className={styles.categoryBadge}>{parceiro.categoria}</span>
            </div>
            
            <div className={styles.cardContent}>
              <h3>{parceiro.nome}</h3>
              <p className={styles.benefitText}>{parceiro.beneficio}</p>
              
              <div className={styles.cost}>
                <Star size={16} fill="#28a745" stroke="#28a745" />
                {parceiro.custo} pontos
              </div>

              <button 
                className={styles.btnResgatar}
                disabled={meusPontos < parceiro.custo}
                onClick={() => handleOpenModal(parceiro)}
              >
                {meusPontos >= parceiro.custo ? "Resgatar" : "Insuficiente"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedParceiro && (
        <RedeemModal 
          reward={{
            id: selectedParceiro.id,
            name: selectedParceiro.nome,
            partner: selectedParceiro.nome,
            points: selectedParceiro.custo,
            description: selectedParceiro.beneficio
          }} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}

      <footer className={styles.pagination}>
        <button className={styles.pageBtn} disabled>
          <ChevronLeft size={20} />
        </button>
        <div className={styles.pageNumbers}>
          <button className={`${styles.pageNumber} ${styles.active}`}>1</button>
          <button className={styles.pageNumber}>2</button>
          <button className={styles.pageNumber}>3</button>
          <span className={styles.dots}>...</span>
          <button className={styles.pageNumber}>10</button>
        </div>
        <button className={styles.pageBtn}>
          <ChevronRight size={20} />
        </button>
      </footer>
    </div>
  );
}