<template>
  <div class="Assets">
    <ul>
      <router-link tag="li" to="/coupon/not_used">
        <img src="@/assets/imgs/coupon.png" alt />
        <p>我的优惠券</p>
        <span>></span>
      </router-link>
      <router-link tag="li" to="/code">
        <img src="@/assets/imgs/code.png" alt />
        <p>S码通道</p>
        <span>></span>
      </router-link>
      <router-link tag="li" to="advance">
        <img src="@/assets/imgs/advance.png" alt />
        <p>我的预售</p>
        <span>></span>
      </router-link>
      <router-link tag="li" to="gift">
        <img src="@/assets/imgs/gift.png" alt />
        <p>我的礼物</p>
        <span>></span>
      </router-link>
      <router-link tag="li" to="address">
        <img src="@/assets/imgs/address.png" alt />
        <p>地址管理</p>
        <span>></span>
      </router-link>
      <li @click="handleTo">
        <img src="@/assets/imgs/opinion.png" alt />
        <p>意见反馈</p>
        <span>></span>
      </li>
      <router-link tag="li" to="shopping">
        <img src="@/assets/imgs/shopping.png" alt />
        <p>关于商城</p>
        <span>></span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    handleTo () {
      window.open('https://chat56.live800.com/live800/chatClient/chatbox.jsp?companyID=1056730&configID=195273&jid=9447871852&s=1&info=userId%3D51633%26name%3D51633')
    }
  }
}
</script>

<style lang="scss" scoped>
.Assets {
  background: #fff;
  position: relative;
  top: -30px;
  margin: 0 10px;
  box-sizing: border-box;
  padding: 0 10px;
  border-radius: 3px;
  margin-bottom: 70px;
  ul {
    font-size: 13px;
    li {
      height: 2.13333rem;
      line-height: 2.13333rem;
      border-bottom: 1px solid #f5f5f5;
      position: relative;
      font-size: 0.61rem;
      span {
        position: absolute;
        right: 10px;
        font-size: 0.94rem;
        color: rgb(140, 140, 140);
      }
      p{
        display: inline-block;
        margin-left: 1.19467rem
      }
      img {
        width: 0.768rem;
        height: 0.768rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%)
      }
    }
  }
}
</style>
