import React from 'react'

import logo from '../../assets/images/logo.svg'


// React component as a function, render header of the application
function Header() {
  return (
    <div className="header-container">
      <header className="app-header">
        <img src={logo} className="app-header__logo" alt="logo" />
        <h1 className="app-header__title">
          Data project
        </h1>
      </header>
    </div>
  )
}


export default Header
