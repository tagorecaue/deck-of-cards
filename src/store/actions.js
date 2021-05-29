import api from '@/services'

const createDeck = async ({ dispatch, commit }, { cards, rotationCard }) => {
  dispatch('isLoading', true)
  const { deck_id: deckId } = await api.createDeck(cards, rotationCard)
  await api.createPile(deckId, 'table', cards)
  await api.createPile(deckId, 'rotation', [rotationCard])
  commit('SET_DECK', { deckId, cards, rotationCard })
  dispatch('isLoading', false)
  return deckId
}

const isLoading = ({ commit }, value) => {
  commit('SET_LOADING', value)
}

export default {
  createDeck,
  isLoading
}
