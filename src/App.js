import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import './css/pure-min.css';
import './css/side-menu.css';

import api from './services/api';
import { AuthorContainer, MenuContainer, BooksContainer } from './containers';




class App extends Component {

  render() {
    return (
      <Router>
        <div id="layout">
          <MenuContainer />
          <div id="main">
            <Route exact path="/" component={Home} />
            <Route path="/authors" component={AuthorContainer} />
            <Route path="/books" component={BooksContainer} />

          </div>

        </div>
      </Router>


    );
  }
}
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default App;
