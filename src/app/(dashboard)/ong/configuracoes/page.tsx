'use client';

import React, { useState, ChangeEvent } from 'react';
import styles from './Configuracoes.module.css';
import { Settings, Save, Building, MapPin } from 'lucide-react';

export default function ConfiguracoesONG() {
  const [formData, setFormData] = useState({
    nome: "Abrigo Esperança",
    email: "contato@abrigoesperanca.org",
    telefone: "(11) 4002-8922",
    cnpj: "12.345.678/0001-90",
    logradouro: "Rua das Flores, 456",
    bairro: "Jardim América",
    cidade: "São Paulo",
    cep: "01234-567"
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log("Dados salvos:", formData);
    alert("Configurações atualizadas com sucesso!");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Settings size={32} className={styles.icon} />
        <h1 className={styles.title}>Configurações</h1>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Building size={20} />
            <h3>Perfil da Instituição</h3>
          </div>
          <div className={styles.grid}>
            <div className={styles.inputGroup}>
              <label>Nome da ONG</label>
              <input type="text" value={formData.nome} readOnly />
            </div>
            <div className={styles.inputGroup}>
              <label>CNPJ</label>
              <input type="text" value={formData.cnpj} readOnly />
            </div>
            <div className={styles.inputGroup}>
              <label>E-mail de Contato</label>
              <input 
                type="email" 
                name="email"
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Telefone/WhatsApp</label>
              <input 
                type="text" 
                name="telefone"
                value={formData.telefone} 
                onChange={handleChange} 
              />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <MapPin size={20} />
            <h3>Endereço de Sede</h3>
          </div>
          <div className={styles.grid}>
            <div className={styles.inputGroupFull}>
              <label>Logradouro</label>
              <input 
                type="text" 
                name="logradouro"
                value={formData.logradouro} 
                onChange={handleChange} 
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Bairro</label>
              <input 
                type="text" 
                name="bairro"
                value={formData.bairro} 
                onChange={handleChange} 
              />
            </div>
            <div className={styles.inputGroup}>
              <label>CEP</label>
              <input 
                type="text" 
                name="cep"
                value={formData.cep} 
                onChange={handleChange} 
              />
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <button className={styles.btnSave} onClick={handleSave}>
            <Save size={18} /> Salvar Alterações
          </button>
        </footer>
      </div>
    </div>
  );
}