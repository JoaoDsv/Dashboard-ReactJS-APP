import { combineReducers } from 'redux'

import overviewReducer from './app/overview/reducers'
import playersReducer from './app/players/reducers'
import ecreditsReducer from './app/ecredits/reducers'


const allReducers = combineReducers({
  overviewReducer,
  playersReducer,
  ecreditsReducer,
})

export default allReducers
