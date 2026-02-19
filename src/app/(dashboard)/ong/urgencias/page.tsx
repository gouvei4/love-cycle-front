'use client';

import { useState } from "react";
import styles from './urgencias.module.css';
import { AlertCircle, CheckCircle2, Clock, Plus } from "lucide-react";
import ModalNovaUrgencia from "../components/ModalNovaUrgencia";

export default function UrgenciasPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [urgencias, setUrgencias] = useState([
        {
            id: '1',
            titulo: 'Falta de Leite Materno',
            descricao: 'Precisamos de doações urgentes para 12 recém-nascidos',
            tempo: 'Há 2 horas',
            nivel: 'critico'
        }
    ]);

    const handlePublicarUrgencia = (dados: any) => {
        const novaUrgencia = {
            id: Math.random().toString(),
            titulo: dados.titulo,
            descricao: dados.descricao,
            tempo: 'Agora mesmo',
            nivel: 'critico'
        };

        setUrgencias((prev) => [novaUrgencia, ...prev]);
        setIsModalOpen(false);
    };

    const handleResolver = (id: string) => {
        setUrgencias((prev) => prev.filter(item => item.id !== id));
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1>🚨 Gerenciar Urgências</h1>
                    <p>itens de prioridade máxima que aparecem no topo para os doadores.</p>
                </div>
                <button className={styles.btnUrgente} onClick={() => setIsModalOpen(true)}>
                    <Plus size={20} /> Nova Urgência
                </button>
            </header>

            <div className={styles.grid}>
                {urgencias.map((item) => (
                    <div key={item.id} className={`${styles.card} ${styles[item.nivel]}`}>
    <div className={styles.cardHeader}>
        <div className={styles.alertIcon}>
            <AlertCircle size={24} />
        </div>
        <span className={styles.time}><Clock size={14} /> {item.tempo}</span>
    </div>
    
    <div>
        <h3>{item.titulo}</h3>
        <p>{item.descricao}</p>
    </div>

    <div className={styles.cardActions}>
        <button 
            className={styles.btnResolver}
            onClick={() => handleResolver(item.id)}
        >
            <CheckCircle2 size={18} /> Resolvido
        </button>
        <button className={styles.btnEditar}>Editar</button>
    </div>
</div>
                ))}
            </div>

            {isModalOpen && (
                <ModalNovaUrgencia
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onPublicar={handlePublicarUrgencia}
                />
            )}
        </div>
    );
}