<template>
  <div>
    <div class="empty-info">
      <img src="../../assets/imgs/empty-cart.png" alt="">
      <span>您的购物车还是空的~</span>
          <mt-button type="danger" size="small" class="mtbutton">去逛逛</mt-button>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
div {
  height: 3.73rem;
  width: 100%;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
  .empty-info {
      position: relative;
    width: 8.47rem;
    height: 2.13rem;
    font-size: .6rem;
    margin: 0 auto ;
    line-height: 2.13rem;
    text-align: right;
    img{
        display: inline-block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 1.73rem;
        height: 1.73rem;
    }
  }
  .mtbutton{
      position: absolute;
      margin:0 auto;
      bottom:0;
      left:50%;
      transform: translateX(-50%)
  }
}
</style>
