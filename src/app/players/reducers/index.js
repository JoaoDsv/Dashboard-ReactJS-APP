import * as ACTION_TYPES from '../../../assets/constants/actionTypes'

export const initialState = {
  period: '2017-11-19T23:00:00.000Z',
  segmentationLoading: true,
  segmentationData: [],
  betLoading: true,
  betData: [],
  exclusiveLoading: true,
  exclusiveData: [],
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

    case ACTION_TYPES.GET_PLAYERS_EXCLUSIVE_LOADING:
      newState.exclusiveLoading = true
      break
    case ACTION_TYPES.GET_PLAYERS_EXCLUSIVE_SUCCESS:
      newState.exclusiveLoading = false
      newState.exclusiveData = action.payload.data
      break
    case ACTION_TYPES.GET_PLAYERS_EXCLUSIVE_FAILURE:
      newState.exclusiveLoading = false
      newState.exclusiveData = []
      break

    case ACTION_TYPES.UPDATE_PLAYERS_PERIOD_SUCCESS:
      newState.period = action.payload.period
      break
    case ACTION_TYPES.UPDATE_PLAYERS_PERIOD_FAILURE:
      break

    default:
      break
  }
  return newState
}
