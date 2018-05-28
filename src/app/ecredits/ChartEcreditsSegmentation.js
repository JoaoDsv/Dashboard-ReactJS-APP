import React from 'react'
import PropTypes from 'prop-types'
import { BounceLoader } from 'react-spinners'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'


// Bar chart component, showing payers' segmentations
class ChartEcreditsSegmentation extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
    }
  }

  render() {
    return (
      <div className="chart-container bar-chart ecredits-segmentation-chart">
        <h3>Ecredits par catégorie</h3>

        {this.props.loading ?
          <BounceLoader
            color="#d3d3d3"
            loading={this.props.loading}
          />
        :
          <BarChart
            width={250}
            height={350}
            data={this.props.data}
            margin={{ top: 40, right: 0, left: 0, bottom: 5 }}
          >

            <CartesianGrid horizontal vertical={false} strokeDasharray="2 2" />
            <XAxis dataKey="segm" tickLine={false} tick={{ fill: '#FFFFFF' }} />
            <YAxis />
            <Tooltip
              wrapperStyle={{ backgroundColor: '#2e2e2e' }}
            />

            <Bar dataKey="euromillion" stackId="currentMonth" fill="#7F3326" barSize={40} />
            <Bar dataKey="loto" stackId="currentMonth" fill="#9A3525" barSize={40} />
            <Bar dataKey="grattage" stackId="currentMonth" fill="#B54331" barSize={40} />
            <Bar dataKey="keno" stackId="currentMonth" fill="#D04E39" barSize={40} />
            <Bar dataKey="bingo" stackId="currentMonth" fill="#EF5F48" barSize={40} />
            <Bar dataKey="interactif" stackId="currentMonth" fill="#F47662" barSize={40} />
            <Bar dataKey="motors" stackId="currentMonth" fill="#FD9B8C" barSize={40} />

            <Bar dataKey="tirageMixte" stackId="currentMonth" fill="#7F3326" barSize={40} />
            <Bar dataKey="euromillionMixte" stackId="currentMonth" fill="#9A3525" barSize={40} />
            <Bar dataKey="lotoMixte" stackId="currentMonth" fill="#B54331" barSize={40} />
            <Bar dataKey="grattageMixte" stackId="currentMonth" fill="#D04E39" barSize={40} />
            <Bar dataKey="illikoMixte" stackId="currentMonth" fill="#EF5F48" barSize={40} />
            <Bar dataKey="interactifMixte" stackId="currentMonth" fill="#F47662" barSize={40} />
            <Bar dataKey="motorsMixte" stackId="currentMonth" fill="#FD9B8C" barSize={40} />
            <Bar dataKey="kenoMixte" stackId="currentMonth" fill="#FD9B8C" barSize={40} />

            <Bar dataKey="TI" stackId="currentMonth" fill="#7F3326" barSize={40} />
            <Bar dataKey="BIT" stackId="currentMonth" fill="#B54331" barSize={40} />
            <Bar dataKey="BI" stackId="currentMonth" fill="#EF5F48" barSize={40} />
            <Bar dataKey="BT" stackId="currentMonth" fill="#F47662" barSize={40} />
          </BarChart>
        }
      </div>
    )
  }
}

ChartEcreditsSegmentation.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
}

ChartEcreditsSegmentation.defaultProps = {
  data: [],
  loading: true,
}

export default ChartEcreditsSegmentation
