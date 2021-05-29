import Vue from 'vue'

export const createDeck = (cards = [], rotation = '') => {
  let cardsString = cards.join(',')
  if (rotation) {
    cardsString += `,${rotation}`
  }
  const endpoint = `deck/new/shuffle/?cards=${cardsString}`
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

export const createPile = (deckId, pileName, cards = []) => {
  const cardsString = cards.join(',')
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
