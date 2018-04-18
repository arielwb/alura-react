import React, { Component } from 'react';
import { InputComponent, TableComponent } from '../components';
import { Author, Livro } from '../models';
import api from '../services/api';

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
        api.getAuthors()
            .then((authors) => this.updateAuthorsState(authors))
            .catch(error => console.log(error));
    }

    onFormSubmit(event) {
        event.preventDefault();
        api.setAuthors(
            {
                nome: this.state.nome,
                email: this.state.email,
                senha: this.state.senha
            })
            .then(authors => this.updateAuthorsState(authors))
            .catch(error => console.log(error))
    }

    updateAuthorsState(rawAuthors) {
        this.setState({ authors: rawAuthors.map((author) => new Author(author)).reverse() })
    }

    formSet(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        let values = this.state.authors.slice(0, 5);
        let headers = ['Nome', 'Email', 'id']
        return (
            <div className="content" id="content">
                <div className="pure-form pure-form-aligned">
                    <form className="pure-form pure-form-aligned" onSubmit={this.onFormSubmit}>
                        <InputComponent label="Nome" id="nome" type="text" onchange={this.formSet} />
                        <InputComponent label="E-mail" id="email" type="email" onchange={this.formSet} />
                        <InputComponent label="Senha" id="senha" type="password" onchange={this.formSet} />
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

