import styles from "./perfil.module.css";
import { 
  User, Mail, Phone, MapPin, CreditCard, 
  Lock, Calendar, Star, Globe 
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className={styles.container}>
      <header className={styles.profileHeader}>
        <div className={styles.avatarWrapper}>
          <img 
            src="https://github.com/afonsogouveia.png" 
            alt="Afonso Gouveia" 
            className={styles.avatar} 
          />
          <div className={styles.levelBadge}>
            <Star size={14} fill="#28a745" /> Nível 15
          </div>
        </div>
        
        <div className={styles.headerInfo}>
          <h1 className={styles.title}>Afonso Gouveia</h1>
          <p className={styles.subtitle}>
            <Calendar size={16} /> Doador ativo desde Outubro 2023
          </p>
          <p className={styles.location}>
            <MapPin size={16} /> São Paulo, Brasil
          </p>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>XP Total</span>
          <span className={styles.statValue}>1.250</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Doações Feitas</span>
          <span className={styles.statValue}>12</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Vidas Impactadas</span>
          <span className={styles.statValue}>48</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Ranking</span>
          <span className={styles.statValue}>#15º</span>
        </div>
      </section>

      <form className={styles.gridForm}>
        <h2 className={styles.formTitle}>Informações Pessoais</h2>
        
        <div className={styles.inputGroup}>
          <label><User size={16} /> Nome</label>
          <input type="text" defaultValue="Afonso" />
        </div>

        <div className={styles.inputGroup}>
          <label><User size={16} /> Sobrenome</label>
          <input type="text" defaultValue="Gouveia" />
        </div>

        <div className={styles.inputGroup}>
          <label><Mail size={16} /> E-mail</label>
          <input type="email" defaultValue="afonso.gouveia@exemplo.com" />
        </div>

        <div className={styles.inputGroup}>
          <label><Phone size={16} /> WhatsApp</label>
          <input type="text" defaultValue="(11) 99999-9999" />
        </div>

        <div className={styles.inputGroup}>
          <label><CreditCard size={16} /> CPF</label>
          <input type="text" defaultValue="000.000.000-00" readOnly className={styles.readOnly} />
        </div>

        <div className={styles.inputGroup}>
          <label><Lock size={16} /> Nova Senha</label>
          <input type="password" placeholder="Deixe em branco para manter" />
        </div>

        <h2 className={styles.formTitle} style={{ gridColumn: 'span 2', marginTop: '1rem' }}>
          Endereço de Coleta
        </h2>

        <div className={styles.inputGroup}>
          <label><MapPin size={16} /> CEP</label>
          <input type="text" defaultValue="01000-000" />
        </div>

        <div className={styles.inputGroup}>
          <label><MapPin size={16} /> Bairro</label>
          <input type="text" defaultValue="Jardins" />
        </div>

        <div className={styles.inputGroup} style={{ gridColumn: 'span 2' }}>
          <label><MapPin size={16} /> Rua / Logradouro</label>
          <input type="text" defaultValue="Avenida Paulista, 1000" />
        </div>

        <div className={styles.inputGroup}>
          <label><Globe size={16} /> Cidade</label>
          <input type="text" defaultValue="São Paulo" />
        </div>

        <div className={styles.inputGroup}>
          <label><Globe size={16} /> Estado</label>
          <input type="text" defaultValue="SP" />
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.btnCancel}>Descartar</button>
          <button type="submit" className={styles.btnSave}>Atualizar Perfil</button>
        </div>
      </form>
    </div>
  );
}