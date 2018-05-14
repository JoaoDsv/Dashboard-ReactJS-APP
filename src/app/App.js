import React from 'react'

import SideMenu from './sideMenu/SideMenu'
import TabPlayersContainer from './players/containers/'


// Component as a function, render basics of the application
function App() {
  return (
    <div className="app-container col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <SideMenu />
      <TabPlayersContainer />
    </div>
  )
}

export default App
