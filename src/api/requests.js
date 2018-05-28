import axios from 'axios'
import API_ROOT from './params'


// Fetch overview data about players & E-credits
export function getOverview(period) {
  return axios.get(`${API_ROOT}/overview?period=${period}`)
}

// Fetch specific period data about players' segmentations
export function getPlayersSegmentation(period) {
  return axios.get(`${API_ROOT}/players/segmentation?period=${period}`)
}

// Fetch specific period data about players' bets amount
export function getPlayersBet(period) {
  return axios.get(`${API_ROOT}/players/bet?period=${period}`)
}

// Fetch specific period data about exclusive players
export function getPlayersExclusive(period) {
  return axios.get(`${API_ROOT}/players/exclusive?period=${period}`)
}

// Fetch specific period data about defference between given & spent E-credits'
export function getEcreditsSpending(period) {
  return axios.get(`${API_ROOT}/ecredits/spending?period=${period}`)
}

// Fetch specific period data about spent E-credits' amounts
export function getEcreditsAmount(period) {
  return axios.get(`${API_ROOT}/ecredits/amount?period=${period}`)
}

// Fetch specific period data about games where E-credits' are spent
export function getEcreditsGames(period) {
  return axios.get(`${API_ROOT}/ecredits/games?period=${period}`)
}

// Fetch specific period data about segmentations where E-credits' are spent
export function getEcreditsSegmentation(period) {
  return axios.get(`${API_ROOT}/ecredits/segmentation?period=${period}`)
}
