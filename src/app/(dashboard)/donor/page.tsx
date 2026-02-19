"use client";

import { useState } from "react";
import styles from "./donor.module.css";
import { Search, MapPin, AlertCircle } from "lucide-react";
import DonateModal from "./components/DonateModal";
import UrgentDetailsModal from "./components/UrgenteModal";

export default function DonorDashboard() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isUrgentOpen, setIsUrgentOpen] = useState(false);
  const [selectedOng, setSelectedOng] = useState("");
  const [selectedUrgentItems, setSelectedUrgentItems] = useState("");

  const handleOpenDonate = (ongName: string) => {
    setSelectedOng(ongName);
    setIsUrgentOpen(false);
    setIsDonateOpen(true);
  };

  const handleOpenUrgent = (ongName: string, items: string) => {
    setSelectedOng(ongName);
    setSelectedUrgentItems(items);
    setIsUrgentOpen(true);
  };

  return (
    <div className={styles.donorContent}>
      <header className={styles.header}>
        <div>
          <h1 style={{ color: '#1b4332', fontSize: '2.2rem', fontWeight: 'bold' }}>Olá, Afonso!</h1>
          <p style={{ color: '#6c757d', fontSize: '1.1rem' }}>Pronto para transformar vidas hoje?</p>
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.searchBar}>
            <Search size={24} style={{ color: '#28a745' }} />
            <input type="text" placeholder="Pesquisar por ONG, cidade ou item..." />
          </div>
        </div>
      </header>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#334155', fontSize: '1.4rem', fontWeight: '600', marginBottom: '1.5rem' }}>
          <MapPin size={24} style={{ color: '#16a34a' }} /> ONGs próximas
        </h2>
        <div className={styles.ongGrid}>
          {[1, 2].map((i) => (
            <div key={i} className={styles.ongCard}>
              <h3 style={{ fontSize: '1.2rem', color: '#1b4332', fontWeight: 'bold' }}>Mãos Amigas</h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', margin: '1rem 0' }}>Aceita: Alimentos e Roupas.</p>
              <button className={styles.btnDonatePrimary} onClick={() => handleOpenDonate("Mãos Amigas")}>
                Doar Agora
              </button>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '4rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#334155', fontSize: '1.4rem', fontWeight: '600', marginBottom: '1.5rem' }}>
          <AlertCircle size={24} style={{ color: '#f59e0b' }} /> Precisam de itens urgente
        </h2>
        <div className={styles.ongGrid}>
          {[1, 2].map((i) => (
            <div key={i} className={styles.ongCard} style={{ borderTop: '4px solid #f59e0b' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#1b4332', fontWeight: 'bold' }}>Abrigo Esperança</h3>
                <span style={{ fontSize: '0.75rem', backgroundColor: '#fef3c7', color: '#b45309', padding: '4px 10px', borderRadius: '8px', fontWeight: 'bold' }}>URGENTE</span>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#475569', marginTop: '1rem' }}>
                Necessita de: <strong>Leite em pó e Fraldas</strong>.
              </p>
              <button 
                className={styles.btnDonateSecondary} 
                onClick={() => handleOpenUrgent("Abrigo Esperança", "Leite em pó e Fraldas")}
              >
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>
      </section>

      {isUrgentOpen && (
        <UrgentDetailsModal 
          ongName={selectedOng}
          urgentItems={selectedUrgentItems}
          onClose={() => setIsUrgentOpen(false)}
          onDonateClick={() => handleOpenDonate(selectedOng)} 
        />
      )}

      {isDonateOpen && (
        <DonateModal 
          ongName={selectedOng} 
          onClose={() => setIsDonateOpen(false)} 
        />
      )}
    </div>
  );
}