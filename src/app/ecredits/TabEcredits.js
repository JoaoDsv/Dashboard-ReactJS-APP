import React from 'react'
import PropTypes from 'prop-types'

import PeriodPicker from '../periodPicker/PeriodPicker'

import ChartEcreditsSpending from './ChartEcreditsSpending'
import ChartEcreditsGames from './ChartEcreditsGames'
import ChartEcreditsAmount from './ChartEcreditsAmount'
import ChartEcreditsSegmentation from './ChartEcreditsSegmentation'


// Component tab E-credits, showing dataviz about E-credits' spending
class TabEcredits extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
    }
  }

  componentDidMount() {
    // Fetch data only if it isn't in Redux store
    if (this.props.ecreditsStore.spendingData.length === 0 ||
        this.props.ecreditsStore.gamesData.length === 0 ||
        this.props.ecreditsStore.segmentationData.length === 0) {
      this.fetchData()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.ecreditsStore.period !== prevProps.ecreditsStore.period) this.fetchData()
  }

  fetchData() {
    const { period } = this.props.ecreditsStore

    this.props.getEcreditsSpending(period)
    this.props.getEcreditsGames(period)
    this.props.getEcreditsAmount(period)
    this.props.getEcreditsSegmentation(period)
  }

  render() {
    return (
      <div className="tab-container tab-ecredits-container col-xs-9 col-sm-9 col-md-9 col-lg-9">
        <PeriodPicker
          tab="ecredits"
          period={this.props.ecreditsStore.period}
          periodChange={this.props.updateEcreditsPeriod}
        />
        <div className="left-chart-group-container" >
          <ChartEcreditsSpending
            loading={this.props.ecreditsStore.spendingLoading}
            data={this.props.ecreditsStore.spendingData}
          />
          <ChartEcreditsGames
            loading={this.props.ecreditsStore.gamesLoading}
            data={this.props.ecreditsStore.gamesData}
          />
        </div>
        <div className="right-chart-group-container" >
          <ChartEcreditsAmount
            loading={this.props.ecreditsStore.amountLoading}
            data={this.props.ecreditsStore.amountData}
          />
          <ChartEcreditsSegmentation
            loading={this.props.ecreditsStore.segmentationLoading}
            data={this.props.ecreditsStore.segmentationData}
          />
        </div>
      </div>
    )
  }
}

TabEcredits.propTypes = {
  ecreditsStore: PropTypes.object.isRequired,
  getEcreditsSpending: PropTypes.func.isRequired,
  getEcreditsAmount: PropTypes.func.isRequired,
  getEcreditsGames: PropTypes.func.isRequired,
  getEcreditsSegmentation: PropTypes.func.isRequired,
  updateEcreditsPeriod: PropTypes.func.isRequired,
}

export default TabEcredits
