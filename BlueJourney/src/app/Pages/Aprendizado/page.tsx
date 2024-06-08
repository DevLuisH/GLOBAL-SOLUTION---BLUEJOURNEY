'use client'
import Image from "next/image";
import Link from "next/link";
import "./Aprendizado.css"
import Card from "@/app/Components/Card_Aprendizado/page";

export default function Aprendizado() {
  return (
    <>
      <div className="Aprendizado_title">
        <h1>Aprendizado</h1>
        <p>Desbloqueie o aprendizado, aprenda de maneira gamificada, na prática e gratuito, acesse nossa comunidade global, veja séries originais e obtenha suporte quando necessário.</p>    
      </div>

      <section className="cardGrid">
        <Card/>
      </section>
    </>
  );
}
