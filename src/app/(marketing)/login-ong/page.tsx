"use client";

import { useState } from "react";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // 1. Importe o useRouter
import Header from "../components/sideBar/Header";

export default function ONGLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const router = useRouter(); // 2. Inicialize o router

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de lógica de autenticação
    console.log("Email:", email, "Senha:", password);

    // 3. Redireciona para a rota do dashboard da ONG
    // Certifique-se de que a pasta existe em: src/app/dashboard/ong/page.tsx
    router.push("/dashboard/ong");
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <section className="flex-grow bg-gradient-to-b from-green-50/80 to-gray-50 py-20 flex justify-center items-center px-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-green-100 w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-center text-green-700 mb-2">
            Login ONG
          </h2>
          <p className="text-center text-gray-600 mb-8 text-sm">
            Acesse o painel administrativo da sua instituição
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                E-mail
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-600">
                <Mail className="text-gray-400" size={20} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 p-3 outline-none bg-transparent"
                  placeholder="exemplo@ong.com"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Senha
              </label>
              <div className="relative flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-600">
                <Lock className="text-gray-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 p-3 outline-none bg-transparent"
                  placeholder="Digite sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-gray-500 hover:text-green-700 transition-colors"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 hover:scale-[1.02] transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-green-400"
            >
              Entrar
            </button>
          </form>

          <div className="text-center mt-6 text-sm text-gray-600">
            <p>
              Ainda não tem acesso?{" "}
              <Link
                href="/register-ong"
                className="text-green-700 font-semibold hover:underline"
              >
                Cadastre sua ONG
              </Link>
            </p>
            <p className="mt-2">
              É doador?{" "}
              <Link
                href="/login-user"
                className="text-green-700 font-semibold hover:underline"
              >
                Entrar como usuário
              </Link>
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-green-800 text-green-200 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
          <p className="font-medium">
            © {new Date().getFullYear()} LoveCycle. Todos os direitos reservados.
          </p>
          <p className="text-sm text-green-300">
            Plataforma solidária conectando quem quer ajudar com quem precisa 💚
          </p>
        </div>
      </footer>
    </main>
  );
}