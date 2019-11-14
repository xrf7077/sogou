<template>
  <div>
    <header>
      <span @click="handleClick">&lt;</span>
      优惠券
    </header>
    <nav>
      <router-link tag="li"  activeClass="active" to="/coupon/not_used">
        <span>未使用</span>
      </router-link>
      <router-link tag="li"  activeClass="active" to="/coupon/Already">
        <span>已使用</span>
      </router-link>
      <router-link tag="li"  activeClass="active" to="/coupon/Overdue">
        <span>已失效</span>
      </router-link>
    </nav>
    <router-view></router-view>

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
  // line-height: 1.49333rem;
  li {
    flex: 1;
    background: #fff;
    text-align: center;
    font-size: 0.59733rem;
    color: #262626;

  }
  .router-link-exact-active {
    color: #ea413c;
    span {
      border-bottom: 0.08533rem solid #ea413c;
      padding-bottom: 6px;
    }
  }
}
</style>
