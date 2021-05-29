<template>
  <div class="home">
    <Table v-model="cards">
      <CardInput label="Add cards to the pile" show-button @input="onAddCard"></CardInput>
    </Table>
    <CardInput v-model="rotationCard" label="Rotation card"></CardInput>
    <button :disabled="allowSubmit" @click="onSubmitClick">Submit Deck</button>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'
import CardInput from '@/components/CardInput.vue'
import { mapActions } from 'vuex'
export default {
  name: 'CreateDeck',
  components: {
    Table,
    CardInput
  },
  data () {
    return {
      cards: [],
      rotationCard: ''
    }
  },
  watch: {
    newCard: {
      handler: 'onValidateNewCard'
    }
  },
  methods: {
    ...mapActions(['createDeck']),
    onAddCard (card) {
      this.cards.push(card)
    },
    async onSubmitClick () {
      if (!this.cards.length) {
        this.$toasted.error('Please add at least one card to the deck')
        return
      }

      if (!this.rotationCard) {
        this.$toasted.error('Please choose a rotation card')
        return
      }
      const createdDeck = await this.createDeck(this.cards, this.rotationCard)

      this.$router.push({
        name: 'open-deck',
        params: {
          id: createdDeck.id
        }
      })
    }
  }
}
</script>
