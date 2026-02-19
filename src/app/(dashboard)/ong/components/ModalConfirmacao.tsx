"use client";
import React from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';
import styles from './confirmacao.module.css';

interface ModalConfirmacaoProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmar: () => void;
  titulo: string;
  mensagem: string;
}

export default function ModalConfirmacao({ isOpen, onClose, onConfirmar, titulo, mensagem }: ModalConfirmacaoProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.iconWrapper}>
          <div className={styles.iconCircle}>
            <Trash2 size={32} color="#e74c3c" />
          </div>
        </div>
        
        <div className={styles.content}>
          <h3>{titulo}</h3>
          <p>{mensagem}</p>
        </div>

        <div className={styles.actions}>
          <button className={styles.btnCancelar} onClick={onClose}>
            Cancelar
          </button>
          <button className={styles.btnConfirmar} onClick={onConfirmar}>
            Sim, excluir
          </button>
        </div>
        
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={20} />
        </button>
      </div>
    </div>
  );
}