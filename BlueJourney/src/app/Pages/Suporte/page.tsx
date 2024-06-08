'use client'
import Image from "next/image";
import Card from "@/app/Components/Card_Suporte/page";
import "./Suporte.css"

export default function Suporte() {
  return (
    <>
      <div className="Suporte_title">
        <h1>Dúvidas? Conte com a gente.</h1>
        <p>Encontre as respostas que você mais precisa para tudo da BlueJourney, procure recursos, explore os documentos, registre casos e muito mais.</p>
      </div>

      <section className="cardGrid">
        <Card/>
      </section>
    </>
  );
}
