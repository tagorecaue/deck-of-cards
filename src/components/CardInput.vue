<template>
    <div class="add-cards-form">
      <div v-if="label" class="sub-title">{{ label }}</div>
      <input v-model="newCard" maxlength="2" @blur="onBlur" @keyup.enter="onInput"/>
      <button v-if="showButton" :disabled="hasError" type="submit" @click="onInput">Add</button>
      <div v-if="error" class="error-text">{{ error }}</div>
    </div>
</template>

<script>
import CONSTANTS from '../config/constants'
export default {
  name: 'CardInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    showButton: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      newCard: '',
      validValues: CONSTANTS.VALID_CARD_VALUES,
      validSuits: CONSTANTS.VALID_CARD_SUITS,
      suitsMap: CONSTANTS.CARD_SUITS_MAP,
      valuesMap: CONSTANTS.CARD_VALUES_MAP,
      error: ''
    }
  },
  computed: {
    hasError () {
      return Boolean(this.error) || this.newCard.length !== 2
    },
    cardValue () {
      return (this.newCard.substring(0, 1) || '').toUpperCase()
    },
    cardSuit () {
      return (this.newCard.substring(1, 2) || '').toUpperCase()
    }
  },
  watch: {
    value: {
      handler: 'onValueChange',
      immediate: true
    },
    newCard: {
      handler: 'onValidateNewCard'
    }
  },
  methods: {
    onValueChange (val) {
      this.newCard = val
    },
    onValidateNewCard (val) {
      this.validateCard(val)
    },
    validateCard (card) {
      const value = this.cardValue
      const suit = this.cardSuit

      if (value && !this.validValues.includes(value)) {
        this.error = 'Valid card values are ' + this.validValues.join(', ')
        return false
      }

      if (suit && !this.validSuits.includes(suit)) {
        this.error = 'Valid card suits are ' + this.validSuits.join(', ')
        return false
      }
      this.error = ''
      return true
    },
    onBlur () {
      if (!this.showButton) {
        this.onInput()
      }
    },
    onInput () {
      const cardCode = this.newCard.toUpperCase()
      this.validateCard(cardCode)

      if (this.hasError) {
        return
      }

      this.$emit('input', cardCode)

      this.$emit('add-card', {
        value: this.valuesMap[this.cardValue],
        suit: this.suitsMap[this.cardSuit],
        code: cardCode
      })
      this.newCard = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.add-cards-form {
  > input {
    text-transform: uppercase;
  }
}
</style>
