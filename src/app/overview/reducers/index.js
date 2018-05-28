import * as ACTION_TYPES from '../../../assets/constants/actionTypes'

export const initialState = {
  overviewLoading: true,
  overviewData: [],
}

export default function store(state = initialState, action) {
  // Build new state
  const newState = Object.assign({}, state)

  // React differently for each dispatched action
  switch (action.type) {

    case ACTION_TYPES.GET_OVERVIEW_LOADING:
      newState.overviewLoading = true
      break
    case ACTION_TYPES.GET_OVERVIEW_SUCCESS:
      newState.overviewLoading = false
      newState.overviewData = action.payload.data
      break
    case ACTION_TYPES.GET_OVERVIEW_FAILURE:
      newState.overviewLoading = false
      newState.overviewData = []
      break

    default:
      break
  }
  return newState
}
