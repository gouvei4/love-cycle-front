import { useState, useEffect } from "react";
import styles from "./donateModal.module.css";
import { Send, X, Plus, Minus, Trash2, Clock, Check, PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";

const POINT_VALUES = {
  Alimentos: 20,
  Vestuário: 10,
  Higiene: 15,
  Brinquedos: 10,
  Outros: 10
};

const CATEGORIES = {
  Alimentos: ["Arroz", "Feijão", "Leite", "Óleo", "Macarrão"],
  Vestuário: ["Camisa", "Calça", "Sapato", "Agasalho"],
  Higiene: ["Sabonete", "Creme Dental", "Fralda", "Absorvente"],
  Brinquedos: ["Boneca", "Carrinho", "Urso de Pelúcia", "Jogo"],
};

export default function DonateModal({ ongName, onClose }: { ongName: string; onClose: () => void }) {
  const [selectedCat, setSelectedCat] = useState<keyof typeof CATEGORIES>("Alimentos");
  const [itemList, setItemList] = useState<any[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [isAddingCustom, setIsAddingCustom] = useState(false);
  const [customItemName, setCustomItemName] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  
  // NOVO: Estado para a animação do botão final
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const points = itemList.reduce((acc, item) => {
      const weight = POINT_VALUES[item.category as keyof typeof POINT_VALUES] || 10;
      return acc + (item.quantity * weight);
    }, 0);
    setTotalPoints(points > 0 ? points + 50 : 0);
  }, [itemList]);

  const handleAddItem = (itemName: string) => {
    if (!itemName.trim()) return;
    const existing = itemList.find(i => i.name.toLowerCase() === itemName.toLowerCase() && i.category === selectedCat);
    if (existing) {
      setItemList(itemList.map(i => i.id === existing.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      setItemList([...itemList, { id: Math.random().toString(36).substr(2, 9), name: itemName, category: selectedCat, quantity: 1 }]);
    }
    setIsAddingCustom(false);
    setCustomItemName("");
  };

  const triggerSuccess = () => {
    setIsSuccess(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      zIndex: 2000
    });
  };

  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log("Finalizando doação:", { items: itemList, message: userMessage });
      onClose();
    }, 1500);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}><X size={20} /></button>

        {!isSuccess ? (
          <>
            <header className={styles.header}>
              <div className={styles.headerTitleRow}>
                <h2>Doar para {ongName}</h2>
                <div className={styles.pointsBadge}>
                  <Clock size={14} className={styles.timerIcon} />
                  <span>+{totalPoints} Pontos</span>
                </div>
              </div>
            </header>

            <div className={styles.content}>
              <div className={styles.selectionSection}>
                <label className={styles.label}>O que você está doando?</label>
                <select className={styles.select} value={selectedCat} onChange={(e) => setSelectedCat(e.target.value as any)}>
                  {Object.keys(CATEGORIES).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>

                <div className={styles.itemsGrid}>
                  {CATEGORIES[selectedCat].map(item => (
                    <button key={item} className={styles.miniTag} onClick={() => handleAddItem(item)}>
                      <Plus size={12} /> {item}
                    </button>
                  ))}
                  {!isAddingCustom ? (
                    <button className={`${styles.miniTag} ${styles.othersTag}`} onClick={() => setIsAddingCustom(true)}>
                      <Plus size={12} /> Algo diferente?
                    </button>
                  ) : (
                    <div className={styles.customItemInput}>
                      <input autoFocus placeholder="Ex: Tênis..." value={customItemName} onChange={(e) => setCustomItemName(e.target.value)} />
                      <button onClick={() => handleAddItem(customItemName)}><Check size={14} /></button>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.listContainer}>
                <label className={styles.label}>Sua Sacola</label>
                <div className={styles.scrollList}>
                  {itemList.length === 0 && <p className={styles.empty}>Nenhum item adicionado...</p>}
                  {itemList.map(item => (
                    <div key={item.id} className={styles.itemRow}>
                      <div className={styles.itemInfo}>
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemCat}>{item.category}</span>
                      </div>
                      <div className={styles.controls}>
                        <span>x{item.quantity}</span>
                        <button className={styles.delBtn} onClick={() => setItemList(itemList.filter(i => i.id !== item.id))}><Trash2 size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <footer className={styles.footer}>
              <button className={styles.btnPrimary} onClick={triggerSuccess} disabled={itemList.length === 0}>
                Confirmar Doação
              </button>
            </footer>
          </>
        ) : (
          <div className={styles.successWrapper}>
            <div className={styles.iconCircle}>
              <PartyPopper size={40} color="#28a745" />
            </div>
            <h2>Doação enviada com sucesso!</h2>
            <p className={styles.successText}>
              Parabéns! Você acaba de garantir <strong>{totalPoints} pontos</strong>. 
              Aguarde o contato da <strong>{ongName}</strong> para combinar a entrega.
            </p>

            <div className={styles.messageBox}>
              <label className={styles.label}>Deseja enviar uma mensagem para a instituição?</label>
              <textarea 
                className={styles.textarea}
                placeholder="Ex: Gostaria de saber o melhor horário para levar os itens..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
              />
            </div>

            <div className={styles.footerCentered}>
              <button 
                className={`${styles.btnPrimary} ${isSubmitting ? styles.btnSuccessAnim : ""}`} 
                onClick={handleFinalSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? <Check size={24} /> : "Finalizar e Enviar Mensagem"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}