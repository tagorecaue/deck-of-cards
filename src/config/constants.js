export default {
  API_URL: 'https://deckofcardsapi.com/api/',
  HTTP_TIMEOUT: 300000,
  VALID_CARD_VALUES: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K'],
  VALID_CARD_SUITS: ['S', 'D', 'C', 'H'],
  CARD_SUITS_MAP: {
    S: 'SPADES',
    D: 'DIAMONDS',
    C: 'CLUBS',
    H: 'HEARTS'
  },
  CARD_VALUES_MAP: {
    A: 'ACE',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    0: 'TEN',
    J: 'JACK',
    Q: 'QUEEN',
    K: 'KING'
  },
  CARD_VALUE_STRENGTH: {
    2: 1,
    A: 2,
    K: 3,
    Q: 4,
    J: 5,
    0: 6,
    9: 7,
    8: 8,
    7: 9,
    6: 10,
    5: 11,
    4: 12,
    3: 13
  },
  CARD_SUIT_STRENGTH: {
    H: 1,
    D: 2,
    C: 3,
    S: 4
  },
  SUITS_ICONS: {
    HEARTS: '♥',
    CLUBS: '♠',
    DIAMONDS: '♦',
    SPADES: '♣'
  },
  SUITS_COLORS: {
    HEARTS: 'red',
    CLUBS: 'black',
    DIAMONDS: 'red',
    SPADES: 'black'
  }
}
