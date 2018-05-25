import React from 'react'
import PropTypes from 'prop-types'
import { BounceLoader } from 'react-spinners'

import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts'


// Pie chart component, showing payers' bets
class ChartPlayersBet extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      legend: [
        { value: '< 10€', type: 'rect', color: '#67C3CB' },
        { value: '10 à 20€', type: 'rect', color: '#734696' },
        { value: '> 20€', type: 'rect', color: '#E94171' },
      ],
    }
  }

  render() {
    return (
      <div className={`chart-container pie-chart player-bet-chart ${this.props.showTitle && 'show-pie-title'}`}>
        {this.props.showTitle && <h3>Mises par catégorie</h3>}

        {this.props.loading ?
          <BounceLoader
            color={'#d3d3d3'}
            loading={this.props.loading}
          />
        :
          <div className="pie-wrapper">
            <PieChart
              width={310}
              height={220}
              margin={{ top: 30, right: 0, left: 0, bottom: 0 }}

            >
              <Legend
                payload={this.state.legend}
                verticalAlign="middle"
                layout="vertical"
                iconSize={22}
                align="right"
                wrapperStyle={{ right: 5 }}
              />
              <Tooltip
                wrapperStyle={{ backgroundColor: '#2e2e2e' }}
              />
              <Pie
                data={this.props.data}
                dataKey="betsCount"
                nameKey="betsAmount"
                innerRadius={50}
                outerRadius={70}
                label
              >
                <Cell fill="#67C3CB" />
                <Cell fill="#734696" />
                <Cell fill="#E94171" />
              </Pie>

            </PieChart>
            <h4>
              {!!this.props.subtitle && this.props.subtitle}
            </h4>
          </div>
        }
      </div>
    )
  }
}

ChartPlayersBet.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  showTitle: PropTypes.bool,
  subtitle: PropTypes.string,
}

ChartPlayersBet.defaultProps = {
  data: [],
  loading: true,
  showTitle: true,
  subtitle: '',
}

export default ChartPlayersBet
