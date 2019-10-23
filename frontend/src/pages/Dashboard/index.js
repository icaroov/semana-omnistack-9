import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Dashboard() {
    //armazenar a listagem dos spots num estado
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        //carregar os spots
        async function loadSpots(){
            //id do usuário logado, 
            //para retornar os spots daquele usuário
            const user_id = localStorage.getItem('user');
            //rota
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });

            setSpots(response.data);
        }
        loadSpots();

    }, []);

    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
                    </li>
                ))}
            </ul>

            <Link to='/new'>
                <button className="btn">Cadastrar novo spot</button>
            </Link>
        </>
    )
}