import React from 'react'

import Header from './header/Header'
import Footer from './footer/Footer'
import TabPlayersContainer from './players/containers/'


// Component as a function, render basics of the application
function App() {
  return (
    <div className="app col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <Header />
      <TabPlayersContainer />
      <Footer />
    </div>
  )
}

export default App
