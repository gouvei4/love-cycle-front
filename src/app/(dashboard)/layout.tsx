"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./dashboard.module.css";
import { 
  Heart, 
  LayoutDashboard, 
  User, 
  Package, 
  MessageCircle, 
  Trophy, 
  Gift, 
  Building2, 
  AlertTriangle, 
  ClipboardList, 
  Settings, 
  LogOut, 
  Users, 
  Megaphone,
  ArrowLeftRight 
} from "lucide-react";

type UserRole = "DONOR" | "ONG";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [userRole, setUserRole] = useState<UserRole | null>("DONOR");

  useEffect(() => {
    if (!userRole) return;

    if (userRole === "ONG" && pathname.startsWith("/donor")) {
      router.push("/ong");
    } else if (userRole === "DONOR" && pathname.startsWith("/ong")) {
      router.push("/donor");
    }
  }, [userRole, pathname, router]);

  const isActive = (path: string) => pathname === path;

  if (!userRole) return <div className={styles.loading}>Carregando...</div>;

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <Heart size={28} fill="#28a745" stroke="#28a745" /> 
          <span>LoveCycle</span>
        </div>

        <nav className={styles.nav}>
          {userRole === "DONOR" ? (
            <>
              <Link href="/donor" className={`${styles.navItem} ${isActive("/donor") ? styles.active : ""}`}>
                <LayoutDashboard size={20} /> Painel Geral
              </Link>
              <Link href="/donor/perfil" className={`${styles.navItem} ${isActive("/donor/perfil") ? styles.active : ""}`}>
                <User size={20} /> Meu Perfil
              </Link>
              <Link href="/donor/doacoes" className={`${styles.navItem} ${isActive("/donor/doacoes") ? styles.active : ""}`}>
                <Package size={20} /> Minhas Doações
              </Link>
              <Link href="/donor/mensagens" className={`${styles.navItem} ${isActive("/donor/mensagens") ? styles.active : ""}`}>
                <MessageCircle size={20} /> Mensagens
              </Link>
              <Link href="/donor/ranking" className={`${styles.navItem} ${isActive("/donor/ranking") ? styles.active : ""}`}>
                <Trophy size={20} /> Ranking
              </Link>
              <Link href="/donor/resgate" className={`${styles.navItem} ${isActive("/donor/resgate") ? styles.active : ""}`}>
                <Gift size={20} /> Resgate
              </Link>
            </>
          ) : (
            <>
              <Link href="/ong" className={`${styles.navItem} ${isActive("/ong") ? styles.active : ""}`}>
                <Building2 size={20} /> Visão Geral
              </Link>
              <Link href="/ong/campanhas" className={`${styles.navItem} ${isActive("/ong/campanhas") ? styles.active : ""}`}>
                <Megaphone size={20} /> Campanhas
              </Link>
              <Link href="/ong/urgencias" className={`${styles.navItem} ${isActive("/ong/urgencias") ? styles.active : ""}`}>
                <AlertTriangle size={20} /> Gerenciar Urgências
              </Link>
              <Link href="/ong/pendencias" className={`${styles.navItem} ${isActive("/ong/pendencias") ? styles.active : ""}`}>
                <ClipboardList size={20} /> Doações Pendentes
              </Link>
              <Link href="/ong/doadores" className={`${styles.navItem} ${isActive("/ong/doadores") ? styles.active : ""}`}>
                <Users size={20} /> Doadores
              </Link>
              <Link href="/ong/mensagens" className={`${styles.navItem} ${isActive("/ong/mensagens") ? styles.active : ""}`}>
                <MessageCircle size={20} /> Mensagens
              </Link>
              <div className={styles.separator} />
              <Link href="/ong/configuracoes" className={`${styles.navItem} ${isActive("/ong/configuracoes") ? styles.active : ""}`}>
                <Settings size={20} /> Configurações
              </Link>
            </>
          )}
        </nav>

        <div className={styles.sidebarFooter}>
          <button 
            onClick={() => setUserRole(userRole === "DONOR" ? "ONG" : "DONOR")}
            className={styles.navItem}
            title="Alternar visão (Modo Dev)"
            style={{ 
              width: '100%', 
              background: 'rgba(40, 167, 69, 0.1)', 
              border: 'none', 
              color: '#28a745',
              cursor: 'pointer',
              marginBottom: '8px'
            }}
          >
            <ArrowLeftRight size={20} /> 
            Modo: {userRole === "DONOR" ? "Doador" : "ONG"}
          </button>

          <Link href="/" className={styles.navItem} style={{ color: '#dc3545' }}>
            <LogOut size={20} /> Sair
          </Link>
        </div>
      </aside>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}