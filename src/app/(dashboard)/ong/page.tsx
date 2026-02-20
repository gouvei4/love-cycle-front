"use client"

import React, { useState } from 'react';
import styles from './painel.module.css';
import ModalNovaNecessidade from './components/modal/ModalNovaNecessidade';
import ModalEditarCampanha from './components/modal/ModalEditarCampanha';
import { ICampanha } from './campanhas/page';

interface NovaCampanhaInput {
  titulo: string;
  descricao: string;
  prioridade: 'normal' | 'urgente' | 'estoque' | 'meta';
  meta: number;
  atual: number;
}

export default function PainelGeralONG() {
  const [modalAberto, setModalAberto] = useState(false);
  const [campanhaSelecionada, setCampanhaSelecionada] = useState<ICampanha | null>(null);
  const [modalEditarAberto, setModalEditarAberto] = useState(false);

  const [campanhas, setCampanhas] = useState<ICampanha[]>([
    { 
    id: "1",
    titulo: "Itens de Higiene", 
    descricao: "Sabonete e Pasta de dente.", 
    prioridade: "urgente",
    status: "Ativa",
    meta: 100,
    atual: 20,
    progresso: 20
  },
    { 
    id: "1",
    titulo: "Itens de Higiene", 
    descricao: "Sabonete e Pasta de dente.", 
    prioridade: "urgente",
    status: "Ativa",
    meta: 100,
    atual: 20,
    progresso: 20
  }
  ]);

  const salvarEdicao = (campanhaEditada: ICampanha) => {
    setCampanhas(campanhas.map(c => c.id === campanhaEditada.id ? campanhaEditada : c));
  };

  const excluirCampanha = (id: string | number) => {
    setCampanhas(campanhas.filter(c => c.id !== id));
    setModalEditarAberto(false);
  };

  const adicionarCampanhaVisual = (novaCampanha: NovaCampanhaInput) => {
    const novoItem: ICampanha = {
      id: Math.random().toString(36).substring(2, 9),
      status: "Ativa",
      ...novaCampanha
    };
    setCampanhas([novoItem, ...campanhas]);
    setModalAberto(false);
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

      <main className={styles.mainContent}>
        <div className={styles.sectionHeader}>
          <div className={styles.titleGroup}>
            <span className={styles.urgentIcon}>⚠️</span>
            <h2 className={styles.sectionTitle}>Suas Campanhas Ativas</h2>
          </div>
          <button className={styles.btnPrimary} onClick={() => setModalAberto(true)}>
            + Nova Campanha
          </button>
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

      {campanhaSelecionada && (
        <ModalEditarCampanha
          isOpen={modalEditarAberto}
          onClose={() => setModalEditarAberto(false)}
          campanha={campanhaSelecionada}
          onSalvar={salvarEdicao}
          onExcluir={excluirCampanha}
        />
      )}
    </div>
  );
}