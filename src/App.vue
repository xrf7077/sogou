<template>
  <div id="app">
    <tabbar v-if="this.isTabbarShowGetter"></tabbar>
    <router-view />
  </div>
</template>

<script>
import tabbar from '@/views/Tabbar'
import { mapGetters } from 'vuex'
import Vue from 'vue'
Vue.component('tabbar', tabbar)
export default {
  computed: {
    ...mapGetters(['isTabbarShowGetter'])
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
