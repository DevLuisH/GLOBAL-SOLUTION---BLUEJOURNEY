'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';

const Page: React.FC = () => {
    const [eventos, setEventos] = useState<any[]>([
        { id: 1, nome: 'Evento A', local: 'Local A', data: 'Data A', descricao: 'Descrição A', inscrito: false },
        { id: 2, nome: 'Evento B', local: 'Local B', data: 'Data B', descricao: 'Descrição B', inscrito: false }
    ]);
    const urlDadosCI = '/Components/Card_Eventos/Dados_CI.json';

    // Função para carregar os eventos iniciais do arquivo Dados_CI.json
    const carregarEventos = async () => {
        try {
            const resposta = await fetch(urlDadosCI);
            const dados = await resposta.json();
            setEventos(dados);
        } catch (erro) {
            console.error('Erro ao carregar eventos:', erro);
        }
    };

    useEffect(() => {
        carregarEventos(); // Carrega os eventos iniciais quando o componente é montado
    }, []); // A função será chamada apenas uma vez, após o primeiro render

    // Função para lidar com a inscrição do usuário em um evento
    const handleInscricao = (id: number) => {
        setEventos(eventos.map(evento => {
            if (evento.id === id) {
                return { ...evento, inscrito: !evento.inscrito };
            }
            return evento;
        }));
    };

    // Função para excluir um evento
    const handleExclusao = (id: number) => {
        // Verifica se o evento a ser excluído não está na lista de eventos pré-listados
        if (id > eventos.length) {
            setEventos(eventos.filter(evento => evento.id !== id));
        } else {
            console.log('Este evento não pode ser excluído.');
        }
    };

    // Função para adicionar um novo evento
    const adicionarNovoEvento = (evento: any) => {
        setEventos([...eventos, evento]);
    };

    return (
        <div>
            <h1>Portal do Usuário</h1>

            <h2>Adicionar Novo Evento</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                const id = eventos.length + 1;
                const nome = e.currentTarget.nome.value;
                const local = e.currentTarget.local.value;
                const data = e.currentTarget.data.value;
                const descricao = e.currentTarget.descricao.value;
                adicionarNovoEvento({ id, nome, local, data, descricao, inscrito: false });
            }}>
                <label>
                    Nome:
                    <input type="text" name="nome" required />
                </label>
                <br />
                <label>
                    Local:
                    <input type="text" name="local" required />
                </label>
                <br />
                <label>
                    Data:
                    <input type="text" name="data" required />
                </label>
                <br />
                <label>
                    Descrição:
                    <input type="text" name="descricao" required />
                </label>
                <br />
                <button type="submit">Adicionar Evento</button>
            </form>

            <h2>Eventos Registrados</h2>
            <div className="cards-container">
                {eventos.length > 0 ? (
                    eventos.map(evento => (
                        <div key={evento.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">{evento.nome}</h5>
                                <p className="card-text">Local: {evento.local}</p>
                                <p className="card-text">Data: {evento.data}</p>
                                <p className="card-text">Descrição: {evento.descricao}</p>
                                <button
                                    className={evento.inscrito ? "btn-inscrito" : "btn-inscrever"}
                                    onClick={() => handleInscricao(evento.id)}
                                >
                                    {evento.inscrito ? "Inscrito" : "Inscrever"}
                                </button>
                                {evento.id > eventos.length && (
                                    <button
                                        className="btn-excluir"
                                        onClick={() => handleExclusao(evento.id)}
                                    >
                                        Excluir
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Nenhum evento registrado.</p>
                )}
            </div>
        </div>
    );
};

export default Page;

