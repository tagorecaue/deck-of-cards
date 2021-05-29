<template>
  <div class="home">
    <Table v-model="orderedCards">
      <div class="accent-text">Rotation Card</div>
      <Card :value="rotationCard"></Card>
    </Table>
    <button @click="onInputOrder">Input Order</button>
    <button @click="onRotationOrder">Rotation Order</button>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'
import Card from '@/components/Card.vue'
import { sortTable } from '@/utils/tableUtils'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'OpenDeck',
  components: {
    Table,
    Card
  },
  data () {
    return {
      selectedOrder: 'input'
    }
  },
  computed: {
    ...mapState({
      cards: state => state.cards,
      rotationCard: state => state.rotationCard
    }),
    orderedCards () {
      if (this.selectedOrder === 'input') {
        return this.cards
      } else {
        return sortTable(this.cards, this.rotationCard)
      }
    }
  },
  mounted () {
    const deckId = this.$route.params.id
    const founded = this.getDeck(deckId)
    if (!founded) {
      this.$toasted.error('Deck not found')
      this.$router.push({
        name: 'create-deck'
      })
    }
  },
  methods: {
    ...mapActions(['getDeck']),
    onInputOrder (card) {
      this.selectedOrder = 'input'
    },
    onRotationOrder (card) {
      this.selectedOrder = 'rotation'
    }
  }
}
</script>
