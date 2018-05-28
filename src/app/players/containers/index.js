import { connect } from 'react-redux'

import TabPlayers from '../TabPlayers'
import * as ACTION_TYPE from '../../../assets/constants/actionTypes'
import * as req from '../../../api/requests'


// Allow component to use his specific store by props
const mapStateToProps = state => ({ playersStore: state.playersReducer })

// Allow component to dispatch specific actions by props
const mapDispatchToProps = dispatch => ({

  // ACTION: Get data about players' segmentation
  getPlayersSegmentation: async (week) => {
    try {
      // Display loader when waiting for response
      dispatch({ type: ACTION_TYPE.GET_PLAYERS_SEGMENTATION_LOADING })

      // Send request & wait untill API response
      const res = await req.getPlayersSegmentation(week)

      // Dispatch failure, if any problem occurs with the response
      if (!res || res.data.statusCode !== 200) return dispatch({ type: ACTION_TYPE.GET_PLAYERS_SEGMENTATION_FAILURE })

      // Dispatch success, with response spead in a payload object
      return dispatch({ type: ACTION_TYPE.GET_PLAYERS_SEGMENTATION_SUCCESS, payload: { ...res.data } })
    } catch (error) {
      // Log explicit error
      console.error(error)

      // Dispatch failure
      return dispatch({ type: ACTION_TYPE.GET_PLAYERS_SEGMENTATION_FAILURE })
    }
  },

  // ACTION: Get data about exclusive players
  getPlayersExclusive: async (week) => {
    try {
      // Display loader when waiting for response
      dispatch({ type: ACTION_TYPE.GET_PLAYERS_EXCLUSIVE_LOADING })

      // Send request & wait untill API response
      const res = await req.getPlayersExclusive(week)

      // Dispatch failure, if any problem occurs with the response
      if (!res || res.data.statusCode !== 200) return dispatch({ type: ACTION_TYPE.GET_PLAYERS_EXCLUSIVE_FAILURE })

      // Dispatch success, with response spead in a payload object
      return dispatch({ type: ACTION_TYPE.GET_PLAYERS_EXCLUSIVE_SUCCESS, payload: { ...res.data } })
    } catch (error) {
      // Log explicit error
      console.error(error)

      // Dispatch failure
      return dispatch({ type: ACTION_TYPE.GET_PLAYERS_EXCLUSIVE_FAILURE })
    }
  },

  // ACTION: Get data about players' bets amount
  getPlayersBet: async (week) => {
    try {
      // Display loader when waiting for response
      dispatch({ type: ACTION_TYPE.GET_PLAYERS_BET_LOADING })

      // Send request & wait untill API response
      const res = await req.getPlayersBet(week)

      // Dispatch failure, if any problem occurs with the response
      if (!res || res.data.statusCode !== 200) return dispatch({ type: ACTION_TYPE.GET_PLAYERS_BET_FAILURE })

      // Dispatch success, with response spead in a payload object
      return dispatch({ type: ACTION_TYPE.GET_PLAYERS_BET_SUCCESS, payload: { ...res.data } })
    } catch (error) {
      // Log explicit error
      console.error(error)

      // Dispatch failure
      return dispatch({ type: ACTION_TYPE.GET_PLAYERS_BET_FAILURE })
    }
  },

  // ACTION: Period picker change
  updatePlayersPeriod: async (period) => {
    try {
      // Dispatch failure, if any problem occurs with the period
      if (!period || new Date(period) === undefined) return dispatch({ type: ACTION_TYPE.UPDATE_PLAYERS_PERIOD_FAILURE })

      // Dispatch success, with period in a payload object
      return dispatch({ type: ACTION_TYPE.UPDATE_PLAYERS_PERIOD_SUCCESS, payload: { period } })
    } catch (error) {
      // Log explicit error
      console.error(error)

      // Dispatch failure
      return dispatch({ type: ACTION_TYPE.UPDATE_PLAYERS_PERIOD_FAILURE })
    }
  },
})


// Component connection
const TabPlayersContainer = connect(mapStateToProps, mapDispatchToProps)(TabPlayers)
export default TabPlayersContainer
