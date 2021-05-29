import { sortTable } from '@/utils/tableUtils'
import { getCardObject } from '@/utils/cardUtils'

const testCardsOrder = (cards, rotationCode, expectedResult) => {
  const rotationCard = {
    code: rotationCode
  }
  const sortedCodes = sortTable(cards, rotationCard).map(item => item.code)
  expect(sortedCodes).toEqual(expect.arrayContaining(expectedResult))
}

describe('sortTable', () => {
  const cards = ['7D', 'AS', 'QH', '9S', '6D'].map(code => getCardObject(code))
  const cards2 = ['AS', 'AD', 'AC', 'KH', 'KS'].map(code => getCardObject(code))

  it('table should be ordered', () => {
    testCardsOrder(cards, '2H', ['QH', '7D', '6D', 'AS', '9S'])
    testCardsOrder(cards, '10C', ['9S', 'AS', 'QH', '7D', '6D'])
    testCardsOrder(cards2, '2H', ['KH', 'AD', 'AC', 'AS', 'KS'])
  })
})
