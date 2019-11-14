<template>
  <div>
    <header>个人中心</header>
    <div class="banner">
      <span>注册账号</span>
      <div class="information">
        <img src="../assets/imgs/Head_portrait.png" />
        <i>{{phonenumber}}</i>
      </div>
    </div>
    <Order></Order>
    <Assets></Assets>
  </div>
</template>

<script>
import Assets from '@/components/Assets.vue'
import Order from '@/components/Order.vue'
// import Axios from 'axios'
export default {
  data () {
    return {
      phonenumber: '152****1996'
    }
  },
  components: {
    Assets,
    Order
  }
  // mounted () {
  //   Axios({
  //     method: 'post',
  //     url: '/api/user/baseInfo/get_user_detail',
  //     data: {
  //       'User-Agent':
  //         'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
  //     }
  //   })
  // }
}
</script>

<style lang="scss" scoped>
#main {
  background: #fff;
}
header {
  width: 100%;
  height: 2.048rem;
  text-align: center;
  line-height: 2.048rem;
  font-size: 18px;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 100;
}
.banner {
  margin-top: 1.9rem;
  height: 180px;
  background: url("../assets/imgs/banner.png");
  background-size: 100% 100%;
  position: relative;
  span {
    display: block;
    position: absolute;
    right: 20px;
    top: 20px;
    color: rgba(255, 255, 255, 0.2);
    font-size: 12px;
  }
  .information {
    position: relative;
    img {
      width: 60px;
      margin-top: 40px;
      margin-left: 28px;
      border-radius: 50%;
    }
    i {
      position: absolute;
      color: white;
      top: 58px;
      left: 105px;
      font-size: 18px;
    }
  }
}
</style>
