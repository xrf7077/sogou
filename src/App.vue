<template>
  <div id="app">
    <tabbar v-if="$store.state.isTabbarShow"></tabbar>
    <router-view />
  </div>
</template>

<script>
import tabbar from '@/views/Tabbar'
import Vue from 'vue'
Vue.component('tabbar', tabbar)
export default {}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
 background-color: rgb(245, 245, 245);
 font-family: -apple-system-font,"Helvetica Neue",sans-serif;
}
li {
  list-style: none
}
</style>
