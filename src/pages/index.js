import React, { useState, useEffect } from "react";
import TabelaUsuario from "../components/TabelaUsuario";

const URL_API = "https://node-api-swart.vercel.app/api/usuarios/"

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    const fetchAllData = async () => {
        try {
            setLoading(true);
            const response = await fetch(URL_API);
            const data = await response.json();

            if (!data) {
                throw "Problema na requisição";
            }

            setData(data);
        } catch (error) {
            console.log(`O erro é: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    return (
        <>
            <TabelaUsuario />
            <div>
                {loading && !data && <p>Carregando informações...</p>}
                {data &&
                    data.map((item) => (
                        <p key={item.id}>{item.nome}</p>
                    ))}
            </div>
        </>
    );
}