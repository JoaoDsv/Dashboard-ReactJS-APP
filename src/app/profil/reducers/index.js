import * as ACTION_TYPES from '../../../assets/constants/actionTypes'

export const initialState = {
  loading: false,
  listProfil: [],
}

export default function store(state = initialState, action) {
  // Build new state
  const newState = Object.assign({}, state)

  // React differently for each dispatched action
  switch (action.type) {
    case ACTION_TYPES.GET_LIST_PROFIL_LOADING:
      newState.loading = true
      break
    case ACTION_TYPES.GET_LIST_PROFIL_SUCCESS:
      newState.loading = false
      newState.listProfil = action.payload.data
      break
    case ACTION_TYPES.GET_LIST_PROFIL_FAILURE:
      newState.loading = false
      break
    default:
      break
  }
  return newState
}
