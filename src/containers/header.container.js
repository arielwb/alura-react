import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import Timeline from '../services/timeline';

 class HeaderContainer extends Component {


    submit(event) {
        event.preventDefault();
        this.props.search(this.searchText.value);
    }

    render() {
        return (
            <header className="header container">
                <h1 className="header-logo">
                    <Link to='/timeline'>Instalura</Link >
                </h1>

                <form className="header-busca" onSubmit={this.submit.bind(this)}>
                    <input type="text" name="search" placeholder="Pesquisa" className="header-busca-campo" ref={input => this.searchText = input} />
                    <input type="submit" value="Buscar" className="header-busca-submit" />
                </form>
                <span>{this.props.msg}</span>
                <nav>
                    <ul className="header-nav">
                        <li className="header-nav-item">
                            <a>♡</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}


const mapStateToProps = state => {
    return  { msg: state.notificationReducer }
 }
 
 const mapDispatchToProps = dispatch => {
     return {
         search: (text) => {
             dispatch(Timeline.search(text));
         }
     }
 }
 
  
const HeaderGlue = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
export default HeaderGlue;