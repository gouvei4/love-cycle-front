"use client"

import React, { useState } from 'react';
import styles from './painel.module.css';
import ModalNovaNecessidade from './components/modal/ModalNovaNecessidade';
import ModalEditarCampanha from './components/modal/ModalEditarCampanha';

export default function PainelGeralONG() {
  const [modalAberto, setModalAberto] = useState(false);
  const [campanhaSelecionada, setCampanhaSelecionada] = useState<any>(null);
  const [modalEditarAberto, setModalEditarAberto] = useState(false);

  const salvarEdicao = (campanhaEditada: any) => {
    setCampanhas(campanhas.map(c => c.id === campanhaEditada.id ? campanhaEditada : c));
  };

  const excluirCampanha = (id: number) => {
    setCampanhas(campanhas.filter(c => c.id !== id));
  };

  const [campanhas, setCampanhas] = useState([
    { id: 1, titulo: "Itens de Higiene", descricao: "Sabonete e Pasta de dente.", prioridade: "urgente" },
    { id: 2, titulo: "Alimentos Secos", descricao: "Arroz, Feijão e Óleo.", prioridade: "normal" }
  ]);

  const adicionarCampanhaVisual = (novaCampanha: { titulo: string; descricao: string; prioridade: string }) => {
    const novoItem = {
      id: Math.random(),
      ...novaCampanha
    };
    setCampanhas([novoItem, ...campanhas]);
  };

  const renderBadge = (prioridade: string) => {
    switch (prioridade) {
      case 'urgente':
        return <span className={styles.urgentBadge}>URGENTE</span>;
      case 'estoque':
        return <span className={`${styles.urgentBadge} ${styles.badgeEstoque}`}>ESTOQUE BAIXO</span>;
      case 'meta':
        return <span className={`${styles.urgentBadge} ${styles.badgeMeta}`}>META</span>;
      default:
        return <span className={styles.badgeNormal}>NORMAL</span>;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.welcome}>Olá, Instituição!</h1>
        <p className={styles.subtitle}>Gerencie suas campanhas e acompanhe seu impacto social.</p>
      </header>

      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Doações Recebidas</span>
          <h2 className={styles.statValue}>42</h2>
          <div className={styles.statTrend}>+12% este mês</div>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statLabel}>Doadores Únicos</span>
          <h2 className={styles.statValue}>18</h2>
          <div className={styles.statTrend}>Novos parceiros</div>
        </div>

        <div className={styles.statCardGreen}>
          <span className={styles.statLabelWhite}>Itens Urgentes</span>
          <h2 className={styles.statValueWhite}>05</h2>
          <div className={styles.statTrendWhite}>Ações prioritárias</div>
        </div>
      </section>

      <main className={styles.mainContent}>
        <div className={styles.sectionHeader}>
          <div className={styles.titleGroup}>
            <span className={styles.urgentIcon}>⚠️</span>
            <h2 className={styles.sectionTitle}>Suas Campanhas Ativas</h2>
          </div>
        </div>

        <div className={styles.campaignGrid}>
          {campanhas.map((campanha) => (
            <div key={campanha.id} className={styles.customCard}>
              <div className={`${styles.topBar} ${styles[campanha.prioridade]}`} />

              <div className={styles.cardBody}>
                <div className={styles.cardHeaderInline}>
                  <h3 className={styles.cardTitle}>{campanha.titulo}</h3>
                  {renderBadge(campanha.prioridade)}
                </div>
                <p className={styles.cardText}>
                  Foco atual: <strong>{campanha.descricao}</strong>
                </p>
                <div className={styles.cardFooter}>
                  <button
                    className={styles.btnOutline}
                    onClick={() => {
                      setCampanhaSelecionada(campanha);
                      setModalEditarAberto(true);
                    }}
                  >
                    Editar Detalhes
                  </button>
                  <ModalEditarCampanha
                    isOpen={modalEditarAberto}
                    onClose={() => setModalEditarAberto(false)}
                    campanha={campanhaSelecionada}
                    onSalvar={salvarEdicao}
                    onExcluir={excluirCampanha}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <ModalNovaNecessidade
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        onAdicionar={adicionarCampanhaVisual}
      />
    </div>
  );
}