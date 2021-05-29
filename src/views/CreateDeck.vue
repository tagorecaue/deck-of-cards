<template>
  <div class="home">
    <Table v-model="cards">
      <AddCardsForm @add-card="onAddCard"></AddCardsForm>
    </Table>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'
import AddCardsForm from '@/components/AddCards.vue'
export default {
  name: 'CreateDeck',
  components: {
    Table,
    AddCardsForm
  },
  data () {
    return {
      cards: []
    }
  },
  computed: {

  },
  watch: {
    newCard: {
      handler: 'onValidateNewCard'
    }
  },
  methods: {
    onAddCard (card) {
      this.cards.push(card)
    }
  }
}
</script>
