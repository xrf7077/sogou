<template>
  <div>
    <header>
      <span @click="handleClick">&lt;</span>
      关于商城
    </header>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    this.$store.state.isTabbarShow = false
  },
  methods: {
    handleClick () {
      this.$router.push('/my')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 2.048rem;
  text-align: center;
  line-height: 2.048rem;
  font-size: 18px;
  background: #fff;
  position: relative;
  span {
    position: absolute;
    left: 20px;
    font-size: 0.768rem;
    color: rgb(51, 51, 51);
  }
}
</style>
