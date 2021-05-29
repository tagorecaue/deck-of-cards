<template>
  <div class="card" :data-icon="suitIconMap[suit]">
    {{value}}
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    value: {
      type: String,
      default: ''
    },
    suit: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      suitIconMap: {
        HEARTS: '♥',
        CLUBS: '♠',
        DIAMONDS: '♦',
        SPADES: '♣'
      },
      suitColorMap: {
        HEARTS: 'red',
        CLUBS: 'black',
        DIAMONDS: 'black',
        SPADES: 'red'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.text {
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  position: relative;
  height: 100%;
  width: 100%;
  border: 1px solid black;
  border-radius: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
}

.card.red {
  color: red;
}

.card.black {
  color: black;
}

.card::before,
.card::after {
  position: absolute;
  content: attr(data-icon);
  font-size: 1rem;
}

.card::before {
  top: .5rem;
  left: .5rem
}

.card::after {
  bottom: .5rem;
  right: .5rem;
  transform: rotate(180deg);
}
</style>
