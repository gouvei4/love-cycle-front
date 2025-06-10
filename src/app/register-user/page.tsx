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
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";

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

  // Controle de mostrar/ocultar senhas
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchEndereco = async () => {
      if (form.cep.length === 8) {
        const res = await fetch(`https://viacep.com.br/ws/${form.cep}/json/`);
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
      }
    };
    fetchEndereco();
  }, [form.cep]);

  return (
    <>
      <motion.form
        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white shadow-xl rounded-2xl max-w-3xl mx-auto mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="col-span-2 text-2xl font-bold mb-4 text-center">Cadastro</div>

        <Input icon={<User />} name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
        <Input icon={<User />} name="sobrenome" placeholder="Sobrenome" value={form.sobrenome} onChange={handleChange} required />

        <Input icon={<Mail />} name="email" type="email" placeholder="E-mail" value={form.email} onChange={handleChange} required />

        {/* Senha com botão mostrar/ocultar */}
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

        {/* Confirmar senha com botão mostrar/ocultar */}
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
            aria-label={showConfirmarSenha ? "Ocultar senha" : "Mostrar senha"}
          >
            {showConfirmarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <Input icon={<Phone />} name="whatsapp" placeholder="WhatsApp" value={form.whatsapp} onChange={handleChange} required />
        <Input icon={<IdCard />} name="cpf" placeholder="CPF" value={form.cpf} onChange={handleChange} required />

        <Input icon={<MapPin />} name="cep" placeholder="CEP" value={form.cep} onChange={handleChange} required />
        <Input name="rua" placeholder="Rua" value={form.rua} onChange={handleChange} readOnly />
        <Input name="bairro" placeholder="Bairro" value={form.bairro} onChange={handleChange} readOnly />
        <Input name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} readOnly />
        <Input name="estado" placeholder="Estado" value={form.estado} onChange={handleChange} readOnly />
        <Input icon={<Globe />} name="pais" placeholder="País" value={form.pais} onChange={handleChange} required />

        <div className="col-span-2">
          <Button type="submit" className="w-full">
            Cadastrar
          </Button>
        </div>
      </motion.form>

      <footer className="bg-green-800 text-green-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
          <p>
            © {new Date().getFullYear()} LoveCycle. Todos os direitos reservados.
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
    </>
  );
}
