import React, { Component } from 'react';
import api from '../services/api';

export default class LoginContainer extends Component {

    login(event) {
        event.preventDefault();
        api.login(this.user.value, this.senha.value)
            .then(response => {
                if(response.ok){
                    response.text()
                    .then(json => console.log(json))
                }
                else{
                    console.log('erro')
                }
            })
    }

    render() {
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