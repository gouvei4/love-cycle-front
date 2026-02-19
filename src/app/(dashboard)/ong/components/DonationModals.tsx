import React from 'react';
import styles from './Modals.module.css';

interface Donation {
  id: number;
  item: string;
  user: string;
  pts: number;
}

interface ModalProps {
  donation: Donation;
  onClose: () => void;
  onAction: (id: number, reason?: string) => void;
}

export const ConfirmReceiptModal = ({ donation, onClose, onAction }: ModalProps) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.title}>Confirmar Recebimento?</h3>
        <p className={styles.message}>
          Você confirma que o item <strong>{donation.item}</strong> foi entregue corretamente? 
          Isso creditará <strong>{donation.pts} pontos</strong> para {donation.user}.
        </p>
        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancelar</button>
          <button className={styles.confirmBtn} onClick={() => onAction(donation.id)}>
            Confirmar e Pontuar
          </button>
        </div>
      </div>
    </div>
  );
};

export const RejectDonationModal = ({ donation, onClose, onAction }: ModalProps) => {
  const [reason, setReason] = React.useState('');

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.title} style={{ color: '#d32f2f' }}>Recusar Doação</h3>
        <p className={styles.message}>
          Informe ao doador <strong>{donation.user}</strong> o motivo da recusa do item <strong>{donation.item}</strong>.
        </p>
        <textarea 
          className={styles.textarea} 
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Ex: O item apresenta danos não informados anteriormente..."
        />
        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={onClose}>Voltar</button>
          <button 
            className={styles.dangerBtn} 
            onClick={() => onAction(donation.id, reason)}
            disabled={!reason.trim()}
          >
            Confirmar Recusa
          </button>
        </div>
      </div>
    </div>
  );
};