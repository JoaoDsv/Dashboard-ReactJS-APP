import React from 'react'
import PropTypes from 'prop-types'
import { BounceLoader } from 'react-spinners'

import { PieChart, Pie, Tooltip, Legend } from 'recharts'


// Pie chart component, showing payers' bets
class ChartPlayersBet extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      fakeData: [
        { segm: 'EXCLUSIFS', value: 4000, fill: '#8c8c8c' },
        { segm: 'MIXTES', value: 3000, fill: '#9932CC' },
        { segm: 'DUPLICANTS', value: 2000, fill: '#DA70D6' },
      ],
      legend: [
        { value: '< 10€', type: 'rect', color: '#8c8c8c', id: 'fifty' },
        { value: '10 à 20€', type: 'rect', color: '#9932CC', id: 'thirty' },
        { value: '> 20€', type: 'rect', color: '#DA70D6', id: 'twenty' },
      ],
    }
  }

  // Fetch data once the component is mounted
  componentDidMount() {
  }


  render() {
    return (
      <div className="chart-container player-bet-chart">
        {this.props.showTitle && <h3>Mise moyenne par partie</h3>}

        {this.props.loading ?
          <BounceLoader
            color={'#d3d3d3'}
            loading={this.props.loading}
          />
        :
          <div className="pie-container">
            <PieChart
              width={310}
              height={220}
              margin={{ top: 30, right: 0, left: 0, bottom: 0 }}

            >
              <Pie
                data={this.state.fakeData}
                dataKey="value"
                nameKey="segm"
                innerRadius={50}
                outerRadius={70}
                fill="#82ca9d"
                label
              />
              <Tooltip wrapperStyle={{ backgroundColor: '#2e2e2e' }} />
              <Legend
                payload={this.state.legend}
                verticalAlign="middle"
                layout="vertical"
                iconSize={22}
                align="right"
                wrapperStyle={{ right: 5 }}
              />
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
  data: PropTypes.object,
  loading: PropTypes.bool,
  showTitle: PropTypes.bool,
  subtitle: PropTypes.string,
}

ChartPlayersBet.defaultProps = {
  data: {},
  loading: true,
  showTitle: true,
  subtitle: '',
}

export default ChartPlayersBet
