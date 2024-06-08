'use client'
import Image from "next/image";
import Link from "next/link";
import "./Cadastro.css";
import { useState } from "react";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    email: "",
    nome: "",
    telefone: "",
    senha: "",
    rua: "",
    cep: "" 
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function createUser(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/Global/rest/Usuario/inserir", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData) 
      });

      if (response.ok) {
        console.log("Usuário criado com sucesso!");
        // Redirecionar ou exibir mensagem de sucesso
      } else {
        console.error("Falha ao criar usuário.");
        // Exibir mensagem de erro
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <>
      <section className="section_Cadastro">
        <Image src="/assets/logog.jpg" width={300} height={300} alt="Logo"/>
        <h1>Cadastro</h1>

        <form onSubmit={createUser} className="form_Cadastro">
          <div className="input-box">
            <label>E-mail: </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <label>Nome: </label>
            <input
              type="text"
              name="nome"
              placeholder="nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <label>Telefone: </label>
            <input
              type="tel"
              name="telefone"
              placeholder="telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
            <small>Format: (99)99999-9999</small>
          </div>

          <div className="input-box">
            <label>Senha: </label>
            <input
              type="password"
              name="senha"
              placeholder="senha"
              value={formData.senha}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <label>Rua: </label>
            <input
              type="text"
              name="rua"
              placeholder="rua"
              value={formData.rua}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <label>CEP: </label>
            <input
              type="text"
              name="cep"
              placeholder="cep"
              value={formData.cep}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="login">
          <Link href={"/Pages/Login"} >Finalizar</Link>
          </button>
        </form>
      </section>
    </>
  );
}
