import CONSTANTS from '../config/constants'

export const validateCard = (code) => {
  const { value, suit } = splitCardCode(code)

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

export const getArrayOrders = (array, value) => {
  if (!value) {
    return array
  }
  const arrayClone = [...array]
  const orderIndex = arrayClone.findIndex(item => item === value)
  const len = arrayClone.length
  const firstPart = arrayClone.splice(orderIndex, len)
  const secondPart = arrayClone
  const newArrayOrders = [...firstPart, ...secondPart]
  return newArrayOrders
}

export const getCardOrder = (code, rotationCode) => {
  if (!code) return ''
  const { value: rotationValue, suit: rotationSuit } = splitCardCode(rotationCode)

  const valuesOrders = getArrayOrders(CONSTANTS.DEFAULT_CARD_VALUE_ORDER, rotationValue)
  const suitsOrders = getArrayOrders(CONSTANTS.DEFAULT_CARD_SUIT_ORDER, rotationSuit)

  const { value: cardValue, suit: cardSuit } = splitCardCode(code)

  const valueOrder = valuesOrders.findIndex(item => item === cardValue)
  const suitOrder = suitsOrders.findIndex(item => item === cardSuit)

  return { valueOrder, suitOrder }
}

export const splitCardCode = (code) => {
  return {
    value: (code.substring(0, 1) || '').toUpperCase(),
    suit: (code.substring(1, 2) || '').toUpperCase()
  }
}

export const getCardObject = (code) => {
  const { value, suit } = splitCardCode(code)

  return {
    value: CONSTANTS.CARD_VALUES_MAP[value],
    suit: CONSTANTS.CARD_SUITS_MAP[suit],
    code: code
  }
}
