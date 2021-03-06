import React, { Component } from 'react';
import PubSub from 'pubsub-js';

import { InputComponent, TableComponent } from '../components';
import { Author } from '../models';
import api from '../services/api';
import { ErrorHelper } from '../helpers';

export default class AuthorContainer extends Component {

    constructor() {
        super();
        this.state = {
            nome: "",
            email: "",
            senha: "",
            authors: []
        }

        this.formSet = this.formSet.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentDidMount() {
        PubSub.subscribe('updateAuthors', (topic, authors) => {
            this.setState({ authors: authors })
        })

        api.getAuthors()
            .then((authors) => this.updateAuthorsState(authors))
            .catch(error => console.log(error));
    }

    onFormSubmit(event) {
        event.preventDefault();
        ErrorHelper.clear();
        api.setAuthor(
            {
                nome: this.state.nome,
                email: this.state.email,
                senha: this.state.senha
            })
            .then((response) => {
                
                if (response.errors) {
                    ErrorHelper.handle(response.errors);
                }
                else{
                    this.updateAuthorsState(response)
                }
            })
            .catch(response => {
                console.log(response)
                ErrorHelper.handle(response.errors);
            })
    }

    updateAuthorsState(rawAuthors) {
        if (!rawAuthors) return false;

        let authors = rawAuthors.map((author) => new Author(author)).reverse().slice(0, 5);
        PubSub.publish('updateAuthors', authors)
    }

    formSet(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        let values = this.state.authors;
        let headers = ['Nome', 'Email', 'id'];
        return (
            <div className="content" id="content">
                <div className="header">
                    <h1>Cadastro de Autores</h1>
                </div>
                <div className="pure-form pure-form-aligned">
                    <form className="pure-form pure-form-aligned" onSubmit={this.onFormSubmit}>
                        <InputComponent label="Nome" id="nome" type="text" onChange={this.formSet} />
                        <InputComponent label="E-mail" id="email" type="email" onChange={this.formSet} />
                        <InputComponent label="Senha" id="senha" type="password" onChange={this.formSet} />
                        <div className="pure-control-group">
                            <label></label>
                            <button type="submit" className="pure-button pure-button-primary">Gravar</button>
                        </div>
                    </form>
                </div>
                <div>
                    <TableComponent values={values} headers={headers} />
                </div>
            </div>
        );
    }
}

