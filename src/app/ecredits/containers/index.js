import { connect } from 'react-redux'

import TabEcredits from '../TabEcredits'
import * as ACTION_TYPE from '../../../assets/constants/actionTypes'
import * as req from '../../../api/requests'

// Allow component to use his specific store by props
const mapStateToProps = state => ({ ecreditsStore: state.ecreditsReducer })


// Allow component to dispatch specific actions by props
const mapDispatchToProps = dispatch => ({

  // ACTION: Get data about ecredits' spending
  getEcreditsSpending: async (week) => {
    try {
      // Display loader when waiting for response
      dispatch({ type: ACTION_TYPE.GET_ECREDITS_SPENDING_LOADING })

      // Send request & wait untill API response
      const res = await req.getPlayersSegmentation(week)

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
  getEcreditsAmount: async (week) => {
    try {
      // Display loader when waiting for response
      dispatch({ type: ACTION_TYPE.GET_ECREDITS_AMOUNT_LOADING })

      // Send request & wait untill API response
      const res = await req.getPlayersBet(week)

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
})


// Component connection
const TabEcreditsContainer = connect(mapStateToProps, mapDispatchToProps)(TabEcredits)
export default TabEcreditsContainer
