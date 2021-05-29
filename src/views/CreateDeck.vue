<template>
  <div class="home">
    <Table v-model="cards">
      <CardInput label="Add cards to the pile" show-button @add-card="onAddCard"></CardInput>
    </Table>
    <CardInput v-model="rotationCardCode" label="Rotation card" @add-card="onSelectRotationCard"></CardInput>
    <button @click="onSubmitClick">Submit Deck</button>
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
      rotationCard: {},
      rotationCardCode: ''
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
    onSelectRotationCard (card) {
      this.rotationCard = card
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
