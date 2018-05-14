import React from 'react'

import logo from '../../assets/images/logo.svg'


// React component as a function, render header of the application
function Header() {
  return (
    <header className="header-container col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <img src={logo} className="header-logo" alt="logo" />
      <h1 className="header-title">
        Data project
      </h1>
    </header>
  )
}


export default Header
