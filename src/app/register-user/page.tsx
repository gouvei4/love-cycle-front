"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
  Globe,
  IdCard,
  Twitter,
  Instagram,
  Facebook,
  Eye,
  EyeOff,
} from "lucide-react";
import Link from "next/link";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import Header from "../components/sideBar/Header";

export default function CadastroForm() {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    whatsapp: "",
    cpf: "",
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
    pais: "Brasil",
  });

  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);

  // helpers de formatação
  const onlyNumbers = (value: string) => value.replace(/\D/g, "");

  const formatCPF = (value: string) => {
    const v = onlyNumbers(value).slice(0, 11);
    return v
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1-$2");
  };

  const formatWhatsapp = (value: string) => {
    const v = onlyNumbers(value).slice(0, 11);
    if (v.length <= 2) return v.replace(/^(\d{0,2})/, "($1");
    if (v.length <= 6) return v.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
    return v.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  };

  const formatCEP = (value: string) => {
    const v = onlyNumbers(value).slice(0, 8);
    return v.replace(/^(\d{5})(\d)/, "$1-$2");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let formatted = value;

    if (name === "cpf") formatted = formatCPF(value);
    if (name === "whatsapp") formatted = formatWhatsapp(value);
    if (name === "cep") formatted = formatCEP(value);

    setForm((prev) => ({ ...prev, [name]: formatted }));
  };

  useEffect(() => {
    const fetchEndereco = async () => {
      const cepNum = onlyNumbers(form.cep);
      if (cepNum.length !== 8) return;

      try {
        const res = await fetch(`https://viacep.com.br/ws/${cepNum}/json/`);
        const data = await res.json();
        if (!data.erro) {
          setForm((prev) => ({
            ...prev,
            rua: data.logradouro || "",
            bairro: data.bairro || "",
            cidade: data.localidade || "",
            estado: data.uf || "",
          }));
        }
      } catch (err) {
        console.error("Erro ao buscar CEP", err);
      }
    };

    fetchEndereco();
  }, [form.cep]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.senha !== form.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    console.log("Dados de cadastro:", form);
    alert("Cadastro enviado (demo). Em breve conectamos com o backend 💚");
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* HEADER GLOBAL */}
      <Header />

      {/* CONTEÚDO */}
      <section className="flex-grow bg-gradient-to-b from-green-50/80 to-gray-50 py-16 px-4">
        <motion.form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white shadow-xl rounded-2xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-span-2 mb-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Crie sua conta</h1>
            <p className="text-sm text-gray-600 mt-1">
              Participe do LoveCycle e acompanhe o impacto das suas doações.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Já tem conta?{" "}
              <Link
                href="/login-user"
                className="text-green-700 font-semibold hover:underline"
              >
                Entrar
              </Link>
            </p>
          </div>

          <Input
            icon={<User />}
            name="nome"
            placeholder="Nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
          <Input
            icon={<User />}
            name="sobrenome"
            placeholder="Sobrenome"
            value={form.sobrenome}
            onChange={handleChange}
            required
          />

          <Input
            icon={<Mail />}
            name="email"
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            required
          />

          {/* Senha */}
          <div className="relative w-full">
            <Input
              icon={<Lock />}
              name="senha"
              type={showSenha ? "text" : "password"}
              placeholder="Senha"
              value={form.senha}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowSenha(!showSenha)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors"
              tabIndex={-1}
              aria-label={showSenha ? "Ocultar senha" : "Mostrar senha"}
            >
              {showSenha ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirmar senha */}
          <div className="relative w-full">
            <Input
              icon={<Lock />}
              name="confirmarSenha"
              type={showConfirmarSenha ? "text" : "password"}
              placeholder="Confirmar senha"
              value={form.confirmarSenha}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmarSenha(!showConfirmarSenha)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors"
              tabIndex={-1}
              aria-label={
                showConfirmarSenha ? "Ocultar senha" : "Mostrar senha"
              }
            >
              {showConfirmarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <Input
            icon={<Phone />}
            name="whatsapp"
            placeholder="WhatsApp"
            value={form.whatsapp}
            onChange={handleChange}
            required
          />
          <Input
            icon={<IdCard />}
            name="cpf"
            placeholder="CPF"
            value={form.cpf}
            onChange={handleChange}
            required
          />

          <Input
            icon={<MapPin />}
            name="cep"
            placeholder="CEP"
            value={form.cep}
            onChange={handleChange}
            required
            maxLength={9}
          />
          <Input
            name="rua"
            placeholder="Rua"
            value={form.rua}
            onChange={handleChange}
            readOnly
          />
          <Input
            name="bairro"
            placeholder="Bairro"
            value={form.bairro}
            onChange={handleChange}
            readOnly
          />
          <Input
            name="cidade"
            placeholder="Cidade"
            value={form.cidade}
            onChange={handleChange}
            readOnly
          />
          <Input
            name="estado"
            placeholder="Estado"
            value={form.estado}
            onChange={handleChange}
            readOnly
          />
          <Input
            icon={<Globe />}
            name="pais"
            placeholder="País"
            value={form.pais}
            onChange={handleChange}
            required
          />

          <div className="col-span-2 mt-2">
            <Button type="submit" className="w-full">
              Cadastrar
            </Button>
          </div>
        </motion.form>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-800 text-green-200 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
          <p>
            © {new Date().getFullYear()} LoveCycle. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6 text-green-300">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
