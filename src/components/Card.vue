<template>
  <span :class="['card', suitsColors[value.suit]]" :data-value="cardValue">
    {{suitsIcons[value.suit]}}
  </span>
</template>

<script>
import CONSTANTS from '../config/constants'
export default {
  name: 'Card',
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    cardValue () {
      if (!this.value.code) {
        return ''
      }
      let code = this.value.code.substring(0, 1)
      code = code === '0' ? '10' : code
      return `${code} ${this.suitsIcons[this.value.suit]}`
    }
  },
  data () {
    return {
      suitsIcons: CONSTANTS.SUITS_ICONS,
      suitsColors: CONSTANTS.SUITS_COLORS
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  margin: 10px;
  background-color: #FFF;
  position: relative;
  height: 250px;
  width: 150px;
  border-radius: 5px;
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
  content: attr(data-value);
  font-size: 24px;
}

.card::before {
  top: 10px;
  left: 10px
}

.card::after {
  bottom: 10px;
  right: 10px;
  transform: rotate(180deg);
}
</style>
