'use client'


import Card from "@/app/Components/Card_Praias/page";
import Image from "next/image";
import "./Praias.css"

export default function Praias() {
  return (
    <>
      <div className="Praias_title">
        <h1>Praias Listadas</h1>
        <p>Algumas das praias envolvidas no processo realizado pela BlueJourney:</p>
      </div>
      <section className="cardGrid">
        <Card/>
      </section>
      
    </>
  );
}
