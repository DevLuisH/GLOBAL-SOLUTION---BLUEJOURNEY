'use client'
import Card from "@/app/Components/Card_Eventos/page";
import Image from "next/image";
import "./Eventos.css"


export default function Eventos() {
  return (
    <>
      <section className="Eventos_title">
        <div className="Eventos_text">
          <h1>Seja bem vindo à nossa sessão de Eventos.</h1>
          <p>Os eventos sao definidos de acordo com a classificação feita pela aplicação da BlueJourney.</p>
        </div>
           </section>
     
      <section className="cardGrid">
        <Card/>
      </section>
    </>
  );
}
