import React, { Component } from 'react'
import logo from '../../assets/images/logo.svg';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            {!!this.props.title ? this.props.title : 'Welcome to React'}
          </h1>
        </header>
      </div>
    );
  }
}

export default Header
