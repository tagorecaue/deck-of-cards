<template>
    <div class="add-cards-form">
      <div class="sub-title">Add cards to the pile</div>
      <input v-model="newCard" maxlength="2" @keyup.enter="onAddCard"/>
      <button :disabled="hasError" type="submit" @click="onAddCard">Add</button>
      <div v-if="error" class="error-text">{{ error }}</div>
    </div>
</template>

<script>
export default {
  name: 'AddCards',
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
    newCard: {
      handler: 'onValidateNewCard'
    }
  },
  methods: {
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
    onAddCard () {
      const card = this.newCard

      if (!this.validateCard(card)) {
        return
      }

      this.$emit('add-card', card)
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
