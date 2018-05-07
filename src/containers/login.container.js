import React, { Component } from 'react';
import api from '../services/api';
import { Redirect } from "react-router-dom";


export default class LoginContainer extends Component {

    constructor() {
        super();
        this.state = {
            msg: '',
            logged: false
        }
    }

    login(event) {
        event.preventDefault();
        api.login(this.user.value, this.senha.value)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                else {
                    throw new Error('Não foi possível efetuar login');
                }
            })
            .then(json => {
                api.setToken(json);
                this.setState({ logged: true });
            })
            .catch(err => this.setState({ msg: err.message }))
    }

    render() {
        if (this.state.logged) {
            return (<Redirect to='/timeline' />);
        }
        return (
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <form onSubmit={this.login.bind(this)}>
                    <input type="text" ref={input => this.user = input} />
                    <input type="password" ref={input => this.senha = input} />
                    <input type="submit" value="login" />
                </form>
            </div>
        );
    }
}