<template>
  <div>
    <div class="img">
      <img src="@/assets/imgs/empty.png" alt />
      <p>未找到相应优惠券~</p>
      <p>关注参与搜狗官方商城微信公众号和商城社区活动可有机会获得优惠券呦~</p>
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
  }
}
</script>
<style lang="scss" scoped>
.img {
  background: #fff;
  height: 24rem;
  padding: 0.42667rem;
  box-sizing: border-box;
  img {
    width: 2.944rem;
    height: 4.5867rem;
    margin-top: 15%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  p {
    text-align: center;
    font-size: 0.55467rem;
    color: #595959;
    margin-top: 0.68267rem;
    &:nth-of-type(2) {
      padding: 0 1.49333rem;
      margin-top: 0.32rem;
      font-size: 13px;
      line-height: 0.72533rem;
      text-align: center;
    }
  }
}
</style>
