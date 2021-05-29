import { validateCard } from '@/utils/cardUtils'

describe('validateCard', () => {
  const validCards = ['7D', 'QH', '9S', 'AS']
  const invalidCards = ['', 'XX', 'AX', 'XA']
  it('should be valid', () => {
    validCards.forEach(code => {
      expect(validateCard(code)).toBe('')
    })
  })
  it('should return error', () => {
    invalidCards.forEach(code => {
      expect(validateCard(code)).toNotBe('')
    })
  })
})
