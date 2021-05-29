import { getCardOrder } from './cardUtils'

export const sortTable = (cards, rotationCard) => {
  if (!cards || !cards.length) return []

  return cards.map(card => {
    return {
      ...card,
      ...getCardOrder(card.code, rotationCard.code)
    }
  }).sort((a, b) => {
    return a.valueOrder - b.valueOrder
  }).sort((a, b) => {
    return a.suitOrder - b.suitOrder
  })
}
