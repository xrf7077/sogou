<template>
  <div>
    <img src="@/assets/imgs/empty.png" alt />
    <p>您当前还没有订单哦~</p>
    <span>去逛逛</span>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    this.$store.state.isMyShow = false
  }
}
</script>
<style lang="scss" scoped>
div{
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
