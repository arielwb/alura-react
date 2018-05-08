import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import './css/reset.css';
import './css/timeline.css';
import './css/login.css';

import { TimelineContainer, LoginContainer } from './containers'
import api from './services/api';
import reducer from './reducers/index';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={LoginContainer} />
                        <Route path="/timeline/:user?" component={TimelineContainer} />
                        <Route path="/logout" component={Logout} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

class Logout extends Component {
    componentWillMount() {
        api.logout();
    }

    render() {
        return (<Redirect to="/" />);
    }
}