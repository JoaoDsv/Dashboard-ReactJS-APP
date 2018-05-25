import * as ACTION_TYPES from '../../../assets/constants/actionTypes'

export const initialState = {
  segmentationLoading: true,
  segmentationData: [],
  betLoading: true,
  betData: [],
}

export default function store(state = initialState, action) {
  // Build new state
  const newState = Object.assign({}, state)

  // React differently for each dispatched action
  switch (action.type) {
    case ACTION_TYPES.GET_PLAYERS_SEGMENTATION_LOADING:
      newState.segmentationLoading = true
      break
    case ACTION_TYPES.GET_PLAYERS_SEGMENTATION_SUCCESS:
      newState.segmentationLoading = false
      newState.segmentationData = action.payload.data
      break
    case ACTION_TYPES.GET_PLAYERS_SEGMENTATION_FAILURE:
      newState.segmentationLoading = false
      newState.segmentationData = []
      break
    case ACTION_TYPES.GET_PLAYERS_BET_LOADING:
      newState.betLoading = true
      break
    case ACTION_TYPES.GET_PLAYERS_BET_SUCCESS:
      newState.betLoading = false
      newState.betData = action.payload.data
      break
    case ACTION_TYPES.GET_PLAYERS_BET_FAILURE:
      newState.betLoading = false
      newState.betData = []
      break
    default:
      break
  }
  return newState
}
