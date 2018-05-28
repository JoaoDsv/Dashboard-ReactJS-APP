import React from 'react'
import PropTypes from 'prop-types'
import SvgIcon from 'react-icons-kit'

import { ic_chevron_left as arrowLeftIcon } from 'react-icons-kit/md/ic_chevron_left'
import { ic_chevron_right as arrowRightIcon } from 'react-icons-kit/md/ic_chevron_right'


// Period-picker component, select period
class PeriodPicker extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      // Association maps from request format to display format
      ecreditsPeriods: [
        { requestFormat: '2017-02-19T23:00:00.000Z', displayFormat: 'Février - Mai 2017' },
        { requestFormat: '2017-05-19T23:00:00.000Z', displayFormat: 'Mai - Août 2017' },
        { requestFormat: '2017-08-19T23:00:00.000Z', displayFormat: 'Août - Novembre 2017' },
        { requestFormat: '2017-11-19T23:00:00.000Z', displayFormat: 'Novembre 2017 - Février 2018' },
      ],
      playersPeriods: [
        { requestFormat: '2017-11-05T23:00:00.000Z', displayFormat: 'Semaine du 6 au 13 novembre 2017' },
        { requestFormat: '2017-11-12T23:00:00.000Z', displayFormat: 'Semaine du 13 au 20 novembre 2017' },
        { requestFormat: '2017-11-19T23:00:00.000Z', displayFormat: 'Semaine du 20 au 27 novembre 2017' },
        { requestFormat: '2017-11-26T23:00:00.000Z', displayFormat: 'Semaine du 27 novembre au 4 décembre 2017' },
      ],
    }
    // Binding to make `this` work in the callback
    this.handleNextPeriod = this.handleNextPeriod.bind(this)
    this.handlePreviousPeriod = this.handlePreviousPeriod.bind(this)
  }

  // Change period to previous one, depending on current tab
  handlePreviousPeriod() {
    const { playersPeriods } = this.state
    const { ecreditsPeriods } = this.state

    if (this.props.tab === 'players') {
      playersPeriods.forEach((item, index) => {
        if (item.requestFormat === this.props.period) {
          this.props.periodChange(index !== 0 ? playersPeriods[index - 1].requestFormat : playersPeriods[playersPeriods.length - 1].requestFormat)
        }
      })
    } else if (this.props.tab === 'ecredits') {
      ecreditsPeriods.forEach((item, index) => {
        if (item.requestFormat === this.props.period) {
          this.props.periodChange(index !== 0 ? ecreditsPeriods[index - 1].requestFormat : ecreditsPeriods[ecreditsPeriods.length - 1].requestFormat)
        }
      })
    }
  }

  // Change period to next one, depending on current tab
  handleNextPeriod() {
    const { playersPeriods } = this.state
    const { ecreditsPeriods } = this.state

    if (this.props.tab === 'players') {
      playersPeriods.forEach((item, index) => {
        if (item.requestFormat === this.props.period) {
          this.props.periodChange(index !== playersPeriods.length - 1 ? playersPeriods[index + 1].requestFormat : playersPeriods[0].requestFormat)
        }
      })
    } else if (this.props.tab === 'ecredits') {
      ecreditsPeriods.forEach((item, index) => {
        if (item.requestFormat === this.props.period) {
          this.props.periodChange(index !== ecreditsPeriods.length - 1 ? ecreditsPeriods[index + 1].requestFormat : ecreditsPeriods[0].requestFormat)
        }
      })
    }
  }

  render() {
    return (
      <div className="period-picker-container">
        <SvgIcon className="previous-period-arrow" size={40} icon={arrowLeftIcon} onClick={this.handlePreviousPeriod} />
        <SvgIcon className="next-period-arrow" size={40} icon={arrowRightIcon} onClick={this.handleNextPeriod} />
        <div className="current-period-text">
          {this.props.tab === 'players' &&
            this.state.playersPeriods.map(item => (item.requestFormat === this.props.period ? item.displayFormat : null))}
          {this.props.tab === 'ecredits' &&
            this.state.ecreditsPeriods.map(item => (item.requestFormat === this.props.period ? item.displayFormat : null))}
        </div>
      </div>
    )
  }
}

PeriodPicker.propTypes = {
  period: PropTypes.string.isRequired,
  periodChange: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
}

export default PeriodPicker
