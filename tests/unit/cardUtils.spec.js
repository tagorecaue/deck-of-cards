import { validateCard, getArrayOrders } from '@/utils/cardUtils'

describe('validateCard', () => {
  const validCards = ['7D', 'QH', '9S', 'AS']
  const invalidCards = ['C', 'XX', 'AX', 'XA']
  it('should be valid', () => {
    validCards.forEach(code => {
      expect(validateCard(code)).toBe('')
    })
  })
  it('should return error', () => {
    invalidCards.forEach(code => {
      expect(validateCard(code)).not.toBe('')
    })
  })
})

describe('getArrayOrders', () => {
  const baseArray = ['A', 'B', 'C', '1', '2', '3']

  it('show preserve same order', () => {
    expect(getArrayOrders(baseArray, '')).toBe(baseArray)
    expect(getArrayOrders(baseArray, 'A')).toBe(baseArray)
  })
})
