import * as api from '@/services'

const createDeck = async ({ dispatch, commit }, { cards, rotationCard }) => {
  dispatch('isLoading', true)
  const { deck_id: deckId, remaining } = await api.createDeck(cards, rotationCard)
  await api.drawDeck(deckId, remaining)
  await api.createPile(deckId, 'table', cards)
  await api.createPile(deckId, 'rotation', [rotationCard])
  commit('SET_DECK', { deckId, cards, rotationCard })
  dispatch('isLoading', false)
  return deckId
}

const getDeck = async ({ dispatch, commit }, deckId) => {
  dispatch('isLoading', true)
  try {
    const tablePile = await api.getPile(deckId, 'table')
    const rotationCardPile = await api.getPile(deckId, 'rotation')

    const cards = tablePile.piles.table.cards
    const rotationCard = rotationCardPile.piles.rotation.cards[0]

    const result = { deckId, cards, rotationCard }
    commit('SET_DECK', result)
    return result
  } catch {
    return false
  } finally {
    dispatch('isLoading', false)
  }
}

const isLoading = ({ commit }, value) => {
  commit('SET_LOADING', value)
}

export default {
  createDeck,
  getDeck,
  isLoading
}
