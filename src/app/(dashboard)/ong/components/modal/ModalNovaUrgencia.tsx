"use client";
import React, { useState } from 'react';
import { AlertCircle, Zap } from 'lucide-react';
import styles from '../modalUrgencia.module.css';

interface ModalUrgenciaProps {
  isOpen: boolean;
  onClose: () => void;
  onPublicar: (urgencia: any) => void;
}

export default function ModalNovaUrgencia({ isOpen, onClose, onPublicar }: ModalUrgenciaProps) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPublicar({
      titulo,
      descricao,
      nivel: 'critico',
      criadoEm: new Date().toISOString()
    });
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.topBarDanger} />
        
        <header className={styles.header}>
          <div className={styles.titleIcon}>
            <AlertCircle color="#e74c3c" size={24} />
            <h2>Nova Urgência Crítica</h2>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.alertBox}>
            <Zap size={16} />
            <span>Esta publicação aparecerá com destaque máximo para os doadores.</span>
          </div>

          <div className={styles.inputGroup}>
            <label>O que é urgente?</label>
            <input 
              type="text" 
              placeholder="Ex: Falta de Leite ou Cobertores"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required 
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Detalhes da emergência</label>
            <textarea 
              placeholder="Explique brevemente a situação para sensibilizar os doadores..."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </div>

          <div className={styles.footer}>
            <button type="button" className={styles.btnCancel} onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className={styles.btnSubmit}>
              🚨 Publicar Alerta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}