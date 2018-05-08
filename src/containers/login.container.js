import React, { Component } from 'react';
import api from '../services/api';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import Login from '../services/login'


class LoginContainer extends Component {

    componentWillReceiveProps(nextProps){
        if(!!nextProps.token){
            api.setToken(nextProps.token)
        }
    }

    login(event) {
        event.preventDefault();
        this.props.login(this.user.value, this.senha.value)
    }

    render() {
        if (this.props.token) {
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


const mapStateToProps = state => {
    return { token: state.loginReducer }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (user, pass) => {
            dispatch(Login.login(user, pass))
        }
    }
}


const LoginGlue = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
export default LoginGlue;