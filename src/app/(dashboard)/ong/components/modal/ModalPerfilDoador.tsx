import React from 'react';
import styles from '../modalPerfilProps.module.css';
import { X, Award, Package, Calendar, Phone, MapPin, Mail, User } from 'lucide-react';

interface ModalPerfilProps {
  isOpen: boolean;
  onClose: () => void;
  doador: {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    endereco: {
      logradouro: string;
      bairro: string;
      cidade: string;
      cep: string;
    };
    pontos: number;
    totalDoacoes: number;
    membroDesde: string;
  } | null;
}

const ModalPerfilDoador = ({ isOpen, onClose, doador }: ModalPerfilProps) => {
  if (!isOpen || !doador) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeBtn}>
          <X size={20} />
        </button>

        <header className={styles.profileHeader}>
          <div className={styles.avatarPlaceholder}>
            <User size={40} />
          </div>
          <div className={styles.headerText}>
            <h2>{doador.nome}</h2>
            <span className={styles.badge}>Doador Ouro</span>
          </div>
        </header>

        <main className={styles.body}>
          <div className={styles.infoGrid}>
            <section className={styles.infoSection}>
              <h4 className={styles.sectionTitle}>Contato</h4>
              <div className={styles.infoItem}>
                <Mail size={16} className={styles.infoIcon} />
                <span>{doador.email}</span>
              </div>
              <div className={styles.infoItem}>
                <Phone size={16} className={styles.infoIcon} />
                <span>{doador.telefone}</span>
              </div>
            </section>

            <section className={styles.infoSection}>
              <h4 className={styles.sectionTitle}>Localização</h4>
              <div className={styles.infoItem}>
                <MapPin size={16} className={styles.infoIcon} />
                <div>
                  <p>{doador.endereco.logradouro}</p>
                  <p className={styles.subText}>{doador.endereco.bairro} — {doador.endereco.cidade}</p>
                </div>
              </div>
            </section>
          </div>

          <div className={styles.metricsContainer}>
            <div className={styles.metricCard}>
              <div className={`${styles.iconWrapper} ${styles.green}`}>
                <Award size={20} />
              </div>
              <div className={styles.metricData}>
                <span className={styles.metricLabel}>CicloPoints</span>
                <span className={styles.metricValue}>{doador.pontos}</span>
              </div>
            </div>

            <div className={styles.metricCard}>
              <div className={`${styles.iconWrapper} ${styles.blue}`}>
                <Package size={20} />
              </div>
              <div className={styles.metricData}>
                <span className={styles.metricLabel}>Doações</span>
                <span className={styles.metricValue}>{doador.totalDoacoes}</span>
              </div>
            </div>
          </div>

          <div className={styles.footerDate}>
            <Calendar size={14} />
            <span>Membro desde {doador.membroDesde}</span>
          </div>
        </main>

        <footer className={styles.modalFooter}>
          <button onClick={onClose} className={styles.btnSecondary}>Voltar</button>
          <button className={styles.btnAction}>Entrar em contato</button>
        </footer>
      </div>
    </div>
  );
};

export default ModalPerfilDoador;