"use client";

import { useState } from "react";
import {
  Lock,
  Building2,
  Phone,
  FileText,
  Hash,
  MapPin,
  Eye,
  EyeOff,
} from "lucide-react";
import Link from "next/link";
import Header from "../components/sideBar/Header";

export default function ONGRegister() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cnpj: "",
    cep: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: "",
    senha: "",
    confirmarSenha: "",
  });

  const [cnpjFile, setCnpjFile] = useState<File | null>(null);
  const onlyNumbers = (value: string) => value.replace(/\D/g, "");

  const formatCNPJ = (value: string) => {
    const v = onlyNumbers(value).slice(0, 14);
    return v
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  };

  const formatTelefone = (value: string) => {
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
    let formattedValue = value;

    if (name === "cnpj") formattedValue = formatCNPJ(value);
    if (name === "telefone") formattedValue = formatTelefone(value);
    if (name === "cep") formattedValue = formatCEP(value);

    setFormData({ ...formData, [name]: formattedValue });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCnpjFile(e.target.files[0]);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Dados:", formData);
    console.log("Arquivo PDF:", cnpjFile);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

      <section className="py-16 px-6 flex justify-center">
        <div className="bg-white rounded-3xl shadow-xl w-full max-w-5xl p-10 border border-green-100">
          <h2 className="text-4xl font-extrabold text-center text-green-700 mb-2">
            Cadastro de ONG
          </h2>
          <p className="text-center text-gray-600 mb-10 text-sm">
            Preencha os dados abaixo e envie o documento oficial do CNPJ
          </p>

          <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Nome da ONG" name="nome" icon={<Building2 size={20} />} value={formData.nome} onChange={handleChange} required />

            <Input label="CNPJ" name="cnpj" icon={<Hash size={20} />} value={formData.cnpj} onChange={handleChange} placeholder="00.000.000/0000-00" required />

            <Input label="Telefone (WhatsApp)" name="telefone" icon={<Phone size={20} />} value={formData.telefone} onChange={handleChange} placeholder="(00) 00000-0000" required />

            <Input label="CEP" name="cep" icon={<MapPin size={20} />} value={formData.cep} onChange={handleChange} placeholder="00000-000" required />

            <Input label="Logradouro" name="logradouro" value={formData.logradouro} onChange={handleChange} required />
            <Input label="Bairro" name="bairro" value={formData.bairro} onChange={handleChange} required />
            <Input label="Cidade" name="cidade" value={formData.cidade} onChange={handleChange} required />
            <Input label="Estado" name="estado" value={formData.estado} onChange={handleChange} required />

            <Input label="Senha" name="senha" icon={<Lock size={20} />} type="password" value={formData.senha} onChange={handleChange} required />
            <Input label="Confirmar senha" name="confirmarSenha" icon={<Lock size={20} />} type="password" value={formData.confirmarSenha} onChange={handleChange} required />

            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium text-gray-700">Documento oficial CNPJ (PDF)</label>
              <div className="border border-dashed border-gray-300 p-4 rounded-xl flex items-center">
                <FileText className="text-gray-400 mr-3" size={22} />
                <input type="file" accept="application/pdf" required onChange={handleFileChange} className="text-sm flex-1" />
              </div>
              {cnpjFile && (
                <p className="text-green-700 text-sm mt-1 truncate">
                  Arquivo selecionado: {cnpjFile.name}
                </p>
              )}
            </div>

            <button type="submit" className="md:col-span-2 bg-green-600 hover:bg-green-700 text-white text-lg py-3 rounded-xl font-semibold shadow-md transition">
              Registrar ONG
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Já tem uma conta?{" "}
            <Link href="/login-ong" className="text-green-700 font-semibold hover:underline">Faça login</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

function Input({ label, icon, ...props }: any) {
  const [show, setShow] = useState(false);
  const type = props.type === "password" && show ? "text" : props.type || "text";
  const isPassword = props.type === "password";

  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-600">
        {icon && <span className="text-gray-400 mr-2">{icon}</span>}

        <input
          {...props}
          type={type}
          className="flex-1 py-2 bg-transparent outline-none text-sm placeholder-gray-400"
        />

        {isPassword && (
          <button type="button" onClick={() => setShow(!show)} className="text-gray-500 hover:text-green-600 ml-2">
            {show ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}
