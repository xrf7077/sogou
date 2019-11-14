<template>
  <div>
    <header>
      <span @click="handleClick">&lt;</span>
      关于商城
    </header>
    <nav>
      <div class="box">
        <img src alt />
        <p>搜狗有品</p>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
  beforeCreate () {
    this.$store.state.isTabbarShow = false
  },
  destroyed () {
    this.$store.state.isTabbarShow = true
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
nav {
  background: #fff;
  overflow: hidden;
  .box {
    margin-top: 0.7rem;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 4.90667rem;
    height: 4.90667rem;
    border-radius: 2.45333rem;
    background: #f5f5f5;
    align-self: center;
    flex-direction: column;
    display: flex;
    justify-content: center;
    img {
      margin-top: -0.7rem;
      margin-left: 50%;
      transform: translateX(-50%);
      width: 2rem;
      height: 2rem;
    }
    p {
      font-size: 0.68267rem;
      color: #262626;
      text-align: center;
      margin-top: 0.42667rem;
    }
  }
}
</style>
