import React from 'react'
import PropTypes from 'prop-types'

import ChartPlayersSegmentation from './ChartPlayersSegmentation'
import ChartPlayersBet from './ChartPlayersBet'


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
      <div className="tab-container col-xs-9 col-sm-9 col-md-9 col-lg-9">
        <div className="left-chart-group-container" >
          <ChartPlayersSegmentation
            loading={this.props.playersStore.segmentationLoading}
            data={this.props.playersStore.segmentationData}
          />
          <ChartPlayersSegmentation
            loading={this.props.playersStore.segmentationLoading}
            data={this.props.playersStore.segmentationData}
          />
        </div>
        <div className="right-chart-group-container" >
          <ChartPlayersBet
            showTitle
            loading={this.props.playersStore.segmentationLoading}
            data={this.props.playersStore.segmentationData}
            subtitle="exclusifs"
          />
          <ChartPlayersBet
            showTitle={false}
            loading={this.props.playersStore.segmentationLoading}
            data={this.props.playersStore.segmentationData}
            subtitle="mixtes"
          />
          <ChartPlayersBet
            showTitle={false}
            loading={this.props.playersStore.segmentationLoading}
            data={this.props.playersStore.segmentationData}
            subtitle="duplicants"
          />
        </div>
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
