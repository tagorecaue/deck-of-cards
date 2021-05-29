<template>
  <div class="home">
    <Table v-model="cards">
      <CardInput label="Add cards to the pile" show-button @input="onAddCard"></CardInput>
    </Table>
    <CardInput v-model="rotationCardCode" label="Rotation card" @input="onSelectRotationCard"></CardInput>
    <button @click="onSubmitClick">Submit Deck</button>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'
import CardInput from '@/components/CardInput.vue'
import { mapActions } from 'vuex'
import { getCardObject } from '@/utils/cardUtils'
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
  methods: {
    ...mapActions(['createDeck']),
    onAddCard (cardCode) {
      const card = getCardObject(cardCode)
      this.cards.push(card)
    },
    onSelectRotationCard (cardCode) {
      const card = getCardObject(cardCode)
      this.rotationCard = card
    },
    async onSubmitClick () {
      if (!this.cards.length) {
        this.$toasted.error('Please add at least one card to the deck')
        return
      }

      if (!this.rotationCard.code) {
        this.$toasted.error('Please choose a rotation card')
        return
      }
      const createdDeckId = await this.createDeck({ cards: this.cards, rotationCard: this.rotationCard })

      this.$router.push({
        name: 'open-deck',
        params: {
          id: createdDeckId
        }
      })
    }
  }
}
</script>
