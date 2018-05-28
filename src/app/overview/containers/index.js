import { connect } from 'react-redux'

import TabOverview from '../TabOverview'
import * as ACTION_TYPE from '../../../assets/constants/actionTypes'
import * as req from '../../../api/requests'


// Allow component to use his specific store by props
const mapStateToProps = state => ({ overviewStore: state.overviewReducer })

// Allow component to dispatch specific actions by props
const mapDispatchToProps = dispatch => ({

  // ACTION: Get data about players' segmentation
  getOverview: async (period) => {
    try {
      // Display loader when waiting for response
      dispatch({ type: ACTION_TYPE.GET_OVERVIEW_LOADING })

      // Send request & wait untill API response
      const res = await req.getOverview(period)

      // Dispatch failure, if any problem occurs with the response
      if (!res || res.data.statusCode !== 200) return dispatch({ type: ACTION_TYPE.GET_OVERVIEW_FAILURE })

      // Dispatch success, with response spead in a payload object
      return dispatch({ type: ACTION_TYPE.GET_OVERVIEW_SUCCESS, payload: { ...res.data } })
    } catch (error) {
      // Log explicit error
      console.error(error)

      // Dispatch failure
      return dispatch({ type: ACTION_TYPE.GET_OVERVIEW_FAILURE })
    }
  },
})


// Component connection
const TabOverviewContainer = connect(mapStateToProps, mapDispatchToProps)(TabOverview)
export default TabOverviewContainer
