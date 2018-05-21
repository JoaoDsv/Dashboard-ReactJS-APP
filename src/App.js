import { BrowserRouter } from 'react-router-dom'
import React from 'react'

import Routes from './routes'
import SideMenu from './app/sideMenu/SideMenu'


// Component as a function, render nav-menu & tab contents
function App() {
  // Always render nav-menu, but render tab-content depending on URL
  return (
    <BrowserRouter>
      <div className="app-container col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <SideMenu />
        <Routes />
      </div>
    </BrowserRouter>
  )
}

export default App
