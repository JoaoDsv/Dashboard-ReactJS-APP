import React from 'react'
import PropTypes from 'prop-types'

import PeriodPicker from '../periodPicker/PeriodPicker'
import ChartPlayersSegmentation from './ChartPlayersSegmentation'
import ChartPlayersExclusive from './ChartPlayersExclusive'
import ChartPlayersBet from './ChartPlayersBet'


// Component tab players, showing dataviz about players' behaviour
class TabPlayers extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
    }
  }

  componentDidMount() {
    // Fetch data only if it isn't in Redux store
    if (this.props.playersStore.segmentationData.length === 0 ||
        this.props.playersStore.betData.length === 0 ||
        this.props.playersStore.exclusiveData.length === 0) {
      this.fetchData()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.playersStore.period !== prevProps.playersStore.period) this.fetchData()
  }

  fetchData() {
    const { period } = this.props.playersStore

    this.props.getPlayersSegmentation(period)
    this.props.getPlayersBet(period)
    this.props.getPlayersExclusive(period)
  }

  render() {
    return (
      <div className="tab-container tab-players-container col-xs-9 col-sm-9 col-md-9 col-lg-9">
        <PeriodPicker
          tab="players"
          period={this.props.playersStore.period}
          periodChange={this.props.updatePlayersPeriod}
        />
        <div className="left-chart-group-container" >
          <ChartPlayersSegmentation
            loading={this.props.playersStore.segmentationLoading}
            data={this.props.playersStore.segmentationData}
          />
          <ChartPlayersExclusive
            loading={this.props.playersStore.exclusiveLoading}
            data={this.props.playersStore.exclusiveData}
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
            subtitle="dupliquants"
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
  getPlayersExclusive: PropTypes.func.isRequired,
  updatePlayersPeriod: PropTypes.func.isRequired,
}

export default TabPlayers
