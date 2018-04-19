import React, { Component } from 'react';
import PubSub from 'pubsub-js';

import { InputComponent, TableComponent } from '../components';
import { Book } from '../models';
import api from '../services/api';
import { ErrorHelper } from '../helpers';

export default class BooksContainer extends Component {

    constructor() {
        super();
        this.state = {
            preco: 0,
            titulo: '',
            autorId: 0,
            books: []
        }

        this.formSet = this.formSet.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentDidMount() {
        PubSub.subscribe('updateBooks', (topic, books) => {
            this.setState({ books: books })
        })

        api.getBooks()
            .then((books) => this.updateBooksState(books))
            .catch(error => console.log(error));
    }

    onFormSubmit(event) {
        event.preventDefault();
        ErrorHelper.clear();
        api.setBook(
            {
                titulo: this.state.titulo,
                preco: this.state.preco,
                autorId: this.state.autorId
            })
            .then((response) => {
                console.log(response)

                if (response.errors) {
                    ErrorHelper.handle(response.errors);
                }
                else {
                    this.updateBooksState(response)
                }
            })
            .catch(response => {
                console.log('catch', response)
            })
    }

    updateBooksState(rawBooks) {
        if (!rawBooks) return false;

        let books = rawBooks.map((book) => new Book(book)).reverse().slice(0, 5);
        console.log(books)
        PubSub.publish('updateBooks', books)
    }

    formSet(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        let values = this.state.books.map(book => {
            let newbook = Object.assign({}, book);
            newbook.autor = book.autor.nome;
            return newbook;
        });
        console.log(values)
        let headers = ['Titulo', 'Preco', 'id', 'Autor'];
        return (
            <div className="content" id="content">
                <div className="header">
                    <h1>Cadastro de Livros</h1>
                </div>
                <div className="pure-form pure-form-aligned">
                    <form className="pure-form pure-form-aligned" onSubmit={this.onFormSubmit}>
                        <InputComponent label="Titulo" id="titulo" type="text" onChange={this.formSet} />
                        <InputComponent label="Preco" id="preco" type="number" onChange={this.formSet} />
                        <InputComponent label="Autor" id="autorId" type="number" onChange={this.formSet} />
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

