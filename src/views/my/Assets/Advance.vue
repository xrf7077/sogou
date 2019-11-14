<template>
  <div>
    <header>
      <span @click="handleClick">&lt;</span>
      我的预售
    </header>
    <div class="img">
      <img src="@/assets/imgs/empty.png" alt />
      <p>您当前还没有订单哦~</p>
      <span>去逛逛</span>
    </div>
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
div.img {
  img {
    width: 2.944rem;
    height: 4.5867rem;
    margin-top: 43%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  p {
    text-align: center;
    font-size: 0.59733rem;
    color: #262626;
    margin-top: 1.06667rem;
  }
  span {
    display: block;
    width: 4.18133rem;
    height: 1.408rem;
    line-height: 1.408rem;
    border: 0.04267rem solid #ea413c;
    border-radius: 0.08533rem;
    text-align: center;
    background: #fff;
    color: #ea413c;
    font-size: 0.59733rem;
    margin: 0.81067rem auto 0;
  }
}
</style>
