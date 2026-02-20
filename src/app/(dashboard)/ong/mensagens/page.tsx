"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./messages.module.css";
// Ícone ShieldCheck agora será utilizado no layout
import { Search, Send, MoreVertical, CheckCheck, User, ShieldCheck } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "sent" | "received";
  time: string;
}

interface ChatMessages {
  [key: number]: Message[];
}

// Adicionada tipagem para os doadores
interface Doador {
  id: number;
  nome: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  avatar: string;
  verificado: boolean; // Nova propriedade para usar o ShieldCheck
}

const DOADORES_DEMO: Doador[] = [
  {
    id: 1,
    nome: "Afonso Gouveia",
    lastMessage: "Com certeza! Estarei aí nesse horário. Obrigado!",
    time: "10:32",
    unread: 0,
    online: true,
    avatar: "AG",
    verificado: true // Afonso é um doador verificado
  },
  {
    id: 2,
    nome: "João Silva",
    lastMessage: "Oi, como faço para entregar as fraldas?",
    time: "09:15",
    unread: 1,
    online: false,
    avatar: "JS",
    verificado: false
  }
];

const INITIAL_MESSAGES: ChatMessages = {
  1: [
    { id: 101, text: "Olá, Afonso! Recebemos sua intenção de doação de Leite em Pó e Fraldas. Pode trazer amanhã às 14h?", sender: "sent", time: "10:30" },
    { id: 102, text: "Com certeza! Estarei aí nesse horário. Obrigado!", sender: "received", time: "10:32" }
  ],
  2: [
    { id: 201, text: "Oi, como faço para entregar as fraldas?", sender: "received", time: "09:15" }
  ]
};

export default function OngMessagesPage() {
  const [activeChat, setActiveChat] = useState<Doador>(DOADORES_DEMO[0]);
  const [chatMessages, setChatMessages] = useState<ChatMessages>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChat, chatMessages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: "sent",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => ({
      ...prev,
      [activeChat.id]: [...(prev[activeChat.id] || []), newMessage]
    }));

    setInputText("");
  };

  const currentMessages = chatMessages[activeChat.id] || [];

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Mensagens Recebidas</h2>
          <div className={styles.searchBox}>
            <Search size={18} />
            <input type="text" placeholder="Buscar doador..." />
          </div>
        </div>

        <div className={styles.chatList}>
          {DOADORES_DEMO.map((chat) => (
            <div
              key={chat.id}
              className={`${styles.chatItem} ${activeChat.id === chat.id ? styles.active : ""}`}
              onClick={() => setActiveChat(chat)}
            >
              <div className={styles.avatar}>{chat.avatar}</div>
              <div className={styles.chatInfo}>
                <div className={styles.chatRow}>
                  <span className={styles.ongName}>{chat.nome}</span>
                  <span className={styles.time}>{chat.time}</span>
                </div>
                <p className={styles.lastMsg}>{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      <main className={styles.chatArea}>
        <header className={styles.chatHeader}>
          <div className={styles.headerInfo}>
            <div className={styles.avatarSmall}><User size={20} /></div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <h3>{activeChat.nome}</h3>
                {activeChat.verificado && (
                  <ShieldCheck
                    size={18}
                    color="#28a745"
                    aria-label="Doador Verificado"
                  />
                )}
              </div>
              <span className={styles.status}>
                {activeChat.online ? "● Doador Online" : "Offline"}
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className={styles.iconBtn}><MoreVertical /></button>
          </div>
        </header>

        <div className={styles.messagesContent}>
          <div className={styles.dateSeparator}>Conversa iniciada em Fev 2026</div>

          {currentMessages.map((msg) => (
            <div key={msg.id} className={`${styles.messageBubble} ${msg.sender === 'sent' ? styles.sent : styles.received}`}>
              <p>{msg.text}</p>
              <div className={styles.msgFooter}>
                <span className={styles.msgTime}>{msg.time}</span>
                {msg.sender === 'sent' && <CheckCheck size={14} color="#28a745" />}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className={styles.chatInputArea} onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Responder ao doador..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit" className={styles.sendBtn} disabled={!inputText.trim()}>
            <Send size={20} />
          </button>
        </form>
      </main>
    </div>
  );
}