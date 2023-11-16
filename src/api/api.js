import axios from 'axios';

export const buscarUsuarios = async () => {
    const res = await axios.get('https://node-api-swart.vercel.app/api/usuarios/');
    return res.data;
};

export const criarUsuario = async (id, nome) => {
    const res = await axios.post('https://node-api-swart.vercel.app/api/usuarios/', { id: id, nome: nome });
    return res.data;
};

export const deletarUsuario = async (id) => {
    const res = await axios.delete(`https://node-api-swart.vercel.app/api/usuarios/${id}`);
    return res.data;
};
