import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';

import api from './services/api';
import AuthorContainer from './containers/author.container';



class App extends Component {
  constructor() {
    super();
    this.state = {
      authors: [],
      books: []
    }
  }

  render() {
    return (
      <div>
        <div id="layout">
          <a href="#menu" id="menuLink" className="menu-link">

            <span></span>
          </a>
          <div id="menu">
            <div className="pure-menu">
              <a className="pure-menu-heading" href="#">Company</a>

              <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Authors</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Books</a></li>
              </ul>
            </div>
          </div>
          <div id="main">
            <div className="header">
              <h1>Cadastro de Autores</h1>
            </div>
            <div className="content" id="content">
            <AuthorContainer/>
              <div>
                <table className="pure-table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.authors.reverse().map((author, key) => {
                        return (
                          <tr key={key}>
                            <td>{author.nome}</td>
                            <td>{author.email}</td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>


    );
  }
}

export default App;
