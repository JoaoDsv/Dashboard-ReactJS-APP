import { Switch, Route } from 'react-router-dom'
import React from 'react'

import ListProfilContainer from './app/profil/containers'
import TabPlayersContainer from './app/players/containers'
import NotFound from './app/notFound/NotFound'


// Component as a function, with every route defined one by one
function Routes() {
  return (
    <Switch>
      <Route path="/profils" component={ListProfilContainer} />
      <Route path="/players" component={TabPlayersContainer} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes
