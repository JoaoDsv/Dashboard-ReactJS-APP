import React from 'react'
import PropTypes from 'prop-types'
import { BounceLoader } from 'react-spinners'

import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts'


// Pie chart component, showing ecredits' amounts
class ChartEcreditsAmount extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      legend: [
        { value: '< 10€', type: 'rect', color: '#EF5F48' },
        { value: '10 à 20€', type: 'rect', color: '#7F3326' },
        { value: '> 20€', type: 'rect', color: '#FFA626' },
      ],
    }
  }

  render() {
    return (
      <div className="chart-container pie-chart ecredits-amount-chart">
        <h3>E-credits utilisés en fonction du montant</h3>

        {this.props.loading ?
          <BounceLoader
            color={'#d3d3d3'}
            loading={this.props.loading}
          />
        :
          <PieChart
            width={310}
            height={280}
            margin={{ top: 30, right: 0, left: 0, bottom: 0 }}

          >
            <Legend
              payload={this.state.legend}
              verticalAlign="bottom"
              layout="horizontal"
              iconSize={22}
              align="center"
              wrapperStyle={{ bottom: -30 }}
            />
            <Tooltip
              wrapperStyle={{ backgroundColor: '#2e2e2e' }}
            />
            <Pie
              data={this.props.data}
              dataKey="betsCount"
              nameKey="betsAmount"
              innerRadius={65}
              outerRadius={85}
              label
            >
              <Cell fill="#FFA626" />
              <Cell fill="#7F3326" />
              <Cell fill="#FD9B8C" />
            </Pie>

          </PieChart>
        }
      </div>
    )
  }
}

ChartEcreditsAmount.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
}

ChartEcreditsAmount.defaultProps = {
  data: [],
  loading: true,
}

export default ChartEcreditsAmount
