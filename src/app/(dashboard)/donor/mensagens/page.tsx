"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./messages.module.css";
import { Search, Send, MoreVertical, CheckCheck } from "lucide-react";

const CHATS_DEMO = [
  {
    id: 1,
    ongName: "Abrigo Esperança",
    lastMessage: "Olá, Afonso! Pode trazer amanhã às 14h?",
    time: "10:30",
    unread: 2,
    online: true,
    avatar: "🏢"
  },
  {
    id: 2,
    ongName: "Instituição Mãos Amigas",
    lastMessage: "Os pontos já foram creditados na sua conta!",
    time: "Ontem",
    unread: 0,
    online: false,
    avatar: "🤝"
  }
];

// Mock de mensagens iniciais mapeadas por ID do chat
const INITIAL_MESSAGES = {
  1: [
    { id: 101, text: "Olá, Afonso! Recebemos sua intenção de doação de Leite em Pó e Fraldas. Pode trazer amanhã às 14h?", sender: "received", time: "10:30" },
    { id: 102, text: "Com certeza! Estarei aí nesse horário. Obrigado!", sender: "sent", time: "10:32" }
  ],
  2: [
    { id: 201, text: "Oi Afonso, recebemos as roupas que você enviou. Tudo em perfeito estado!", sender: "received", time: "Ontem" },
    { id: 202, text: "Os pontos já foram creditados na sua conta!", sender: "received", time: "Ontem" }
  ]
};

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(CHATS_DEMO[0]);
  const [chatMessages, setChatMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll para o fim da conversa
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChat, chatMessages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputText,
      sender: "sent",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Atualiza apenas as mensagens do chat ativo
    setChatMessages(prev => ({
      ...prev,
      [activeChat.id]: [...(prev[activeChat.id as keyof typeof INITIAL_MESSAGES] || []), newMessage]
    }));

    setInputText("");
  };

  // Pegamos as mensagens específicas do chat selecionado
  const currentMessages = chatMessages[activeChat.id as keyof typeof INITIAL_MESSAGES] || [];

  return (
    <div className={styles.container}>
      {/* Barra Lateral */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Mensagens</h2>
          <div className={styles.searchBox}>
            <Search size={18} />
            <input type="text" placeholder="Buscar conversa..." />
          </div>
        </div>

        <div className={styles.chatList}>
          {CHATS_DEMO.map((chat) => (
            <div 
              key={chat.id} 
              className={`${styles.chatItem} ${activeChat.id === chat.id ? styles.active : ""}`}
              onClick={() => setActiveChat(chat)}
            >
              <div className={styles.avatar}>{chat.avatar}</div>
              <div className={styles.chatInfo}>
                <div className={styles.chatRow}>
                  <span className={styles.ongName}>{chat.ongName}</span>
                  <span className={styles.time}>{chat.time}</span>
                </div>
                <p className={styles.lastMsg}>{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Área do Chat Ativo */}
      <main className={styles.chatArea}>
        <header className={styles.chatHeader}>
          <div className={styles.headerInfo}>
            <div className={styles.avatarSmall}>{activeChat.avatar}</div>
            <div>
              <h3>{activeChat.ongName}</h3>
              <span className={styles.status}>
                {activeChat.online ? "● Online" : "Offline"}
              </span>
            </div>
          </div>
          <button className={styles.iconBtn}><MoreVertical /></button>
        </header>

        <div className={styles.messagesContent}>
          <div className={styles.dateSeparator}>Histórico de Conversa</div>
          
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
            placeholder="Escreva uma mensagem..." 
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