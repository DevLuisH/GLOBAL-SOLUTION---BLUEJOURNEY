'use client'
import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <>

      <section className="Home_section">
      <center><Image src={"/assets/landing page 1.png"} alt="" width={500} height={500} /></center>
        <div className="Home_text">
          <h1>Por que se juntar à BlueJourney?</h1>
          <p>Ao participar de nossos eventos de limpeza, você está promovendo a conservação marinha  e protegendo a biodiversidade costeira, <br />
             além disso, estará fazendo parte de uma comunidade global de pessoas comprometidas com a preservação ambiental. <br />
             Nossa plataforma fornece dados precisos e confiáveis sobre a condição das praias, permitindo que você tome decisões <br />informadas sobre onde passar seu tempo ao ar livre.
             Juntos, podemos alcançar grandes feitos. 
          </p>  
        </div>
      </section>

      <section className="Home_section">
        <div className="Home_text">
          <h1>Como funciona a BlueJourney?</h1>
          <p>Descubra praias limpas: Nossa aplicação classifica praias com base em sua condição de limpeza,fornecendo informações em tempo real <br /> para que você possa fazer escolhas conscientes.
             <br />Participe de eventos de limpeza das praias:  Junte-se a nós e aos governos locais em eventos de limpeza de praias. Ao se envolver, você está <br /> contribuindo diretamente para a proteção do meio ambiente. 
             <br /> Faça sua parte, juntos podemos alcançar grander feitos.
          </p>
        </div>
        <Image src={"/assets/landing page arraia.png"} alt="" width={200} height={200} />
      </section>

      <section className="Home_section">
        <div className="Home_text">
          <h1>Nossa Missão - Chamado à Ação</h1>
          <p>
          Junte-se à BlueJourney e faça parte de uma revolução marinha. Nossa missão é clara: inspirar mudanças positivas <br />
          na forma como tratamos nossas praias e oceanos. Ao se inscrever, você está se  <br /> 
          comprometendo com um futuro mais limpo e sustentável para todos.
          </p>
        </div>
        <Image src={"/assets/landing page 3.png"} alt="" width={200} height={200} />
      </section>


      <section className="Home_section">
        <div className="Home_text">
          <h1>Proteja Nossas Praias.</h1>
          <p>Desfrute de praias limpas e cristalinas enquanto se junta à BlueJourney na missão de preservar nossos preciosos ecossistemas marinhos. Junte-se a nós hoje e seja um guardião das nossas costas!</p>
        </div>
        <Image src={"/assets/landing page 4.png"} alt="" width={500} height={500} />
      </section>

      <section className="Home_section">
        <Image src={"/assets/landing page 5.png"} alt="" width={200} height={200} />
        <div className="Home_text">
          <h1>Inovação Tecnológica</h1>
          <p>Explore as tecnologias inovadoras por trás da BlueJourney e descubra como estamos transformando a forma como as pessoas interagem com o meio ambiente. <br />
            Estamos capacitando indivíduos e comunidades a tomar medidas para proteger nossos ecossistemas costeiros.</p>
        </div>
      </section>
      
      <section className="Home_section">
      <Image src={"/assets/landing page 6.png"} alt="" width={200} height={200} />
        <div className="Home_text">
          <h1>Sustentabilidade</h1>
          <p>A sustentabilidade é o cerne de tudo o que fazemos na BlueJourney. Desde a organização de eventos de <br /> 
          limpeza de praias até a promoção de estilos de vida sustentáveis, estamos comprometidos em proteger nosso <br />
          planeta para as gerações futuras. Venha fazer parte deste movimento sustentável.</p>
        </div>
        
      </section>

    </>
  );
}
