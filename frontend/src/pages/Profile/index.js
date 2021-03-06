import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

export default function Profile() {
    const history = useHistory();
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
         }).then(response => {
            setIncidents(response.data);
         })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            /** filtrando os casos que nao sejam o id deletado pra refresh em tempo real */
            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch(err){
            alert('Erro ao deletar caso, tente novamente')
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem-vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={ 18 } color="#E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                { incidents.map( incident => (
                    <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>

                        <strong>Descricao:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor: </strong>
                        <p>
                            { Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value) }
                        </p>

                        /** criando arrow function onclick pra evitar que todos os casos sejam deletados
                        a arrow function faz o negocio esperar uma funcao, nao um retorno */

                        <button onClick={() => {handleDeleteIncident(incident.id)}} type="button">
                            <FiTrash2 size={ 20 } color="#A8A8B3" /> 
                        </button>

                    </li>
                    ))}

            </ul>
        </div>
    )
}