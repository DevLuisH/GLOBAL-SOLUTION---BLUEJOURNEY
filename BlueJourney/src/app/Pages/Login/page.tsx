'use client'
import Image from "next/image";
import Link from "next/link";
import "./Login.css"


export default function Login() {

  function user(date: any) {
    console.log(date)

  }
  
  return (
    <>
      <section className="section_Login">
        <Image src="/assets/logog.jpg" width={300} height={300} alt="Logo"/>
        <h1>Login</h1>

        <form onSubmit={(user)} className="form_Login">
          <div className="input-box">
            <label>E-mail do usuário:</label>
            <input type="email"  placeholder="email"/>
          </div>

          <div className="input-box">
            <label>Senha: <a href="/Pages/Cadastro">Esqueceu sua senha?</a></label>
            
            <input type="password"  placeholder="senha"/>
          </div>

          <div className="input-box">
              <button type="submit" className="login"><a href={"/Pages/Portal"}>Fazer Login</a></button>
          </div>
        </form>

        <p>Não é cliente?</p>
        <button className="login">
          <Link href={"/Pages/Cadastro"} >Cadastrar-se</Link>
        </button> 
      </section>

    </>
  );
}

