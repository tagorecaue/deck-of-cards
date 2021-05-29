export default {
  SET_STATE (state, { hash, cards, rotation }) {
    state.hash = hash
    state.cards = cards
    state.rotation = rotation
  },
  SET_LOADING (state, loading) {
    state.loading = loading
  }
}
