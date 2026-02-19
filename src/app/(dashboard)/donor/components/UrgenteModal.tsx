import styles from "./urgentDetailsModal.module.css";
import { X, MapPin, Clock, Phone, Share2, AlertTriangle, ArrowRight } from "lucide-react";

interface UrgentModalProps {
  ongName: string;
  urgentItems: string;
  onClose: () => void;
  onDonateClick: () => void; 
}

export default function UrgentDetailsModal({ ongName, urgentItems, onClose, onDonateClick }: UrgentModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar modal">
          <X size={20} />
        </button>

        <header className={styles.urgentHeader}>
          <div className={styles.urgentBadge}>
            <AlertTriangle size={16} />
            <span>URGENTE</span>
          </div>
          <h2>{ongName}</h2>
          <p>Esta instituição precisa da sua ajuda agora.</p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <label className={styles.label}>Itens Necessários</label>
            <div className={styles.itemsBox}>
              <p className={styles.itemsHighlight}>{urgentItems}</p>
              <span className={styles.subText}>
                * Preferência por embalagens fechadas e dentro do prazo de validade.
              </span>
            </div>
          </section>

          <section className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <div className={styles.iconCircle}><MapPin size={18} /></div>
              <div>
                <strong>Endereço</strong>
                <p>Rua das Flores, 123 - Serra Negra, SP</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.iconCircle}><Clock size={18} /></div>
              <div>
                <strong>Horário de Coleta</strong>
                <p>Seg a Sex: 08h - 18h</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.iconCircle}><Phone size={18} /></div>
              <div>
                <strong>Contato</strong>
                <p>(19) 99888-7766</p>
              </div>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <button className={styles.btnShare} title="Compartilhar">
            <Share2 size={18} />
          </button>
          <button className={styles.btnDonate} onClick={onDonateClick}>
            Ajudar Agora <ArrowRight size={18} />
          </button>
        </footer>
      </div>
    </div>
  );
}