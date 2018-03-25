import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'

import App from './app/App'
import ListProfilContainer from './app/profil/containers/ListProfilContainer'
import NotFound from './app/notFound/NotFound'


// Component as a fucntion, with every route defined one by one
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/profils" component={ListProfilContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
