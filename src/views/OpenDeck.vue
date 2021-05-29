<template>
  <div class="home">
    <Table v-model="cards">
      <div class="sub-title">Rotation Card</div>
      <Card :value="rotationCard"></Card>
    </Table>
    <button @click="onInputOrder">Input Order</button>
    <button @click="onRotationOrder">Rotation Order</button>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'
import Card from '@/components/Card.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'OpenDeck',
  components: {
    Table,
    Card
  },
  computed: {
    ...mapState({
      cards: state => state.cards,
      rotationCard: state => state.rotationCard
    })
  },
  mounted () {
    const deckId = this.$route.params.id
    this.getDeck(deckId)
  },
  methods: {
    ...mapActions(['getDeck']),
    onInputOrder (card) {
      // TODO
    },
    onRotationOrder (card) {
      // TODO
    }
  }
}
</script>
