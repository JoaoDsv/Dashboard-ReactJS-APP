import { combineReducers } from 'redux'

import profilReducer from './app/profil/reducers'
import playersReducer from './app/players/reducers'


const allReducers = combineReducers({
  profilReducer,
  playersReducer,
})

export default allReducers
