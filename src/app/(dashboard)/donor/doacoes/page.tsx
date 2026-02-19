import styles from "./doacoes.module.css";
import { Package, Calendar, CheckCircle2, Clock, Truck, Star } from "lucide-react";

const MINHAS_DOACOES = [
  {
    id: 1,
    ong: "Abrigo Esperança",
    itens: "2 pacotes de fraldas, 5L de leite",
    data: "14 Fev 2026",
    status: "concluido",
    xp: 150
  },
  {
    id: 2,
    ong: "Instituição Mãos Amigas",
    itens: "Cesta Básica Completa",
    data: "10 Fev 2026",
    status: "emCaminho",
    xp: 100
  },
  {
    id: 3,
    ong: "Casa da Criança",
    itens: "3 Brinquedos educativos",
    data: "05 Fev 2026",
    status: "pendente",
    xp: 50
  }
];

export default function MyDonationsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Minhas Doações</h1>
        <p style={{ color: '#64748b' }}>Acompanhe o trajeto da sua solidariedade.</p>
      </header>

      <div className={styles.list}>
        {MINHAS_DOACOES.map((doacao) => (
          <div key={doacao.id} className={styles.donationCard}>
            <div className={styles.mainInfo}>
              <div className={styles.iconWrapper}>
                <Package size={28} />
              </div>
              <div className={styles.details}>
                <h3>{doacao.ong}</h3>
                <p>{doacao.itens}</p>
                <p style={{ marginTop: '4px', fontSize: '0.8rem' }}>
                  <Calendar size={14} /> {doacao.data}
                </p>
              </div>
            </div>

            <div className={styles.statusWrapper}>
              {doacao.status === "concluido" && (
                <>
                  <span className={`${styles.badge} ${styles.concluido}`}>
                    <CheckCircle2 size={12} style={{ marginRight: '4px' }} /> Concluída
                  </span>
                  <span className={styles.xpGained}>
                    <Star size={14} fill="#28a745" /> +{doacao.xp} XP
                  </span>
                </>
              )}
              
              {doacao.status === "emCaminho" && (
                <span className={`${styles.badge} ${styles.emCaminho}`}>
                  <Truck size={12} style={{ marginRight: '4px' }} /> Em Caminho
                </span>
              )}

              {doacao.status === "pendente" && (
                <span className={`${styles.badge} ${styles.pendente}`}>
                  <Clock size={12} style={{ marginRight: '4px' }} /> Aguardando Coleta
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}