import React from 'react'
import PropTypes from 'prop-types'
import { BounceLoader } from 'react-spinners'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


// Bar chart component, showing payers' segmentations
class ChartPlayersSegmentation extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      fakeData: [
        { segm: 'EXCLUSIFS', first: 4000, second: 2400, third: 2400, fourth: 1000, prevFirst: 3000, prevSecond: 2000, prevThird: 3000, prevFourth: 1000 },
        { segm: 'MIXTES', first: 3000, second: 1398, third: 2010, prevFirst: 2000, prevSecond: 3500, prevThird: 3000 },
        { segm: 'DUPLICANTS', first: 2000, second: 3800, prevFirst: 1000, prevSecond: 4300 },
      ],
      legend: [
        { value: 'Cette semaine', type: 'rect', color: '#9932CC', id: 'currentWeek' },
        { value: 'La semaine dernière', type: 'rect', color: '#8c8c8c', id: 'previousWeek' },
      ],
    }
  }

  // Fetch data once the component is mounted
  componentDidMount() {
  }


  render() {
    return (
      <div className="chart-container player-segmentation-chart">
        <h3>Pourcentages de joueurs par catégorie</h3>

        {this.props.loading ?
          <BounceLoader
            color={'#d3d3d3'}
            loading={this.props.loading}
          />
        :
          <BarChart
            width={570}
            height={300}
            data={this.state.fakeData}
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
            <XAxis dataKey="segm" tick={{ fill: '#fff' }} />
            <YAxis />
            <Tooltip wrapperStyle={{ backgroundColor: '#2e2e2e' }} />

            <Bar dataKey="prevFirst" stackId="previousWeek" fill="#6c6c6c" barSize={20} />
            <Bar dataKey="prevSecond" stackId="previousWeek" fill="#7c7c7c" barSize={20} />
            <Bar dataKey="prevThird" stackId="previousWeek" fill="#8c8c8c" barSize={20} />
            <Bar dataKey="prevFourth" stackId="previousWeek" fill="#9d9d9d" barSize={20} />

            <Bar dataKey="first" stackId="currentWeek" fill="#800080" barSize={60} />
            <Bar dataKey="second" stackId="currentWeek" fill="#8B008B" barSize={60} />
            <Bar dataKey="third" stackId="currentWeek" fill="#9932CC" barSize={60} />
            <Bar dataKey="fourth" stackId="currentWeek" fill="#DA70D6" barSize={60} />
          </BarChart>
        }
      </div>
    )
  }
}

ChartPlayersSegmentation.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
}

ChartPlayersSegmentation.defaultProps = {
  data: {},
  loading: true,
}

export default ChartPlayersSegmentation
