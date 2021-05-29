<template>
  <div id="app" class="application--wrap">
    <div class="title">
      Deck of cards
      <span class="accent-text">
      {{loadingMessage}}
      </span>
    </div>

    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState({
      loading: state => state.loading
    }),
    loadingMessage () {
      return this.loading ? 'Loading...' : ''
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/App.scss';
</style>
