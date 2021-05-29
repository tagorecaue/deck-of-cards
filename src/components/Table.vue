<template>
  <div class="card-table">
    <Card v-for="card in cards" :key="card.code" :value="card"></Card>
    <slot></slot>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'Table',
  components: {
    Card
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    cards () {
      return this.value
    }
  }

}
</script>

<style scoped lang="scss">
.card-table {
  min-height: 50vh;
  background-color: #17644d;
  border-radius: 5px;
  padding: 30px;
  border: 1px solid #000;
}
</style>
