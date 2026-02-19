'use client'

import { useState } from 'react';
import styles from './PendingDonations.module.css';
import { ConfirmReceiptModal, RejectDonationModal } from '../components/modal/DonationModals';

export default function PendingDonations() {
  const [donations, setDonations] = useState([
    { id: 1, item: "Cesta Básica", user: "Afonso", date: "18/02/2026", pts: 50 },
    { id: 2, item: "Agasalho M", user: "Maria", date: "19/02/2026", pts: 20 },
  ]);

  const [selectedDonation, setSelectedDonation] = useState<any>(null);
  const [modalType, setModalType] = useState<'confirm' | 'reject' | null>(null);

  const handleOpenModal = (donation: any, type: 'confirm' | 'reject') => {
    setSelectedDonation(donation);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setSelectedDonation(null);
    setModalType(null);
  };

  const handleFinalize = (id: number) => {
    setDonations(donations.filter(don => don.id !== id));
    handleCloseModal();
  };

  const handleReject = (id: number, reason?: string) => {
    console.log(`Doação ${id} recusada pelo motivo: ${reason}`);
    setDonations(donations.filter(don => don.id !== id));
    handleCloseModal();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gerenciamento de Doações</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Pontos</th>
            <th>Doador</th>
            <th>Data</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((don) => (
            <tr key={don.id}>
              <td>{don.item}</td>
              <td className={styles.points}>+{don.pts}</td>
              <td>{don.user}</td>
              <td>{don.date}</td>
              <td><span className={styles.badge}>Aguardando Entrega</span></td>
              <td>
                <div className={styles.actionGroup}>
                  <button 
                    className={styles.receiveBtn}
                    onClick={() => handleOpenModal(don, 'confirm')}
                  >
                    Confirmar Recebimento
                  </button>
                  <button 
                    className={styles.rejectBtn}
                    onClick={() => handleOpenModal(don, 'reject')}
                  >
                    Recusar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalType === 'confirm' && selectedDonation && (
        <ConfirmReceiptModal 
          donation={selectedDonation} 
          onClose={handleCloseModal} 
          onAction={handleFinalize}
        />
      )}

      {modalType === 'reject' && selectedDonation && (
        <RejectDonationModal 
          donation={selectedDonation} 
          onClose={handleCloseModal} 
          onAction={handleReject}
        />
      )}
    </div>
  );
}