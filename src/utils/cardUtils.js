import CONSTANTS from '../config/constants'

export const validateCard = (code) => {
  const value = getCardValue(code)
  const suit = getCardSuit(code)

  const validValues = CONSTANTS.VALID_CARD_VALUES
  const validSuits = CONSTANTS.VALID_CARD_SUITS

  if (value && !validValues.includes(value)) {
    return 'Valid card values are ' + validValues.join(', ')
  }

  if (suit && !validSuits.includes(suit)) {
    return 'Valid card suits are ' + validSuits.join(', ')
  }
  return ''
}

export const getValuesStrengths = (rotationCode) => {
  const defaultStrengths = CONSTANTS.CARD_VALUE_STRENGTH

  if (!rotationCode) {
    return defaultStrengths
  }

  const value = getCardValue(rotationCode)
  const rotatioStrength = defaultStrengths[value]
  const newStrenght = {}

  Object.entries(defaultStrengths).forEach(([key, value]) => {
    if (value < rotatioStrength) {
      newStrenght[key] = value + rotatioStrength
    } else {
      newStrenght[key] = value
    }
  })

  return newStrenght
}

export const getSuitsStrengths = (rotationCode) => {
  const defaultStrengths = CONSTANTS.CARD_SUIT_STRENGTH
  if (!rotationCode) {
    return defaultStrengths
  }
  const suit = getCardSuit(rotationCode)
  const rotatioStrength = defaultStrengths[suit]
  const newStrenght = {}

  Object.entries(defaultStrengths).forEach(([key, value]) => {
    if (value < rotatioStrength) {
      newStrenght[key] = value + rotatioStrength
    } else {
      newStrenght[key] = value
    }
  })

  return newStrenght
}

export const getCardStrength = (code, rotationCode) => {
  if (!code) return ''
  const valuesStrength = getValuesStrengths(rotationCode)
  const suitsStrength = getSuitsStrengths(rotationCode)

  const cardValue = getCardValue(code)
  const cardSuit = getCardSuit(code)

  return String(suitsStrength[cardSuit]) + String(valuesStrength[cardValue])
}

export const getCardValue = (code) => {
  return (code.substring(0, 1) || '').toUpperCase()
}

export const getCardSuit = (code) => {
  return (code.substring(1, 2) || '').toUpperCase()
}

export const getCardObject = (code) => {
  const cardValue = getCardValue(code)
  const cardSuit = getCardSuit(code)

  return {
    value: CONSTANTS.CARD_SUITS_MAP[cardValue],
    suit: CONSTANTS.CARD_SUITS_MAP[cardSuit],
    code: code
  }
}
