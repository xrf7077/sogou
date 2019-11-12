<template>
  <div id="app">
    <tabbar></tabbar>
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
</style>
