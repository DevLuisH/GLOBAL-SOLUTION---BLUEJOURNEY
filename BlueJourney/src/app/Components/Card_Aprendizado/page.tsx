'use client'
import Image from "next/image";
import dados from "./Dados_CA.json";
import "./Card.css"

interface Dados {
  name : string;
  text : string;
}

export default function Card() {
  return (
    <>
      {
        dados.map((info : Dados) =>(
          <div className="card">
            <h1>{info.name}</h1>
            <p>{info.text}</p>
          </div>
        ))
      }
    </>
  );
}
