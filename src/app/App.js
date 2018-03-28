import React from 'react'

import '../assets/css/components/app.css'
import Header from './header/Header'
import Footer from './footer/Footer'
import ListProfilContainer from './profil/containers/ListProfilContainer'


// Component as a function, render basics of the application
function App() {
  return (
    <div className="app col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <Header />
      <ListProfilContainer />
      <Footer />
    </div>
  )
}

export default App
