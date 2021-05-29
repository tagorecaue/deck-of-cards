<template>
  <div class="home">
    <Table v-model="cards">
      <div class="sub-title">Rotation Card</div>
      <Card :value="rotationCard"></Card>
    </Table>
    <button @click="onSubmitClick">Submit Deck</button>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'
import Card from '@/components/Card.vue'
import { mapActions } from 'vuex'
export default {
  name: 'OpenDeck',
  components: {
    Table,
    Card
  },
  data () {
    return {
      cards: [],
      rotationCard: {}
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
