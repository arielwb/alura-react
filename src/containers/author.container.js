import React, { Component } from 'react';
import { InputComponent, TableComponent } from '../components';
import { Author, Livro } from '../models';
import api from '../services/api';

export default class AuthorContainer extends Component {

    constructor() {
        super();
        this.state = {
            nome: "teste",
            email: "teste@test",
            senha: 123,
            authors: []
        }

        this.formSet = this.formSet.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentDidMount() {
        api.getAuthors()
            .then((authors) => this.setState({ authors: authors.map((author) => new Author(author)) }));
    }

    onFormSubmit(event) {
        event.preventDefault();
        api.setAuthors(
            {
                nome: this.state.nome,
                email: this.state.email,
                senha: this.state.senha
            })
            .then(authors => this.setState({ authors: authors.map((author) => new Author(author)) }))
            .catch(error => console.log(error))
        console.log(event)
    }

    formSet(event, key) {
        let obj = Object.defineProperty({}, key, { value: event.target.value });
        this.setState(obj);
    }

    render() {
        return (
            <div className="content" id="content">
                <div className="pure-form pure-form-aligned">
                    <form className="pure-form pure-form-aligned" onSubmit={this.onFormSubmit}>
                        <InputComponent label="Nome" id="nome" type="text" onchange={(event) => this.formSet(event, 'nome')} />
                        <InputComponent label="E-mail" id="email" type="email" onchange={(event) => this.formSet(event, 'email')} />
                        <InputComponent label="Senha" id="senha" type="password" onchange={(event) => this.formSet(event, 'senha')} />
                        <div className="pure-control-group">
                            <label></label>
                            <button type="submit" className="pure-button pure-button-primary">Gravar</button>
                        </div>
                    </form>

                </div>
                <TableComponent values={this.state.authors} headers={['Nome', 'Email']} />
            </div>
        );
    }
}

