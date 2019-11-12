<template>
  <div>
      home
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  mounted () {
    if (!this.$store.state.HomeData) {
      this.$store.dispatch('getHomeData')
    } else {
      console.log(this.homeDataGetter)
    }
  },
  computed: {
    ...mapGetters(['homeDataGetter'])
  }
}
</script>

<style>

</style>
