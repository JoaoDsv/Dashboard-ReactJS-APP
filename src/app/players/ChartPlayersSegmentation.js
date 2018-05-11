import React from 'react'
import PropTypes from 'prop-types'
import { BounceLoader } from 'react-spinners'

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


// Component
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
        { value: 'previous week', type: 'line', id: 'ID01' },
        { value: 'current week', type: 'line', id: 'ID02' },
      ],
    }
  }

  // Fetch data once the component is mounted
  componentDidMount() {
  }


  render() {
    return (
      <div className="chart-container col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <h3>Pourcentages de joueurs par catégorie</h3>

        {this.props.loading ?
          <BounceLoader
            color={'#d3d3d3'}
            loading={this.props.loading}
          />
        :
          <ResponsiveContainer width="60%" height={300}>
            <BarChart
              width={600}
              height={300}
              data={this.state.fakeData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
              <CartesianGrid vertical={false} horizontal strokeDasharray="4 4" />
              <XAxis dataKey="segm" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="prevFirst" stackId="previousWeek" fill="#8884df" barSize={20} />
              <Bar dataKey="prevSecond" stackId="previousWeek" fill="#82ca9f" barSize={20} />
              <Bar dataKey="prevThird" stackId="previousWeek" fill="#888a98" barSize={20} />
              <Bar dataKey="prevFourth" stackId="previousWeek" fill="#188a9f" barSize={20} />

              <Bar dataKey="first" stackId="currentWeek" fill="#8884d8" barSize={60} />
              <Bar dataKey="second" stackId="currentWeek" fill="#82ca9d" barSize={60} />
              <Bar dataKey="third" stackId="currentWeek" fill="#888a9d" barSize={60} />
              <Bar dataKey="fourth" stackId="currentWeek" fill="#188a9a" barSize={60} />
            </BarChart>
          </ResponsiveContainer>
        }
      </div>
    )
  }
}

ChartPlayersSegmentation.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  showTitle: PropTypes.bool,
  showLegend: PropTypes.bool,
  legendPosition: PropTypes.string,
}

ChartPlayersSegmentation.defaultProps = {
  data: {},
  loading: true,
  showTitle: false,
  showLegend: true,
  legendPosition: 'right',
}

export default ChartPlayersSegmentation
