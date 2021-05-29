<template>
    <div class="add-cards-form">
      <div v-if="label" class="sub-title">{{ label }}</div>
      <input v-model="newCard" maxlength="2" @blur="onBlur" @keyup.enter="onInput"/>
      <button v-if="showButton" :disabled="hasError" type="submit" @click="onInput">Add</button>
      <div v-if="error" class="error-text">{{ error }}</div>
    </div>
</template>

<script>
import { validateCard } from '../utils/cardUtils'

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
    validateCard (code) {
      this.error = validateCard(code)
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
