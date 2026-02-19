"use client";
import React, { useState, useEffect } from 'react';
import styles from './modal.module.css';

interface Campanha {
  id: number;
  titulo: string;
  descricao: string;
  prioridade: string;
  meta: number;   
  atual: number;   
}

interface ModalEditarProps {
  isOpen: boolean;
  onClose: () => void;
  campanha: Campanha | null;
  onSalvar: (campanha: Campanha) => void;
  onExcluir: (id: number) => void;
}

export default function ModalEditarCampanha({ isOpen, onClose, campanha, onSalvar, onExcluir }: ModalEditarProps) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('');
  const [meta, setMeta] = useState<number>(0);
  const [atual, setAtual] = useState<number>(0);

  useEffect(() => {
    if (campanha) {
      setTitulo(campanha.titulo);
      setDescricao(campanha.descricao);
      setPrioridade(campanha.prioridade);
      setMeta(campanha.meta || 0);
      setAtual(campanha.atual || 0);
    }
  }, [campanha]);

  if (!isOpen || !campanha) return null;

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    onSalvar({ 
      ...campanha, 
      titulo, 
      descricao, 
      prioridade, 
      meta: Number(meta), 
      atual: Number(atual) 
    });
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={`${styles.topBar} ${styles[prioridade]}`} />
        
        <header className={styles.header}>
          <h2>Editar Detalhes</h2>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </header>

        <form className={styles.form} onSubmit={handleSalvar}>
          <div className={styles.inputGroup}>
            <label>Título da Campanha</label>
            <input 
              type="text" 
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Descrição</label>
            <textarea 
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Quantidade Atual</label>
              <input 
                type="number" 
                value={atual}
                onChange={(e) => setAtual(Number(e.target.value))}
                min="0"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Meta (Total)</label>
              <input 
                type="number" 
                value={meta}
                onChange={(e) => setMeta(Number(e.target.value))}
                min="1"
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Nível de Prioridade</label>
            <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)} className={styles.selectField}>
              <option value="normal">Normal</option>
              <option value="estoque">Estoque Baixo</option>
              <option value="urgente">⚠️ Urgente</option>
              <option value="meta">Meta de Impacto</option>
            </select>
          </div>

          <div className={styles.footer}>
            <button 
              type="button" 
              className={styles.btnDelete} 
              onClick={() => { onExcluir(campanha.id); onClose(); }}
            >
              Excluir Campanha
            </button>
            
            <button type="submit" className={styles.publishBtn}>
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}