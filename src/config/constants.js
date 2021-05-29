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
  DEFAULT_CARD_VALUE_ORDER: ['2', 'A', 'K', 'Q', 'J', '0', '9', '8', '7', '6', '5', '4', '3'],
  DEFAULT_CARD_SUIT_ORDER: ['H', 'D', 'C', 'S'],
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
