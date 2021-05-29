export default {
  SET_DECK (state, { deckId, cards, rotationCard }) {
    state.deckId = deckId
    state.cards = cards
    state.rotationCard = rotationCard
  },
  SET_LOADING (state, loading) {
    state.loading = loading
  }
}
