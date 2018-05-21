import React from 'react'
import PropTypes from 'prop-types'


// Component
class ListProfil extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      search: '',
      colors: [
        '#f1c40f', // Yellow
        '#f39c12', // Orange
        '#c0392b', // Red
        '#2ecc71', // Green
        '#3498db', // Blue
        '#9b59b6', // Purple
      ],
    }

    // Binding to make `this` work in the callback
    // this.handleInputChange = this.handleInputChange.bind(this)
  }

  // Fetch data once the component is mounted
  componentDidMount() {
    this.fetchData()
  }

  // Recuperation of list of players profiles
  fetchData() {
    this.props.getListProfil()
  }

  // Display list of players profiles
  renderRows() {
    // Bind store
    const { profilStore } = this.props

    // If there is no profil, display this div
    if (profilStore.listProfil.length === 0 && !this.props.loading) {
      return (
        <div className="empty-list">
          {this.state.search ? `No profil matching with ${this.state.search}` : 'No profil'}
        </div>
      )
    }

    // Return this for each element of the list
    return profilStore.listProfil.map((profil) => {
      // Build const, replacing boolean by the associated litteral expression
      const sexe = profil.sexe === 0 ? 'Femme' : 'Homme'

      // Display this div for each element of the list
      return (
        <div key={profil.id} className="row-container col-xs-12 col-sm-12 col-md-12 col-lg-12">
          {profil.id} - {sexe} {profil.age} ans, {profil.departement}000, {profil.date_inscription}
          <div className="row-container__border" />
        </div>
      )
    })
  }

  // Display cards of players profiles
  renderCards() {
    // Bind store
    const { profilStore } = this.props

    // Display this div if there is no profile
    if (profilStore.listProfil.length === 0 && !this.props.loading) {
      return (
        <div className="empty-list">
          {this.state.search ? `No profil matching with ${this.state.search}` : 'No profil'}
        </div>
      )
    }

    // Return this for each element of the list
    return profilStore.listProfil.map((profil) => {
      // Init constants for randomize
      const randomNumber = Math.floor(Math.random() * 6)
      const randomColor = this.state.colors[randomNumber]

      // Init constants for styles
      const borderStyle = { border: `2px solid ${randomColor}` }
      const backgroundStyle = { backgroundColor: randomColor }

      // Display this div for each element of the list
      return (
        <div
          key={profil.id}
          className="card-container col-xs-12 col-sm-6 col-md-4 col-lg-3"
          style={borderStyle}
        >
          <div className="card-title" style={backgroundStyle}>
            Profile
          </div>
          <div className="card-content">
            <div className="card-subtitle">
              {profil.id}
            </div>
            <div className="card-text">
              {profil.sexe === 0 ? 'Femme' : 'Homme'} {profil.age} ans,
              <br />
              Département : {profil.departement}
            </div>
            <div className="card-date">
              Inscription : {profil.date_inscription}
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="wrapper-container col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h2>Profiles list {!!this.state.search && `${this.state.search}`}</h2>
        <div className="list-container">
          {this.renderRows()}
        </div>
        <h2>Profiles cards {!!this.state.search && `${this.state.search}`}</h2>
        <div className="cards-container">
          {this.renderCards()}
        </div>
      </div>
    )
  }
}

ListProfil.propTypes = {
  loading: PropTypes.bool.isRequired,
  profilStore: PropTypes.object.isRequired,
  getListProfil: PropTypes.func.isRequired,
}

ListProfil.defaultProps = {
  loading: false,
}

export default ListProfil
