<template>
  <div id="app">
    <tabbar v-if="isTabbarShow"></tabbar>
    <tabbar v-if="$store.state.isTabbarShow"></tabbar>
    <router-view />
  </div>
</template>

<script>
import tabbar from '@/views/Tabbar'
import Vue from 'vue'
import { mapState } from 'vuex'
Vue.component('tabbar', tabbar)
export default {
  computed: {
    ...mapState(['isTabbarShow'])
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,body {
  height: 100%;
}
body {
 background-color: rgb(245, 245, 245);
 font-family: -apple-system-font,"Helvetica Neue",sans-serif;
}
li {
  list-style: none
}
</style>
