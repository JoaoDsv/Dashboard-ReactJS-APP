import React from 'react'

import logo from '../../assets/svg/logo.svg'


// React component as a function, render header of the application
function Header() {
  return (
    <div className="header">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">
          Data project
        </h1>
      </header>
    </div>
  )
}


export default Header
