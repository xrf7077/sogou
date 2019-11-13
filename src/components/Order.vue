<template>
  <div class="Order">
    <p class="my_order">
      我的订单
      <span>></span>
      <span>全部订单</span>
    </p>
    <ul>
      <router-link tag="li" to="/payment" @click="handleClcick(Payment)">
        <img src="@/assets/imgs/payment.png" />
        待付款
      </router-link>
      <router-link tag="li" to="/deliver" @click="handleClcick(Deliver)">
        <img src="@/assets/imgs/Deliver.png" />
        待发货
      </router-link>
      <router-link tag="li" to="/receiving" @click="handleClcick(Receiving)">
        <img src="@/assets/imgs/Receiving.png" />
        待收货
      </router-link>
      <router-link tag="li" to="/after_sale" @click="handleClcick(After_sale)">
        <img src="@/assets/imgs/After_sale.png" />
        退款/售后
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.Order {
  background: #fff;
  margin: 0 10px;
  position: relative;
  top: -40px;
  box-sizing: border-box;
  padding: 10px 0;
  border-radius: 2px;
  .my_order {
    font-size: 16px;
    color: #262626;
    font-weight: 700;
    padding-left: 16px;
    span {
      font-size: 14px;
      color: #8c8c8c;
      font-weight: 100;
      float: right;
      margin-right: 6px;
      &:nth-of-type(1) {
      margin-right: 14px;

      }
    }
  }
  ul {
    font-size: 12px;
    width: 100%;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      height: 95px;
      img {
        width: 50px;
        height: 50px;
        display: block;
        margin-left: 20px;
        margin-top: 14px;
      }
    }
  }
}
</style>
