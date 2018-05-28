import { Switch, Route } from 'react-router-dom'
import React from 'react'

import TabOverviewContainer from './app/overview/containers'
import TabPlayersContainer from './app/players/containers'
import TabEcreditsContainer from './app/ecredits/containers'
import NotFound from './app/notFound/NotFound'


// Component as a function, with every route defined one by one
function Routes() {
  return (
    <Switch>
      <Route path="/overview" component={TabOverviewContainer} />
      <Route path="/players" component={TabPlayersContainer} />
      <Route path="/ecredits" component={TabEcreditsContainer} />
      <Route path="/settings" component={TabOverviewContainer} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes
