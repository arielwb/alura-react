import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";

import './css/reset.css';
import './css/timeline.css';
import './css/login.css';

import { HeaderComponent } from './components'
import { TimelineContainer, LoginContainer } from './containers'


class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LoginContainer} />
                    <Route path="/timeline" component={Timeline} />
                </div>
            </Router>
        );
    }
}

export default App;


const Timeline = () => (
    <div id="root">
        <div className="main">
            <HeaderComponent />
            <TimelineContainer />
        </div>
    </div>
)

