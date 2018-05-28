import React from 'react'
import PropTypes from 'prop-types'

import DualChartOverview from './DualChartOverview'


// Component tab overview, showing large-time dataviz about players and E-credits
class TabOverview extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      period: '2017-01-19T23:00:00.000Z',
    }
  }

  componentDidMount() {
    // Fetch data only if it isn't in Redux store
    if (this.props.overviewStore.overviewData.length === 0) this.fetchData()
  }

  fetchData() {
    this.props.getOverview(this.state.period)
  }

  render() {
    return (
      <div className="tab-container tab-players-container col-xs-9 col-sm-9 col-md-9 col-lg-9">
        <DualChartOverview
          loading={this.props.overviewStore.overviewLoading}
          data={this.props.overviewStore.overviewData}
        />
      </div>
    )
  }
}

TabOverview.propTypes = {
  overviewStore: PropTypes.object.isRequired,
  getOverview: PropTypes.func.isRequired,
}

export default TabOverview
