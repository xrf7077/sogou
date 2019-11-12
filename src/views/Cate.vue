<template>
  <div>
      cate
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  mounted () {
    if (!this.$store.state.CateData) {
      this.$store.dispatch('getCateData')
    } else {
      console.log(this.cateDataGetter)
    }
  },
  computed: {
    ...mapGetters(['cateDataGetter'])
  }
}
</script>

<style>

</style>
