import React from 'react'
import PropTypes from 'prop-types'

import ChartEcreditsSpending from './ChartEcreditsSpending'
import ChartEcreditsAmount from './ChartEcreditsAmount'


// Component tab players, showing dataviz about players' behaviour
class TabEcredits extends React.Component {
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
    this.props.getEcreditsSpending(this.state.week)
    this.props.getEcreditsAmount(this.state.week)
  }

  render() {
    return (
      <div className="tab-container tab-ecredits-container col-xs-9 col-sm-9 col-md-9 col-lg-9">
        <div className="left-chart-group-container" >
          <ChartEcreditsSpending
            loading={this.props.ecreditsStore.spendingLoading}
            data={this.props.ecreditsStore.spendingData}
          />
          <ChartEcreditsSpending
            loading={this.props.ecreditsStore.spendingLoading}
            data={this.props.ecreditsStore.spendingData}
          />
        </div>
        <div className="right-chart-group-container" >
          <ChartEcreditsAmount
            loading={this.props.ecreditsStore.amountLoading}
            data={this.props.ecreditsStore.amountData[0]}
          />
          <ChartEcreditsAmount
            loading={this.props.ecreditsStore.amountLoading}
            data={this.props.ecreditsStore.amountData[0]}
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
}

export default TabEcredits
