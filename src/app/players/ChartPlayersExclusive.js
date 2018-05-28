import React from 'react'
import PropTypes from 'prop-types'
import { BounceLoader } from 'react-spinners'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


// Bar chart component, showing payers' segmentations
class ChartPlayersExclusive extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      legend: [
        { value: 'La semaine dernière', type: 'rect', color: '#8c8c8c', id: 'previousWeek' },
        { value: 'Cette semaine', type: 'rect', color: '#9932CC', id: 'currentWeek' },
      ],
    }
  }

  render() {
    return (
      <div className="chart-container bar-chart player-segmentation-chart">
        <h3>Joueurs exclusifs</h3>

        {this.props.loading ?
          <BounceLoader
            color="#d3d3d3"
            loading={this.props.loading}
          />
        :
          <BarChart
            width={550}
            height={330}
            data={this.props.data}
            margin={{ top: 20, right: 0, left: 0, bottom: 10 }}
          >
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              payload={this.state.legend}
              wrapperStyle={{ bottom: -10, left: 40 }}
              iconSize={24}
            />
            <CartesianGrid horizontal vertical={false} strokeDasharray="2 2" />
            <XAxis dataKey="game" tickLine={false} tick={{ fill: '#FFFFFF' }} />
            <YAxis />
            <Tooltip
              wrapperStyle={{ backgroundColor: '#2e2e2e' }}
            />

            <Bar dataKey="prePlayers" fill="#079992" barSize={15} />
            <Bar dataKey="players" fill="#8F39C1" barSize={30} />

          </BarChart>
        }
      </div>
    )
  }
}

ChartPlayersExclusive.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
}

ChartPlayersExclusive.defaultProps = {
  data: [],
  loading: true,
}

export default ChartPlayersExclusive
