<template>
  <v-input :value="value" @change="onChange"></v-input>
</template>

<script>
export default {
  name: 'Card',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onChange (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
