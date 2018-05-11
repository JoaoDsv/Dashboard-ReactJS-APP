import React from 'react'
import PropTypes from 'prop-types'

import ChartPlayersSegmentation from './ChartPlayersSegmentation'


// Component
class TabPlayers extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
    }

    // Binding to make `this` work in the callback
    // this.handleInputChange = this.handleInputChange.bind(this)
  }

  // Fetch data once the component is mounted
  componentDidMount() {
    this.props.getPlayersSegmentation()
  }

  render() {
    return (
      <div className="tab-container col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h2>Tab players</h2>
        <ChartPlayersSegmentation
          loading={this.props.playersStore.segmentationLoading}
          data={this.props.playersStore.segmentationData}
        />
      </div>
    )
  }
}

TabPlayers.propTypes = {
  playersStore: PropTypes.object.isRequired,
  getPlayersSegmentation: PropTypes.func.isRequired,
}

TabPlayers.defaultProps = {
}

export default TabPlayers
