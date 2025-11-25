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

  // Formatação simples para só números
  const onlyNumbers = (value: string) => value.replace(/\D/g, "");

  // Máscaras simples para cada campo
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
    if (v.length <= 6)
      return v.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
    return v.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  };

  const formatCEP = (value: string) => {
    const v = onlyNumbers(value).slice(0, 8);
    return v.replace(/^(\d{5})(\d)/, "$1-$2");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (name === "cnpj") {
      formattedValue = formatCNPJ(value);
    } else if (name === "telefone") {
      formattedValue = formatTelefone(value);
    } else if (name === "cep") {
      formattedValue = formatCEP(value);
    }

    setFormData({ ...formData, [name]: formattedValue });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCnpjFile(e.target.files[0]);
    }
  };

  const fetchAddress = async () => {
    if (onlyNumbers(formData.cep).length < 8) return;

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${onlyNumbers(formData.cep)}/json/`
      );
      const data = await response.json();

      if (data.erro) {
        alert("CEP não encontrado.");
        return;
      }

      setFormData({
        ...formData,
        logradouro: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf,
      });
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-50 px-6">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Cadastre sua ONG
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <InputField
            label="Nome da ONG"
            icon={<Building2 className="text-gray-400" size={20} />}
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome da ONG"
            required
            wide
          />

          <InputField
            label="CNPJ"
            icon={<Hash className="text-gray-400" size={20} />}
            name="cnpj"
            value={formData.cnpj}
            onChange={handleChange}
            placeholder="00.000.000/0000-00"
            required
            wide
          />

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Documento CNPJ (PDF)
            </label>
            <div className="flex items-center border border-dashed border-gray-300 rounded-lg px-3 py-1 focus-within:ring-2 focus-within:ring-green-500">
              <FileText className="text-gray-400 mr-3" size={20} />
              <input
                type="file"
                accept="application/pdf"
                required
                onChange={handleFileChange}
                className="flex-1 text-sm text-gray-600"
              />
            </div>
            {cnpjFile && (
              <p className="mt-1 text-sm text-green-700 truncate">
                Arquivo selecionado: {cnpjFile.name}
              </p>
            )}
          </div>

          <InputField
            label="Telefone (WhatsApp)"
            icon={<Phone className="text-gray-400" size={20} />}
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            required
            wide
          />

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              CEP
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-500">
              <MapPin className="text-gray-400" size={20} />
              <input
                type="text"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                onBlur={fetchAddress}
                className="flex-1 py-1 outline-none bg-transparent text-sm"
                placeholder="00000-000"
                required
                maxLength={9}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
            <InputField
              label="Logradouro"
              name="logradouro"
              value={formData.logradouro}
              onChange={handleChange}
              placeholder="Rua / Avenida"
              required
              wide
              noIcon
            />
            <InputField
              label="Bairro"
              name="bairro"
              value={formData.bairro}
              onChange={handleChange}
              placeholder="Bairro"
              required
              wide
              noIcon
            />
            <InputField
              label="Cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              placeholder="Cidade"
              required
              wide
              noIcon
              truncate
            />
            <InputField
              label="Estado"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              placeholder="UF"
              required
              wide
              noIcon
            />
          </div>

          <InputField
            label="Senha"
            icon={<Lock className="text-gray-400" size={20} />}
            name="senha"
            type="password"
            value={formData.senha}
            onChange={handleChange}
            placeholder="Crie uma senha segura"
            required
            wide
          />

          <InputField
            label="Confirmar senha"
            icon={<Lock className="text-gray-400" size={20} />}
            name="confirmarSenha"
            type="password"
            value={formData.confirmarSenha}
            onChange={handleChange}
            placeholder="Confirme sua senha"
            required
            wide
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition-colors text-base"
          >
            Registrar ONG
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Já tem uma conta?{" "}
          <Link
            href="/login-ong"
            className="text-green-700 font-medium hover:underline"
          >
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}

function InputField({
  label,
  icon,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  wide = false,
  noIcon = false,
  truncate = false,
}: {
  label: string;
  icon?: React.ReactNode;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  wide?: boolean;
  noIcon?: boolean;
  truncate?: boolean;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;
  const isPasswordField = type === "password";

  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <div
        className={`flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-500 ${
          wide ? "w-full" : ""
        }`}
      >
        {!noIcon && icon && icon}

        <input
          type={inputType}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={`flex-1 py-1 outline-none bg-transparent text-base ${
            truncate ? "truncate overflow-hidden" : ""
          }`}
          placeholder={placeholder}
          maxLength={name === "cep" ? 9 : undefined}
          autoComplete={isPasswordField ? "new-password" : undefined}
        />

        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 text-gray-500 hover:text-green-600 transition-colors"
            tabIndex={-1}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}
