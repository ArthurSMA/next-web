import { FormControl, Input, InputAdornment, InputLabel, Link, OutlinedInput } from '@mui/material';
import { criarUsuario } from '../api/api';
import React, { useState, useEffect } from 'react';
import { ArrowLeft } from '@mui/icons-material';

export default function Cadastrar() {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const usuario = await criarUsuario(id, nome);
        window.location.reload();
    };

    return (
        <>
            <Link href="/"><ArrowLeft /></Link>
            <form onSubmit={handleSubmit}>
                <div>
                    Id:
                    <Input
                        type="text"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                </div>
                <div>
                    Nome:
                    <Input type="text"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <Input type="submit" value="Cadastrar" />
                </div>
            </form>

        </>
    );
}
