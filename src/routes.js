import { Switch, Route } from 'react-router-dom'
import React from 'react'

import TabPlayersContainer from './app/players/containers'
import TabEcreditsContainer from './app/ecredits/containers'
import NotFound from './app/notFound/NotFound'


// Component as a function, with every route defined one by one
function Routes() {
  return (
    <Switch>
      <Route path="/preview" component={TabPlayersContainer} />
      <Route path="/players" component={TabPlayersContainer} />
      <Route path="/ecredits" component={TabEcreditsContainer} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes
