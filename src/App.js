import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, } from "react-router-dom";

import './css/reset.css';
import './css/timeline.css';

import { HeaderComponent } from './components'
import { TimelineContainer } from './containers'


class App extends Component {

    render() {
        return (
            <div id="root">
                <div className="main">
                    <HeaderComponent />
                    <TimelineContainer />
                </div>
            </div>
        );
    }
}

export default App;