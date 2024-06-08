'use client'
import Image from "next/image";
import Link from "next/link";
import "./DevTeams.css"


export default function DevTeams() {
  return (
    <>
      <h1 className="DevTeams_title">Dev Teams</h1>

      <section className="cardGrid">
        <div className="card">
        <h1>Daniel Fernando Alves de Magalhaes </h1>
        <h2>RM: 553785 </h2>
          
        </div>
        <div className="card">
        <h1>Iago Santos Assis</h1>
        <h2>RM: 552661</h2>
        </div>
        <div className="card">
          <h1>Matheus Duarte Oliveira</h1>
          <h2>RM: 554199</h2>
        </div>
      </section>
    </>
  );
}
