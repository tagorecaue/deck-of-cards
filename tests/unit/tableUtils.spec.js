// describe('sortTable', () => {
//   const params = {
//     cards: ['7D', 'AS', 'QH', '9S', '6D'],
//     rotation: '2H'
//   }
//   const sortedCards = [
//     {
//       name: 'hearts',
//       order: 3,
//       value: 'Q'
//     },
//     {
//       name: 'diamonds',
//       order: 1007,
//       value: '7'
//     },
//     {
//       name: 'diamonds',
//       order: 1008,
//       value: '6'
//     },
//     {
//       name: 'spades',
//       order: 2998,
//       value: 'A'
//     },
//     {
//       name: 'spades',
//       order: 3003,
//       value: '9'
//     }
//   ]
//   it('should return tempty list', () => {
//     expect(sortTable()).toEqual([])
//     expect(sortTable({ cards: [] })).toEqual([])
//   })
//   it('should return the cards in sorted order', () => {
//     expect(sortTable(params)).toEqual(sortedCards)
//   })
// })
