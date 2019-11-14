<template>
  <div>
    <header>
      <span @click="handleClick">&lt;</span>
      我的订单
    </header>
    <nav>
      <router-link tag="li" activeClass="active" to="/Order">
        <span>全部</span>
      </router-link>
      <router-link tag="li" activeClass="active" to="/Order/payment">
        <span>待付款</span>
      </router-link>
      <router-link tag="li" activeClass="active" to="/Order/deliver">
        <span>待发货</span>
      </router-link>
      <router-link tag="li" activeClass="active" to="/Order/receiving">
        <span>已发货</span>
      </router-link>
      <router-link tag="li" activeClass="active" to="/Order/after_sale">
        <span>已完成</span>
      </router-link>
    </nav>
    <router-view v-if="$store.state.isMyShow"></router-view>
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
nav {
  display: flex;
  height: 1.49333rem;
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  left: 0;
  z-index: 100;
  background: #fff;
  li {
    flex: 1;
    text-align: center;
    font-size: 0.59733rem;
    color: #262626;
    padding-top: 0.32rem;
  }
}
.router-link-exact-active {
  color: #ea413c;
  span {
    border-bottom: 0.08533rem solid #ea413c;
    padding-bottom: 6px;
  }
}
.img{
  img {
    width: 2.944rem;
    height: 4.5867rem;
    margin-top: 43%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  p {
    text-align: center;
    font-size: .59733rem;
    color: #262626;
    margin-top: 1.06667rem;
  }
  span {
    display: block;
    width: 4.18133rem;
    height: 1.408rem;
    line-height: 1.408rem;
    border: .04267rem solid #ea413c;
    border-radius: .08533rem;
    text-align: center;
    background: #fff;
    color: #ea413c;
    font-size: .59733rem;
    margin: .81067rem auto 0;

  }
}

</style>
