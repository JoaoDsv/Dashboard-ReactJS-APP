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

  // ACTION: Get a list of players segmentations
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
})


// Component connection
const TabPlayersContainer = connect(mapStateToProps, mapDispatchToProps)(TabPlayers)
export default TabPlayersContainer
