import styles from "./ranking.module.css";
import { Trophy, Medal } from "lucide-react";

const RANKING_DATA = [
  { id: 1, name: "Lucas Silva", doacoes: 154, avatar: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Mariana Costa", doacoes: 122, avatar: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Ricardo Alves", doacoes: 101, avatar: "https://i.pravatar.cc/150?u=3" },
  { id: 15, name: "Afonso Gouveia", doacoes: 12, avatar: "https://github.com/gouvei4.png", isMe: true },
];

export default function RankingPage() {
  return (
    <div className={styles.container}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ color: '#1b4332', fontSize: '2rem', fontWeight: 'bold' }}>Ranking de Solidariedade</h1>
        <p style={{ color: '#64748b' }}>Os doadores com maior número de doações concluídas.</p>
      </header>

      <div className={styles.podium}>
        <div className={`${styles.podiumItem} ${styles.secondPlace}`}>
          <Medal color="#c0c0c0" size={32} />
          <img src={RANKING_DATA[1].avatar} className={styles.podiumAvatar} />
          <span className={styles.podiumName}>{RANKING_DATA[1].name}</span>
          <span className={styles.podiumBadge}>{RANKING_DATA[1].doacoes} doações</span>
        </div>

        <div className={`${styles.podiumItem} ${styles.firstPlace}`}>
          <Trophy color="#ffd700" size={48} />
          <img src={RANKING_DATA[0].avatar} className={styles.podiumAvatar} />
          <span className={styles.podiumName}>{RANKING_DATA[0].name}</span>
          <span className={styles.podiumBadge}>{RANKING_DATA[0].doacoes} doações</span>
        </div>

        <div className={`${styles.podiumItem} ${styles.thirdPlace}`}>
          <Medal color="#cd7f32" size={32} />
          <img src={RANKING_DATA[2].avatar} className={styles.podiumAvatar} />
          <span className={styles.podiumName}>{RANKING_DATA[2].name}</span>
          <span className={styles.podiumBadge}>{RANKING_DATA[2].doacoes} doações</span>
        </div>
      </div>

      <div className={styles.rankingTable}>
        {RANKING_DATA.map((user) => (
          <div key={user.id} className={`${styles.tableRow} ${user.isMe ? styles.isMe : ""}`}>
            <span className={styles.pos}>#{user.id}</span>
            <div className={styles.userCell}>
              <img src={user.avatar} alt={user.name} />
              <span className={styles.userName}>
                {user.name} {user.isMe && "(Você)"}
              </span>
            </div>
            <span className={styles.dataCell}>{user.doacoes} doações</span>
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', marginTop: '2rem', color: '#94a3b8', fontSize: '0.9rem' }}>
        Suas doações ajudam a transformar vidas e te levam ao topo do ranking!
      </p>
    </div>
  );
}