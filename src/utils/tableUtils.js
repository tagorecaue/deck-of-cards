import { getCardStrength } from './cardUtils'

export const sortTable = ({ cards, rotationCard, rotationBased }) => {
  if (!cards || !cards.lenght) return []

  if (rotationBased) {
    return cards
      .map(card => {
        return {
          ...card,
          strength: getCardStrength(card.code)
        }
      })
      .sort((a, b) => {
        if (a < b) { return -1 }
        if (a > b) { return 1 }
        return 0
      })
  } else {
    return cards
  }
}
