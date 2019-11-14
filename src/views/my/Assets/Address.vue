<template>
  <div class="all">
    <header>
      <span @click="handleClick">&lt;</span>
      地址管理
    </header>
    <main>
      <img src="@/assets/imgs/empty.png" alt="">
      <p>当前没有地址，点击下方按钮添加</p>
    </main>
    <footer>
      <button>+添加新地址</button>
    </footer>
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
#app {
  height: 100%;

}
.all{
  height: 100%;
  display: flex;
  flex-direction: column
}
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
main {
  flex:  1;
  background: #fff;
  img{
    width: 2.944rem;
    height: 4.5867rem;
    margin-top: 2.56rem;
    margin-left: 50%;
    transform: translateX(-50%)
  }
  p{
    font-size: .55467rem;
    color: #595959;
    margin-top: .68267rem;
    text-align: center
  }
}

footer {
  // position: fixed;
  // bottom: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 0.64rem;
  background: #fff;
  button {
    border-radius: .08533rem;
    width: 100%;
    background: #ea413c;
    padding: 0 .68267rem;
    height: 2.13333rem;
    font-size: .68267rem;
    line-height: 2.09067rem;
    text-align: center;
    border: 1PX solid #e8e8e8;
    box-sizing: border-box;
    color: #fff;
  }
}
</style>
