import React from 'react'
import PropTypes from 'prop-types'
import { BounceLoader } from 'react-spinners'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


// Bar chart component, showing payers' segmentations
class ChartPlayersSegmentation extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      legend: [
        { value: 'Cette semaine', type: 'rect', color: '#9932CC', id: 'currentWeek' },
        { value: 'La semaine dernière', type: 'rect', color: '#8c8c8c', id: 'previousWeek' },
      ],
    }
  }

  render() {
    return (
      <div className="chart-container bar-chart player-segmentation-chart">
        <h3>Nombre de joueurs par catégorie</h3>

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

            <Bar dataKey="preEuromillion" stackId="previousWeek" fill="#079992" barSize={20} />
            <Bar dataKey="preLoto" stackId="previousWeek" fill="#1FACA5" barSize={20} />
            <Bar dataKey="preGrattage" stackId="previousWeek" fill="#12C9C2" barSize={20} />
            <Bar dataKey="preKeno" stackId="previousWeek" fill="#3AE8E2" barSize={20} />
            <Bar dataKey="preBingo" stackId="previousWeek" fill="#43FDF7" barSize={20} />
            <Bar dataKey="preInteractif" stackId="previousWeek" fill="#89FFFC" barSize={20} />
            <Bar dataKey="preMotors" stackId="previousWeek" fill="#C6FFFE" barSize={20} />

            <Bar dataKey="preTirageMixte" stackId="previousWeek" fill="#079992" barSize={20} />
            <Bar dataKey="preEuromillionMixte" stackId="previousWeek" fill="#1FACA5" barSize={20} />
            <Bar dataKey="preLotoMixte" stackId="previousWeek" fill="#12C9C2" barSize={20} />
            <Bar dataKey="preGrattageMixte" stackId="previousWeek" fill="#3AE8E2" barSize={20} />
            <Bar dataKey="preIllikoMixte" stackId="previousWeek" fill="#43FDF7" barSize={20} />
            <Bar dataKey="preInteractifMixte" stackId="previousWeek" fill="#89FFFC" barSize={20} />
            <Bar dataKey="preKenoMixte" stackId="previousWeek" fill="#C6FFFE" barSize={20} />
            <Bar dataKey="preMotorsMixte" stackId="previousWeek" fill="#FFFFFF" barSize={20} />

            <Bar dataKey="preTI" stackId="previousWeek" fill="#079992" barSize={20} />
            <Bar dataKey="preBIT" stackId="previousWeek" fill="#1FACA5" barSize={20} />
            <Bar dataKey="preBI" stackId="previousWeek" fill="#12C9C2" barSize={20} />
            <Bar dataKey="preBT" stackId="previousWeek" fill="#3AE8E2" barSize={20} />


            <Bar dataKey="euromillion" stackId="currentWeek" fill="#8F39C1" barSize={60} />
            <Bar dataKey="loto" stackId="currentWeek" fill="#9A48C9" barSize={60} />
            <Bar dataKey="grattage" stackId="currentWeek" fill="#A85CD3" barSize={60} />
            <Bar dataKey="keno" stackId="currentWeek" fill="#B66DE0" barSize={60} />
            <Bar dataKey="bingo" stackId="currentWeek" fill="#C27EE8" barSize={60} />
            <Bar dataKey="interactif" stackId="currentWeek" fill="#CE8FF2" barSize={60} />
            <Bar dataKey="motors" stackId="currentWeek" fill="#D8A7F4" barSize={60} />

            <Bar dataKey="tirageMixte" stackId="currentWeek" fill="#8F39C1" barSize={60} />
            <Bar dataKey="euromillionMixte" stackId="currentWeek" fill="#9A48C9" barSize={60} />
            <Bar dataKey="lotoMixte" stackId="currentWeek" fill="#A85CD3" barSize={60} />
            <Bar dataKey="grattageMixte" stackId="currentWeek" fill="#B66DE0" barSize={60} />
            <Bar dataKey="illikoMixte" stackId="currentWeek" fill="#C27EE8" barSize={60} />
            <Bar dataKey="interactifMixte" stackId="currentWeek" fill="#CE8FF2" barSize={60} />
            <Bar dataKey="kenoMixte" stackId="currentWeek" fill="#D8A7F4" barSize={60} />
            <Bar dataKey="motorsMixte" stackId="currentWeek" fill="#EE82EE" barSize={60} />

            <Bar dataKey="TI" stackId="currentWeek" fill="#8F39C1" barSize={60} />
            <Bar dataKey="BIT" stackId="currentWeek" fill="#9A48C9" barSize={60} />
            <Bar dataKey="BI" stackId="currentWeek" fill="#A85CD3" barSize={60} />
            <Bar dataKey="BT" stackId="currentWeek" fill="#B66DE0" barSize={60} />
          </BarChart>
        }
      </div>
    )
  }
}

ChartPlayersSegmentation.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
}

ChartPlayersSegmentation.defaultProps = {
  data: [],
  loading: true,
}

export default ChartPlayersSegmentation
