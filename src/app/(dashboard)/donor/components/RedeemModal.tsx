import { useState } from "react";
import styles from "./redeemModal.module.css";
import { X, Ticket, CheckCircle2, QrCode, Copy, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface Reward {
  id: number;
  name: string;
  partner: string;
  points: number;
  description: string;
}

export default function RedeemModal({ reward, onClose }: { reward: Reward, onClose: () => void }) {
  const [step, setStep] = useState<"confirm" | "success">("confirm");

  const handleConfirmRedeem = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#28a745", "#ffaa00"]
    });
    setStep("success");
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}><X size={20} /></button>

        {step === "confirm" ? (
          <div className={styles.confirmContent}>
            <div className={styles.iconCircle}><Ticket size={40} color="#f59e0b" /></div>
            <h2>Confirmar Resgate?</h2>
            <p>Você está prestes a usar <strong>{reward.points} pontos</strong> para resgatar:</p>
            
            <div className={styles.rewardCard}>
              <span className={styles.partnerName}>{reward.partner}</span>
              <p className={styles.rewardDesc}>{reward.description}</p>
            </div>

            <p className={styles.warning}>Essa ação não pode ser desfeita.</p>

            <div className={styles.actions}>
              <button className={styles.btnCancel} onClick={onClose}>Agora não</button>
              <button className={styles.btnConfirm} onClick={handleConfirmRedeem}>
                Confirmar Resgate <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.successContent}>
            <div className={styles.successHeader}>
              <CheckCircle2 size={50} color="#28a745" />
              <h2>Resgate Efetuado!</h2>
              <p>Apresente o código abaixo no estabelecimento.</p>
            </div>

            <div className={styles.couponArea}>
              <div className={styles.qrPlaceholder}>
                <QrCode size={120} color="#334155" />
                <span>QR CODE ATIVO</span>
              </div>
              
              <div className={styles.codeRow}>
                <span className={styles.label}>CÓDIGO:</span>
                <code className={styles.code}>LOVE-2026-XPT9</code>
                <button className={styles.copyBtn}><Copy size={16} /></button>
              </div>
            </div>

            <div className={styles.infoBox}>
              <p>O cupom também foi enviado para o seu e-mail e está salvo na aba <strong>Meus Cupons</strong>.</p>
            </div>

            <button className={styles.btnDone} onClick={onClose}>Entendido</button>
          </div>
        )}
      </div>
    </div>
  );
}