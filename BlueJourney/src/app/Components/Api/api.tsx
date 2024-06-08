'use client';
import React, { useEffect, useState } from 'react';

interface Usuario {
    name: string;
    email: string;
    cpf: string;
    cargo: string;
    phone: number;
    password: string;
}

const API_URL = 'http://localhost:8080/Salesforce/rest/user';

const fetchData = async (endpoint: string): Promise<Usuario[] | null> => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`);
        if (!response.ok) {
            throw new Error('Falha ao buscar dados');
        }
        const data: Usuario[] = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar dados: ', error);
        return null;
    }
};

export default function ListaDeUsuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[] | null>(null);

    useEffect(() => {
        const carregarUsuarios = async () => {
            const data = await fetchData('all');
            setUsuarios(data);
        };

        carregarUsuarios();
    }, []);

    return (
        <div>
            <h1>Lista de Usuários</h1>
            {usuarios ? (
                <ul>
                    {usuarios.map((usuario, index) => (
                        <li key={index}>
                            <p>Nome: {usuario.name}</p>
                            <p>Email: {usuario.email}</p>
                            <p>CPF: {usuario.cpf}</p>
                            <p>Cargo: {usuario.cargo}</p>
                            <p>Telefone: {usuario.phone}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}
