'use client';

import React, { useState } from 'react';
import styles from './Doadores.module.css';
import { Users} from 'lucide-react';
import ModalPerfilDoador from '../components/modal/ModalPerfilDoador';

interface Doador {
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
  status: "Ativo" | "Pendente" | "Bloqueado";
  totalDoacoes: number;
  membroDesde: string;
}

const Doadores = () => {
  const [doadores] = useState<Doador[]>([
    { 
      id: 1, 
      nome: "Afonso Gouveia", 
      email: "afonso.gouveia@exemplo.com",
      telefone: "(11) 98765-4321",
      endereco: {
        logradouro: "Rua Exemplo, 123",
        bairro: "Centro",
        cidade: "São Paulo",
        cep: "01001-000"
      },
      pontos: 150, 
      status: "Ativo",
      totalDoacoes: 12,
      membroDesde: "01/11/2025"
    },
    { 
      id: 2, 
      nome: "João Silva", 
      email: "joao.silva@exemplo.com",
      telefone: "(11) 91234-5678",
      endereco: {
        logradouro: "Av. Paulista, 1000",
        bairro: "Bela Vista",
        cidade: "São Paulo",
        cep: "01310-100"
      },
      pontos: 80, 
      status: "Pendente",
      totalDoacoes: 5,
      membroDesde: "15/01/2026"
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoador, setSelectedDoador] = useState<Doador | null>(null);

  const handleOpenModal = (doador: Doador) => {
    setSelectedDoador(doador);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Users size={32} className={styles.icon} />
        <h1 className={styles.title}>Doadores</h1>
      </header>

      <section className={styles.content}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CicloPoints</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {doadores.map(doador => (
              <tr key={doador.id}>
                <td>{doador.nome}</td>
                <td>{doador.pontos}</td>
                <td>
                  <span className={`${styles.statusBadge} ${styles[doador.status.toLowerCase()]}`}>
                    {doador.status}
                  </span>
                </td>
                <td>
                  <button 
                    className={styles.btnDetails}
                    onClick={() => handleOpenModal(doador)}
                  >
                    Ver Perfil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <ModalPerfilDoador 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        doador={selectedDoador} 
      />
    </div>
  );
};

export default Doadores;