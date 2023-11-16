import { React, useState, useEffect } from "react";
import { buscarUsuarios } from '../api/api';
import Tabela from '../components/Tabela';

export default function Home() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            const usuarios = await buscarUsuarios();
            setUsuarios(usuarios);
        };

        fetchUsuarios();
    }, []);

    return (
        <Tabela rows={usuarios} />
    );
}
