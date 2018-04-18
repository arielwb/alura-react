import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/pure-min.css';
import './css/side-menu.css';

import api from './services/api';
import AuthorContainer from './containers/author.container';



class App extends Component {
  
  render() {
    return (
      <Router>
        <div id="layout">
          <a href="#menu" id="menuLink" className="menu-link">

            <span></span>
          </a>
          <div id="menu">
            <div className="pure-menu">
              <a className="pure-menu-heading" href="#">Company</a>

              <ul className="pure-menu-list">
                <li className="pure-menu-item"><Link  to="/" className="pure-menu-link">Home</Link></li>
                <li className="pure-menu-item"><Link  to="/authors" className="pure-menu-link">Authors</Link></li>
                <li className="pure-menu-item"><Link  to="/books" className="pure-menu-link">Books</Link></li>
              </ul>
            </div>
          </div>
          <div id="main">
            
            <Route exact path="/" component={Home} />
            <Route path="/authors" component={AuthorContainer} />
            <Route path="/books" component={Books} />
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
const Books = () => (
  <div>
    <h2>Books</h2>
  </div>
);

export default App;
