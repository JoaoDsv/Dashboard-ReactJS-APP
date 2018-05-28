import { connect } from 'react-redux'

import TabEcredits from '../TabEcredits'
import * as ACTION_TYPE from '../../../assets/constants/actionTypes'
import * as req from '../../../api/requests'


// Allow component to use his specific store by props
const mapStateToProps = state => ({ ecreditsStore: state.ecreditsReducer })

// Allow component to dispatch specific actions by props
const mapDispatchToProps = dispatch => ({

  // ACTION: Get data about ecredits' spending
  getEcreditsSpending: async (period) => {
    try {
      // Display loader when waiting for response
      dispatch({ type: ACTION_TYPE.GET_ECREDITS_SPENDING_LOADING })

      // Send request & wait untill API response
      const res = await req.getEcreditsSpending(period)

      // Dispatch failure, if any problem occurs with the response
      if (!res || res.data.statusCode !== 200) return dispatch({ type: ACTION_TYPE.GET_ECREDITS_SPENDING_FAILURE })

      // Dispatch success, with response spead in a payload object
      return dispatch({ type: ACTION_TYPE.GET_ECREDITS_SPENDING_SUCCESS, payload: { ...res.data } })
    } catch (error) {
      // Log explicit error
      console.error(error)

      // Dispatch failure
      return dispatch({ type: ACTION_TYPE.GET_ECREDITS_SPENDING_FAILURE })
    }
  },

  // ACTION: Get data about ecredits' amount
  getEcreditsAmount: async (period) => {
    try {
      // Display loader when waiting for response
      dispatch({ type: ACTION_TYPE.GET_ECREDITS_AMOUNT_LOADING })

      // Send request & wait untill API response
      const res = await req.getEcreditsAmount(period)

      // Dispatch failure, if any problem occurs with the response
      if (!res || res.data.statusCode !== 200) return dispatch({ type: ACTION_TYPE.GET_ECREDITS_AMOUNT_FAILURE })

      // Dispatch success, with response spead in a payload object
      return dispatch({ type: ACTION_TYPE.GET_ECREDITS_AMOUNT_SUCCESS, payload: { ...res.data } })
    } catch (error) {
      // Log explicit error
      console.error(error)

      // Dispatch failure
      return dispatch({ type: ACTION_TYPE.GET_ECREDITS_AMOUNT_FAILURE })
    }
  },

  // ACTION: Get data about ecredits' games
  getEcreditsGames: async (period) => {
    try {
      // Display loader when waiting for response
      dispatch({ type: ACTION_TYPE.GET_ECREDITS_GAMES_LOADING })

      // Send request & wait untill API response
      const res = await req.getEcreditsGames(period)

      // Dispatch failure, if any problem occurs with the response
      if (!res || res.data.statusCode !== 200) return dispatch({ type: ACTION_TYPE.GET_ECREDITS_GAMES_FAILURE })

      // Dispatch success, with response spead in a payload object
      return dispatch({ type: ACTION_TYPE.GET_ECREDITS_GAMES_SUCCESS, payload: { ...res.data } })
    } catch (error) {
      // Log explicit error
      console.error(error)

      // Dispatch failure
      return dispatch({ type: ACTION_TYPE.GET_ECREDITS_GAMES_FAILURE })
    }
  },

  // ACTION: Get data about ecredits' segmentations
  getEcreditsSegmentation: async (period) => {
    try {
      // Display loader when waiting for response
      dispatch({ type: ACTION_TYPE.GET_ECREDITS_SEGMENTATION_LOADING })

      // Send request & wait untill API response
      const res = await req.getEcreditsSegmentation(period)

      // Dispatch failure, if any problem occurs with the response
      if (!res || res.data.statusCode !== 200) return dispatch({ type: ACTION_TYPE.GET_ECREDITS_SEGMENTATION_FAILURE })

      // Dispatch success, with response spead in a payload object
      return dispatch({ type: ACTION_TYPE.GET_ECREDITS_SEGMENTATION_SUCCESS, payload: { ...res.data } })
    } catch (error) {
      // Log explicit error
      console.error(error)

      // Dispatch failure
      return dispatch({ type: ACTION_TYPE.GET_ECREDITS_SEGMENTATION_FAILURE })
    }
  },

  // ACTION: Period picker change
  updateEcreditsPeriod: async (period) => {
    try {
      // Dispatch failure, if any problem occurs with the period
      if (!period || new Date(period) === undefined) return dispatch({ type: ACTION_TYPE.UPDATE_ECREDITS_PERIOD_FAILURE })

      // Dispatch success, with period in a payload object
      return dispatch({ type: ACTION_TYPE.UPDATE_ECREDITS_PERIOD_SUCCESS, payload: { period } })
    } catch (error) {
      // Log explicit error
      console.error(error)

      // Dispatch failure
      return dispatch({ type: ACTION_TYPE.UPDATE_ECREDITS_PERIOD_FAILURE })
    }
  },
})


// Component connection
const TabEcreditsContainer = connect(mapStateToProps, mapDispatchToProps)(TabEcredits)
export default TabEcreditsContainer
