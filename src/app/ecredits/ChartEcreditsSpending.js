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
        { value: 'Cette semaine', type: 'rect', color: '#E49628', id: 'currentWeek' },
        { value: 'La semaine dernière', type: 'rect', color: '#EF5F48', id: 'previousWeek' },
      ],
    }
  }

  render() {
    return (
      <div className="chart-container bar-chart ecredits-spending-chart">
        <h3>Pourcentage de E-credits dépensés et non-dépensés</h3>

        {this.props.loading ?
          <BounceLoader
            color={'#d3d3d3'}
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
            <CartesianGrid horizontal vertical={false} strokeDasharray="3 2" />
            <XAxis dataKey="segm" tick={{ fill: '#FFFFFF' }} />
            <YAxis />
            <Tooltip
              wrapperStyle={{ backgroundColor: '#2e2e2e' }}
            />

            <Bar dataKey="preEuromillion" stackId="previousWeek" fill="#E49628" barSize={30} />
            <Bar dataKey="preLoto" stackId="previousWeek" fill="#FFC169" barSize={30} />

            <Bar dataKey="preTirageMixte" stackId="previousWeek" fill="#E49628" barSize={20} />
            <Bar dataKey="preEuromillionMixte" stackId="previousWeek" fill="#FFC169" barSize={20} />

            <Bar dataKey="euromillion" stackId="currentWeek" fill="#EF5F48" barSize={90} />
            <Bar dataKey="loto" stackId="currentWeek" fill="#FD8470" barSize={90} />

            <Bar dataKey="tirageMixte" stackId="currentWeek" fill="#EF5F48" barSize={60} />
            <Bar dataKey="euromillionMixte" stackId="currentWeek" fill="#FD8470" barSize={60} />
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
