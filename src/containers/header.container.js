import React, { Component } from 'react';
import { Link } from "react-router-dom";
import api from '../services/api';
import PubSub from 'pubsub-js'

export default class HeaderContainer extends Component {
    submit(event) {
        event.preventDefault();
        api.search(this.searchText.value)
            .then(response => api.handleResponse(response, 'Erro na busca'))
            .then(result => PubSub.publish('timeline', result))
            .catch (err => console.log(err))
    }

    render() {
        return (
            <header className="header container">
                <h1 className="header-logo">
                    <Link to='/timeline'>Instalura</Link >
                </h1>

                <form className="header-busca" onSubmit={this.submit.bind(this)}>
                    <input type="text" name="search" placeholder="Pesquisa" className="header-busca-campo" ref={input => this.searchText = input} />
                    <input type="submit" value="Buscar" className="header-busca-submit" />
                </form>


                <nav>
                    <ul className="header-nav">
                        <li className="header-nav-item">
                            <a href="#">
                                ♡
                    {/*                 ♥ */}
                                {/* Quem deu like nas minhas fotos */}
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

