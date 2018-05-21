import * as ACTION_TYPES from '../../../assets/constants/actionTypes'

export const initialState = {
  segmentationLoading: true,
  segmentationData: {},
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
      newState.segmentationData = {
        labels: [
          'EXCLUSIFS',
          'MIXTES',
          'DUPLICANTS',
        ],
        datasets: [
          {
            label: 'Population',
            data: [
              20,
              15,
              25,
            ],
            backgroundColor: [
              '#f39c12', // Orange
              '#2ecc71', // Green
              '#9b59b6', // Purple
            ],
          },
        ],
      }
      break
    default:
      break
  }
  return newState
}
