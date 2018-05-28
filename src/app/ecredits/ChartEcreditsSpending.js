import React from 'react'
import PropTypes from 'prop-types'
import { BounceLoader } from 'react-spinners'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


// Bar chart component, showing ecredits spent and not-spent
class ChartEcreditsSpending extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      legend: [
        { value: 'Ce trimestre', type: 'rect', color: '#EF5F48', id: 'currentPeriod' },
        { value: 'Le trimestre dernier', type: 'rect', color: '#E49628', id: 'previousPeriod' },
      ],
    }
  }

  render() {
    return (
      <div className="chart-container bar-chart ecredits-spending-chart">
        <h3>E-credits utilisés et non-utilisés</h3>

        {this.props.loading ?
          <BounceLoader
            color="#d3d3d3"
            loading={this.props.loading}
          />
        :
          <BarChart
            width={570}
            height={350}
            data={this.props.data}
            margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
          >
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              payload={this.state.legend}
              wrapperStyle={{ right: -20 }}
              iconSize={24}
            />
            <CartesianGrid horizontal vertical={false} strokeDasharray="2 2" />
            <XAxis dataKey="specific" tickLine={false} tick={{ fill: '#FFFFFF' }} />
            <YAxis />
            <Tooltip
              wrapperStyle={{ backgroundColor: '#2e2e2e' }}
            />

            <Bar dataKey="preEcreditsUtilises" stackId="previousPeriod" fill="#E49628" barSize={30} />
            <Bar dataKey="preEcreditsNonUtilises" stackId="previousPeriod" fill="#FFC169" barSize={30} />

            <Bar dataKey="ecreditsUtilises" stackId="currentPeriod" fill="#EF5F48" barSize={90} />
            <Bar dataKey="ecreditsNonUtilises" stackId="currentPeriod" fill="#FD8470" barSize={90} />

          </BarChart>
        }
      </div>
    )
  }
}

ChartEcreditsSpending.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
}

ChartEcreditsSpending.defaultProps = {
  data: [],
  loading: true,
}

export default ChartEcreditsSpending
