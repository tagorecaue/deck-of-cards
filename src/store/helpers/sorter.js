export default state => {
  if (!state) return []
  const { cards, rotation, reverse } = state
  return (cards || [])
    // .map(card => ({
    //   ...cardObject(card),
    //   order: getOrder(card, rotation, reverse)
    // }))
    .sort((a, b) => a.order - b.order)
}
