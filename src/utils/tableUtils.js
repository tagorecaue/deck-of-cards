import { getCardStrength } from './cardUtils'

export const sortTable = (cards, rotationCard) => {
  if (!cards || !cards.length) return []

  return cards.map(card => {
    return {
      ...card,
      strength: getCardStrength(card.code, rotationCard.code)
    }
  }).sort((a, b) => {
    if (a.strength < b.strength) { return -1 }
    if (a.strength > b.strength) { return 1 }
    return 0
  })
}
