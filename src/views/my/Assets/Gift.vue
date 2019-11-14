<template>
  <div>
    <header>
      <span @click="handleClick">&lt;</span>
      我的礼物
      <p>微信关注商城公众号和小程序，才可以参与给好友送礼物活动和查看礼物记录呦~</p>
    </header>
    <div class="qrcode">
      <div class="img">
        <img src="https://mall01.sogoucdn.com/cdn/h5/static/images/official-accounts.b1be8c47a8d92c4cfba8c483e6951d44.png">
      </div>
      <p>微信搜索 "搜狗有品" 公众号</p>
      <p>关注后可以获取最新优惠活动，不仅有精品推荐
      <p>还有抢优惠券、抽奖、送礼品等活动呦~</p>
    </div>
    <div class="qrcode">
      <div class="img">
        <img src="https://mall01.sogoucdn.com/cdn/h5/static/images/miniprogram.7354c65c6e922880eaf4287c08de4ec4.png" alt="">
      </div>
      <p>微信搜索 "搜狗有品" 小程序</p>
      <p>添加后可以随时给好友送礼物，体验最新送礼方式</p>
      <p>还有更多优惠购物玩法等你来玩~</p>
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
  p {
    width: 14.72rem;
    padding: 0.22rem 0.64rem;
    height: 1.7rem;
    margin: 0 auto;
    background-color: #fff7ea;
    font-size: 0.554rem;
    line-height: 0.85rem;
    text-align: left;
    color: #ffb032;
  }
}
.qrcode {
  width: 14.72rem;
  height: 11.2rem;
  margin: 0 auto;
  margin-bottom: 0.64rem;
  background-color: #fff;
  text-align: center;
  &:nth-of-type(1) {
    margin-top: 1.92rem;
  }
  .img{
    display: inline-block;
    width: 6.31rem;
    height: 6.32rem;
    overflow: hidden;
    margin: 1.066rem 4.2rem .618rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  p{
    width: 14.72rem;
    text-align: center;
    height: .816rem;
    line-height: .816rem;
    font-size: .554rem;
    color: #8c8c8c;
  }
}
</style>
