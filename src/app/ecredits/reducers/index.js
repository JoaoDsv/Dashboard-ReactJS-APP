import * as ACTION_TYPES from '../../../assets/constants/actionTypes'

export const initialState = {
  spendingLoading: true,
  spendingData: [],
  amountLoading: true,
  amountData: [],
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
    default:
      break
  }
  return newState
}
