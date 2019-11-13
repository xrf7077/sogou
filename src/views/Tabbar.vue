<template>
  <div class="tabbar">
    <ul>
      <router-link tag="li" to="/Home" activeClass="active" class="Home"><span>首页</span></router-link>
      <router-link tag="li" to="/Cate" activeClass="active" class="Cate"><span>分类</span></router-link>
      <router-link tag="li" to="/Cart" activeClass="active" class="Cart"><span>购物车</span></router-link>
      <router-link tag="li" to="/My" activeClass="active" class="My"><span>我的</span></router-link>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.tabbar {
  position: fixed;
  width: 100%;
  height: 53px;
  z-index: 500;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  background: #fff;
  ul {
    list-style: none;
    display: flex;
    height: 53px;
    width: 100%;
    li {
      height: 53px;
      display: block;
      -webkit-box-flex: 1;
      flex: 1;
      padding: 5px 0 0;
      font-size: 0;
      color: #999;
      text-align: center;
      font-size: 10px;
      background-size: 27px;
      background-position: center 10px;
      background-repeat: no-repeat;
      span{
        margin-top: 28px;
        display: block;
      }
      &.active {
        color: rgb(38, 38, 38);
      }
      &.Home {
        background-image: url("../assets/imgs/Home.png");
        &.active {
          background-image: url("../assets/imgs/Home_active.png");
        }
      }
      &.Cate {
        background-image: url("../assets/imgs/Cate.png");
        &.active {
          background-image: url("../assets/imgs/Cate_active.png");
        }
      }
      &.Cart {
        background-image: url("../assets/imgs/Cart.png");
        &.active {
          background-image: url("../assets/imgs/Cart_active.png");
        }
      }
      &.My {
        background-image: url("../assets/imgs/My.png");
        &.active {
          background-image: url("../assets/imgs/My_active.png");
        }
      }
    }
  }
}
</style>
