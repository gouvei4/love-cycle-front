"use client";
import React, { useState } from 'react';
import styles from '../modal.module.css';

interface CampanhaInput {
  titulo: string;
  descricao: string;
  prioridade: 'normal' | 'urgente' | 'estoque' | 'meta';
  meta: number;
  atual: number;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdicionar: (campanha: CampanhaInput) => void;
}

export default function ModalNovaNecessidade({ isOpen, onClose, onAdicionar }: ModalProps) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState<CampanhaInput['prioridade']>('normal');
  const [meta, setMeta] = useState<number>(0);
  const [atual, setAtual] = useState<number>(0);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onAdicionar({ 
      titulo, 
      descricao, 
      prioridade, 
      meta, 
      atual 
    });
    
    setTitulo(''); 
    setDescricao('');
    setPrioridade('normal');
    setMeta(0);
    setAtual(0);
    onClose(); 
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={`${styles.topBar} ${styles[prioridade]}`} />
        <header className={styles.header}>
          <h2>Nova Necessidade</h2>
          <button className={styles.closeBtn} type="button" onClick={onClose}>✕</button>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Título da Campanha</label>
            <input 
              type="text" 
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Ex: Doação de Agasalhos" 
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>O que a instituição precisa?</label>
            <textarea 
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descreva os itens detalhadamente..." 
              required
            />
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Já arrecadamos</label>
              <input 
                type="number" 
                value={atual}
                onChange={(e) => setAtual(Number(e.target.value))}
                placeholder="0"
                min="0"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Meta total</label>
              <input 
                type="number" 
                value={meta}
                onChange={(e) => setMeta(Number(e.target.value))}
                placeholder="Ex: 500"
                min="1"
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Nível de Prioridade</label>
            <select 
              value={prioridade} 
              onChange={(e) => setPrioridade(e.target.value as CampanhaInput['prioridade'])}
              className={styles.selectField}
            >
              <option value="normal">Normal (Campanha Regular)</option>
              <option value="estoque">Estoque Baixo</option>
              <option value="urgente">⚠️ Urgente (Crítico)</option>
              <option value="meta">Meta de Impacto</option>
            </select>
          </div>

          <div className={styles.footer}>
            <button type="submit" className={styles.publishBtn}>
              Publicar Agora
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}