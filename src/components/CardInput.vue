<template>
    <div class="add-cards-form">
      <div v-if="label" class="sub-title">{{ label }}</div>
      <input v-model="newCard" maxlength="2" @blur="onBlur" @keyup.enter="onInput"/>
      <button v-if="showButton" :disabled="hasError" type="submit" @click="onInput">Add</button>
      <div v-if="error" class="error-text">{{ error }}</div>
    </div>
</template>

<script>
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
      validValues: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K'],
      validSuits: ['S', 'D', 'C', 'H'],
      error: ''
    }
  },
  computed: {
    hasError () {
      return Boolean(this.error) || this.newCard.length !== 2
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
      const value = (card.substring(0, 1) || '').toUpperCase()
      const suit = (card.substring(1, 2) || '').toUpperCase()

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
      const card = this.newCard.toUpperCase()
      this.validateCard(card)

      if (this.hasError) {
        return
      }

      this.$emit('input', card)
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
