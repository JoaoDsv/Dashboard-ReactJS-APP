import { combineReducers } from 'redux'

import profilReducer from './app/profil/reducers/profilReducer'


const allReducers = combineReducers({
  profilReducer,
})

export default allReducers
