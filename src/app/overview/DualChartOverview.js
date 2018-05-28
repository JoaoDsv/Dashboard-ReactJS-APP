import React from 'react'
import PropTypes from 'prop-types'
import { BounceLoader } from 'react-spinners'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'


// Bar chart component, showing ecredits spent and not-spent
class DualChartOverview extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
    }
  }

  render() {
    return (
      <div className="overview-charts-containers">
        <div className="chart-container line-chart first-sync-chart">
          <h3>Nombre de joueurs</h3>

          {this.props.loading ?
            <BounceLoader
              color="#d3d3d3"
              loading={this.props.loading}
            />
          :
            <LineChart
              width={900}
              height={270}
              data={this.props.data}
              syncId="syncOverview"
              margin={{ top: 40, right: 20, left: 20, bottom: 10 }}
            >
              <CartesianGrid horizontal vertical={false} strokeDasharray="2 2" />
              <XAxis
                dataKey="week"
                tickLine={false}
                tick={false}
              />
              <YAxis />
              <Tooltip
                wrapperStyle={{ backgroundColor: '#2e2e2e' }}
              />
              <Line dataKey="exclusifPlayers" type="monotone" stroke="#F88686" fill="#F88686" />
              <Line dataKey="mixtePlayers" type="monotone" stroke="#69EEFF" fill="#69EEFF" />
              <Line dataKey="dupliquantPlayers" type="monotone" stroke="#FFF369" fill="#FFF369" />
            </LineChart>
          }
        </div>

        <div className="chart-container line-chart second-sync-chart">
          <h3>E-crédits utilisés</h3>

          {this.props.loading ?
            <BounceLoader
              color="#d3d3d3"
              loading={this.props.loading}
            />
          :
            <LineChart
              width={900}
              height={270}
              data={this.props.data}
              syncId="syncOverview"
              margin={{ top: 40, right: 20, left: 20, bottom: 10 }}
            >
              <CartesianGrid horizontal vertical={false} strokeDasharray="2 2" />
              <XAxis
                dataKey="week"
                tickLine={false}
                tick={false}
              />
              <YAxis />
              <Tooltip
                wrapperStyle={{ backgroundColor: '#2e2e2e' }}
              />

              <Line dataKey="exclusifEcredits" type="monotone" stroke="#F88686" fill="#F88686" />
              <Line dataKey="mixteEcredits" type="monotone" stroke="#69EEFF" fill="#69EEFF" />
              <Line dataKey="dupliquantEcredits" type="monotone" stroke="#FFF369" fill="#FFF369" />
            </LineChart>
          }
        </div>
      </div>
    )
  }
}

DualChartOverview.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
}

DualChartOverview.defaultProps = {
  data: [],
  loading: true,
}

export default DualChartOverview
