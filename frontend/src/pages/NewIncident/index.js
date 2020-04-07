import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'; 
import '../../global.css'
import logoImg from '../../assets/logo.svg';

export default function NewIncident () {
    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                 <img src={ logoImg } alt="Be The Hero" />

                 <h1>Cadastrar novo caso</h1>
                 <p>Descreva detalhadamente o caso para o heroi resolver isso.</p>
                 <Link className="back-link" to="/profile">
                     <FiArrowLeft size={ 16 } color="#E02041"/>
                     Voltar ao perfil
                 </Link>
            </section>

            <form>
                <input placeholder="Titulo do caso" />
                <textarea placeholder="Descricao" />
                <input placeholder="Valor em reais" />

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}