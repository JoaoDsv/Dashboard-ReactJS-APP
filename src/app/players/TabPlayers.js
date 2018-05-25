import React from 'react'
import PropTypes from 'prop-types'

import ChartPlayersSegmentation from './ChartPlayersSegmentation'
import ChartPlayersBet from './ChartPlayersBet'


// Component tab players, showing dataviz about players' behaviour
class TabPlayers extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      // Last week with FDJ data, instead of current week
      week: '2017-11-19T23:00:00.000Z',
    }

    // Binding to make `this` work in the callback
    // this.handleInputChange = this.handleInputChange.bind(this)
  }

  // Fetch data once the component is mounted
  componentDidMount() {
    this.props.getPlayersSegmentation(this.state.week)
    this.props.getPlayersBet(this.state.week)
  }

  render() {
    return (
      <div className="tab-container tab-players-container col-xs-9 col-sm-9 col-md-9 col-lg-9">
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
            data={this.props.playersStore.betData[0]}
            subtitle="exclusifs"
          />
          <ChartPlayersBet
            showTitle={false}
            loading={this.props.playersStore.segmentationLoading}
            data={this.props.playersStore.betData[1]}
            subtitle="mixtes"
          />
          <ChartPlayersBet
            showTitle={false}
            loading={this.props.playersStore.segmentationLoading}
            data={this.props.playersStore.betData[2]}
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
  getPlayersBet: PropTypes.func.isRequired,
}

export default TabPlayers
