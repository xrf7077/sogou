<template>
  <div>
    <header>
      <span @click="handleClick">&lt;</span>
      我的S码
    </header>
    <nav>
      <p>感谢您选择我们</p>
      <p>使用S码无需预约，可以优先购买商品</p>
      <input type="text" placeholder="请输入S码以绑定" />
      <button>绑定S码</button>
    </nav>
    <main>
      <p>我的S码</p>
      <img src="@/assets/imgs/code_banner.png" alt />
      <p>暂无可用S码</p>
    </main>
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
nav {
  text-align: center;
  // width: 16rem;
  height: 10.66667rem;
  background: #fff;
  p {
    &:nth-of-type(1) {
      padding-top: 1.57867rem;
      font-size: 0.768rem;
      color: #262626;
      height: 28px;
      line-height: 28px;
    }
    &:nth-of-type(2) {
      margin-top: 0.29867rem;
      height: 22.4px;
      line-height: 22.4px;
      font-size: 0.59733rem;
      color: #595959;
    }
  }
  input {
    font-size: 16px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    margin-top: 0.93867rem;
    width: 13.22667rem;
    height: 1.92rem;
    line-height: 1.92rem;
    background: #f5f5f5;
    border-radius: 0.08533rem;
    text-align: center;
    color: #262626;
    border: 0;
    &:focus {
      outline:none
    }
    &::placeholder {
      // line-height: 1.92rem;
      font-size: 15px;
      color: #ccc;
      position: relative;
      top: 2px;
    }
  }
  button {
    margin-top: 0.85333rem;
    background: #ea413c;
    color: #fff;
    width: 8.53333rem;
    height: 1.70667rem;
    line-height: 1.70667rem;
    font-size: 0.68267rem;
    border: 0;
    border-radius: 0.85333rem;
    text-align: center;
  }
}
main {
  height: 13.8rem;
  padding: 0 0.64rem 0.64rem;
  background: #fff;
  border-top: 0.42667rem solid #f5f5f5;
  p {

    &:nth-of-type(1) {
      height: 1.92rem;
      line-height: 1.92rem;
      font-size: 0.68267rem;
      color: #262626;
    }
    &:nth-of-type(2) {
      text-align: center;
      font-size: 0.59733rem;
      color: #868686;
      margin-top: 0.53333rem;
    }
  }
  img {
    margin-top: 1.28rem;
    width: 5.3334rem;
    height: 3.6267rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
