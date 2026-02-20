'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2, Megaphone } from 'lucide-react';
import styles from './campanhas.module.css';
import ModalNovaNecessidade from '../components/modal/ModalNovaNecessidade';
import ModalEditarCampanha from '../components/modal/ModalEditarCampanha';
import ModalConfirmacao from '../components/modal/ModalConfirmacao';

export interface ICampanha {
  id: string;
  titulo: string;
  descricao: string;
  prioridade: 'normal' | 'urgente' | 'estoque' | 'meta';
  status: string;
  meta: number;
  atual: number;
  progresso?: number;
}

export interface CampanhaInput {
  titulo: string;
  descricao: string;
  prioridade: 'normal' | 'urgente' | 'estoque' | 'meta';
  meta: number;
  atual: number;
}

export default function CampanhasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  const [campanhaSelecionada, setCampanhaSelecionada] = useState<ICampanha | null>(null);
  const [idParaExcluir, setIdParaExcluir] = useState<string | null>(null);

  const [campanhas, setCampanhas] = useState<ICampanha[]>([
    {
      id: '1',
      titulo: 'Campanha de Agasalho 2026',
      descricao: 'Arrecadação de cobertores e blusas.',
      prioridade: 'urgente',
      status: 'Ativa',
      meta: 100,
      atual: 65,
      progresso: 65,
    }
  ]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpenEdit = (campanha: ICampanha) => {
    setCampanhaSelecionada(campanha);
    setIsEditModalOpen(true);
  };

  const handleOpenDelete = (id: string) => {
    setIdParaExcluir(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (idParaExcluir) {
      setCampanhas((prev) => prev.filter((c) => c.id !== idParaExcluir));
      setIsDeleteModalOpen(false);
      setIdParaExcluir(null);
    }
  };

  const handleAddCampaign = (dados: CampanhaInput) => {
    const meta = Number(dados.meta) || 1;
    const atual = Number(dados.atual) || 0;

    const nova: ICampanha = {
      id: Math.random().toString(36).substring(2, 9),
      titulo: dados.titulo || 'Nova Campanha',
      descricao: dados.descricao || '',
      prioridade: dados.prioridade || 'normal',
      status: 'Ativa',
      meta: meta,
      atual: atual,
      progresso: Math.min(Math.round((atual / meta) * 100), 100),
    };

    setCampanhas((prev) => [...prev, nova]);
    handleCloseModal();
  };

  const handleSaveEdit = (campanha: ICampanha) => {
  const meta = Number(campanha.meta) || 1;
  const atual = Number(campanha.atual) || 0;
  const novoProgresso = Math.min(Math.round((atual / meta) * 100), 100);

  setCampanhas((prev) =>
    prev.map((c) =>
      c.id === campanha.id
        ? { ...campanha, progresso: novoProgresso }
        : c
    )
  );
  setIsEditModalOpen(false);
};

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Campanhas</h1>
          <p>Gerencie suas arrecadações recorrentes e sazonais.</p>
        </div>
        <button className={styles.btnPrimary} onClick={handleOpenModal}>
          <Plus size={20} /> Nova Campanha
        </button>
      </header>

      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span>Campanhas Ativas</span>
          <strong>{campanhas.length}</strong>
        </div>
      </section>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Campanha</th>
              <th>Status</th>
              <th>Progresso</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {campanhas.map((item) => (
              <tr key={item.id}>
                <td className={styles.campaignInfo}>
                  <Megaphone size={18} />
                  <span>{item.titulo}</span>
                </td>
                <td><span className={styles.badgeActive}>{item.status}</span></td>
                <td>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${item.progresso}%` }}></div>
                  </div>
                  <small>{item.progresso}% da meta</small>
                </td>
                <td className={styles.actions}>
                  <button onClick={() => handleOpenEdit(item)} title="Editar">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => handleOpenDelete(item.id)} title="Excluir">
                    <Trash2 size={18} color="#e74c3c" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalNovaNecessidade
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAdicionar={handleAddCampaign}
      />

      {isEditModalOpen && campanhaSelecionada && (
        <ModalEditarCampanha
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          campanha={campanhaSelecionada}
          onSalvar={handleSaveEdit}
          onExcluir={(id) => handleOpenDelete(id.toString())}
        />
      )}

      <ModalConfirmacao 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirmar={confirmDelete}
        titulo="Excluir Campanha?"
        mensagem="Esta ação não poderá ser desfeita e os dados de progresso serão perdidos."
      />
      
    </div>
  );
}