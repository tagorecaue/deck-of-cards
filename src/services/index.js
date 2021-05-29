import Vue from 'vue'

export const createDeck = (cards = [], rotationCard = {}) => {
  let cardsString = cards.map(card => card.code).join(',')
  if (rotationCard) {
    cardsString += `,${rotationCard.code}`
  }
  const endpoint = `deck/new/?cards=${cardsString}`
  const errorMessage = 'Failed to create a deck'

  return new Promise((resolve, reject) => {
    return Vue.axios.get(endpoint)
      .then(async ({ data }) => {
        if (data.success) {
          resolve(data)
        } else {
          reject(Error(errorMessage))
        }
      })
      .catch(() => reject(Error(errorMessage)))
  })
}

export const getDeck = (deckId = '') => {
  const endpoint = `deck/${deckId}/`
  const errorMessage = 'Failed to get deck'

  return new Promise((resolve, reject) => {
    return Vue.axios.get(endpoint)
      .then(async ({ data }) => {
        resolve(data)
      })
      .catch(() => reject(Error(errorMessage)))
  })
}

export const drawDeck = (deckId = '', count = 1) => {
  const endpoint = `deck/${deckId}/draw/?count=${count}`
  const errorMessage = 'Failed to get deck'

  return new Promise((resolve, reject) => {
    return Vue.axios.get(endpoint)
      .then(async ({ data }) => {
        resolve(data)
      })
      .catch(() => reject(Error(errorMessage)))
  })
}

export const createPile = (deckId, pileName, cards = []) => {
  const cardsString = cards.map(card => card.code).join(',')
  const endpoint = `deck/${deckId}/pile/${pileName}/add/?cards=${cardsString}`
  const errorMessage = 'Failed to create a card pile'

  return new Promise((resolve, reject) => {
    return Vue.axios.get(endpoint)
      .then(async ({ data }) => {
        if (data.success) {
          resolve(data)
        } else {
          reject(Error(errorMessage))
        }
      })
      .catch(() => reject(Error(errorMessage)))
  })
}

export const getPile = (deckId = '', pileName = '') => {
  const endpoint = `deck/${deckId}/pile/${pileName}/list/`
  const errorMessage = 'Failed to get pile'

  return new Promise((resolve, reject) => {
    return Vue.axios.get(endpoint)
      .then(async ({ data }) => {
        if (data.success) {
          resolve(data)
        } else {
          reject(Error(errorMessage))
        }
      })
      .catch(() => reject(Error(errorMessage)))
  })
}
