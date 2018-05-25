import { combineReducers } from 'redux'

import ecreditsReducer from './app/ecredits/reducers'
import playersReducer from './app/players/reducers'


const allReducers = combineReducers({
  playersReducer,
  ecreditsReducer,
})

export default allReducers
