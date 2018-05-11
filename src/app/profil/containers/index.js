import { connect } from 'react-redux'
import axios from 'axios'

import ListProfil from '../ListProfil'
import * as ACTION_TYPES from '../../../assets/constants/actionTypes'


// Allow component to use his specific store by props
const mapStateToProps = state => ({ profilStore: state.profilReducer })


// Allow component to dispatch specific actions by props
const mapDispatchToProps = dispatch => ({

  // ACTION: Get a list of players profiles
  getListProfil: async () => {
    try {
      // Display loader when waiting for response
      dispatch({ type: ACTION_TYPES.GET_LIST_PROFIL_LOADING })

      // Send request & wait untill API response
      const res = await axios.get('http://localhost:8000/profils')

      // Dispatch failure, if any problem occurs with the response
      if (!res || res.data.statusCode !== 200) return dispatch({ type: ACTION_TYPES.GET_LIST_PROFIL_FAILURE })

      // Dispatch success, with response spead in a payload object
      return dispatch({ type: ACTION_TYPES.GET_LIST_PROFIL_SUCCESS, payload: { ...res.data } })
    } catch (error) {
      // Log explicit error
      console.error(error)

      // Dispatch failure
      return dispatch({ type: ACTION_TYPES.GET_LIST_PROFIL_FAILURE })
    }
  },
})


// Component connection
const ListProfilContainer = connect(mapStateToProps, mapDispatchToProps)(ListProfil)
export default ListProfilContainer
