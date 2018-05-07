import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import './css/reset.css';
import './css/timeline.css';
import './css/login.css';

import { TimelineContainer, LoginContainer } from './containers'
import api from './services/api';
import { Timeline } from './stores';

const store = new Timeline();

class App extends Component {

    render() {

        return (
            <Router>
                <div>
                    <Route exact path="/" component={LoginContainer} />
                    <Route path="/timeline/:user?" render={props => (
                        <TimelineContainer  {...props} store={store} />
                    )} />
                    <Route path="/logout" component={Logout} />
                </div>
            </Router>
        );
    }
}

export default App;


class Logout extends Component {
    componentWillMount() {
        api.logout();
    }

    render() {
        return (<Redirect to="/" />);
    }
}