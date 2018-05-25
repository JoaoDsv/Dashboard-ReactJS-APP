import axios from 'axios'
import API_ROOT from './params'


// Get data about players' segmentation
export function getPlayersSegmentation(week) {
  return axios.get(`${API_ROOT}/players/segmentation?week=${week}`)
}

// Get data about players' bets
export function getPlayersBet(week) {
  return axios.get(`${API_ROOT}/players/bet?week=${week}`)
}
