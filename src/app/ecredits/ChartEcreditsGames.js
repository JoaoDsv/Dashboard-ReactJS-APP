import React from 'react'
import PropTypes from 'prop-types'
import { BounceLoader } from 'react-spinners'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


// Bar chart component, showing ecredits spent and not-spent
class ChartEcreditsGames extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      legend: [
        { value: 'Spécifiques', type: 'rect', color: '#E49628', id: 'currentWeek' },
        { value: 'Non-spécifiques', type: 'rect', color: '#EF5F48', id: 'previousWeek' },
      ],
    }
  }

  render() {
    return (
      <div className="chart-container bar-chart ecredits-spending-chart">
        <h3>E-credits utilisés par catégorie de jeux</h3>

        {this.props.loading ?
          <BounceLoader
            color="#d3d3d3"
            loading={this.props.loading}
          />
        :
          <BarChart
            width={580}
            height={300}
            layout="vertical"
            data={this.props.data}
            margin={{ top: 20, right: 0, left: 80, bottom: 5 }}
          >
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              payload={this.state.legend}
              wrapperStyle={{ right: -20 }}
              iconSize={24}
            />
            <CartesianGrid horizontal={false} vertical={false} />
            <YAxis dataKey="game" type="category" axisLine={false} tickLine={false} tick={{ fill: '#FFFFFF' }} />
            <XAxis type="number" hide />

            <Tooltip
              wrapperStyle={{ backgroundColor: '#2e2e2e' }}
            />

            <Bar dataKey="specifique" stackId="currentWeek" fill="#EF5F48" barSize={20} />
            <Bar dataKey="nonSpecifique" stackId="currentWeek" fill="#E49628" barSize={20} />
          </BarChart>
        }
      </div>
    )
  }
}

ChartEcreditsGames.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
}

ChartEcreditsGames.defaultProps = {
  data: [],
  loading: true,
}

export default ChartEcreditsGames
