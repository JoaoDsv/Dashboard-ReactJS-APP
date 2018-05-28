import * as ACTION_TYPES from '../../../assets/constants/actionTypes'

export const initialState = {
  period: '2017-02-19T23:00:00.000Z',
  spendingLoading: true,
  spendingData: [],
  amountLoading: true,
  amountData: [],
  gamesLoading: true,
  gamesData: [],
  segmentationLoading: true,
  segmentationData: [],
}

export default function store(state = initialState, action) {
  // Build new state
  const newState = Object.assign({}, state)

  // Update state depending on dispatched action
  switch (action.type) {

    case ACTION_TYPES.GET_ECREDITS_SPENDING_LOADING:
      newState.spendingLoading = true
      break
    case ACTION_TYPES.GET_ECREDITS_SPENDING_SUCCESS:
      newState.spendingLoading = false
      newState.spendingData = action.payload.data
      break
    case ACTION_TYPES.GET_ECREDITS_SPENDING_FAILURE:
      newState.spendingLoading = false
      newState.spendingData = []
      break

    case ACTION_TYPES.GET_ECREDITS_AMOUNT_LOADING:
      newState.amountLoading = true
      break
    case ACTION_TYPES.GET_ECREDITS_AMOUNT_SUCCESS:
      newState.amountLoading = false
      newState.amountData = action.payload.data
      break
    case ACTION_TYPES.GET_ECREDITS_AMOUNT_FAILURE:
      newState.amountLoading = false
      newState.amountData = []
      break

    case ACTION_TYPES.GET_ECREDITS_GAMES_LOADING:
      newState.gamesLoading = true
      break
    case ACTION_TYPES.GET_ECREDITS_GAMES_SUCCESS:
      newState.gamesLoading = false
      newState.gamesData = action.payload.data
      break
    case ACTION_TYPES.GET_ECREDITS_GAMES_FAILURE:
      newState.gamesLoading = false
      newState.gamesData = []
      break

    case ACTION_TYPES.GET_ECREDITS_SEGMENTATION_LOADING:
      newState.segmentationLoading = true
      break
    case ACTION_TYPES.GET_ECREDITS_SEGMENTATION_SUCCESS:
      newState.segmentationLoading = false
      newState.segmentationData = action.payload.data
      break
    case ACTION_TYPES.GET_ECREDITS_SEGMENTATION_FAILURE:
      newState.segmentationLoading = false
      newState.segmentationData = []
      break

    case ACTION_TYPES.UPDATE_ECREDITS_PERIOD_SUCCESS:
      newState.period = action.payload.period
      break
    case ACTION_TYPES.UPDATE_ECREDITS_PERIOD_FAILURE:
      break

    default:
      break
  }
  return newState
}
