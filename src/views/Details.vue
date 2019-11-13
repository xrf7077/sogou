<template>
  <div>
    <header v-if="detail">
      <swiper id="banner" :options='options' :cName='cName' :pagination='pagination'>
        <div class="swiper-slide" v-for="(data,i) in detail.data.product.image" :key="i">
          <img :src="data" alt="" srcset="">
        </div>
      </swiper>
      <div v-if="this.isPlayerShow" class="player-container">
        <div class="closePlayer" @click="isPlayerShow=false">&chi;</div>
        <video id="video" :src="detail.data.product.video" controls = "true" preload="auto" autoplay="autoplay" muted loop>
          您的浏览器版本过低，请升级您的浏览器
        </video>
      </div>
      <div class="playerBtn" @click="isPlayerShow=!isPlayerShow">
      </div>
    </header>
    <div class="detail-info" v-if="this.priceInfo">
      <div class="detail-content">
        <div class="detail-name">{{detail.data.product.name}}</div>
        <div class="detail-desc">{{detail.data.product.desc}}</div>
      </div>
      <div class="detail-price-row">
        <span>￥</span>
        <span>{{parseInt(priceInfo.data.skuSalePriceRange[0]/100)+'.00'}}</span>
      </div>
    </div>
    <div v-html="detail.data.product.pcDetailDesc" v-if="detail"></div>
    <footer>
      <div class="footer-bar">
        <div class="icon-box">
          <div>首页</div>
          <div>客服</div>
          <div>购物车</div>
        </div>
        <div class="btn-box">
          <div>加入购物车</div>
          <div>立即购买</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Axios from 'axios'
import swiper from '@/components/Swiper'
export default {
  data () {
    return {
      isPlayerShow: 0, // 是否显示视频播放模块
      pagination: true, // 以下为swiper相关
      cName: 'swp',
      options: {
        loop: 0,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      },
      detail: null, // 商品数据
      priceInfo: null, // 价格信息
      time: 0
    }
  },
  beforeCreate () {
    Axios(`/api/product/product/product_detail?c=h5&s=20000&t=1573561721260&v=1.0&product_id=${this.$route.params.id}`)
      .then(res => {
        this.detail = res.data
        console.log(this.detail)
      })
    Axios(`/api/product/sku/sku_stock_detail?c=h5&s=20000&t=1573564055256&v=1.0&product_id=${this.$route.params.id}&stock_type=1`)
      .then(res => {
        this.priceInfo = res.data
        console.log(this.priceInfo)
      })
    // console.log(document.getElementById('#video').Media.duration)
    this.$store.commit('setIsTabbarShow', false)
  },
  beforeDestroy () {
    this.$store.commit('setIsTabbarShow', true)
  },
  components: {
    swiper
  }
}
</script>

<style lang='scss' scoped>
.detail-info{
  padding: 15px 20px;
  .detail-content{
    .detail-name{
      font-size: 17px;
      line-height: 1.6;
    }
    .detail-desc{
      margin-top: 7.5px;
      font-size: 13px;
    }
  }
  .detail-price-row{
    margin-top: 3.91%;
    span{
      color: #EA413C;
      font-size: 18px;
      &:nth-of-type(2){
        font-size: 21px;
      }
    }
  }
}
footer{
  background: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 49.8px;
  .footer-bar{
    width: 100%;
      height: 100%;
    display: flex;
    .icon-box{
      width: 37.8%;
      display: flex;
      border-right: 1px solid #ccc;
      box-sizing: border-box;
      height: 100%;
      div{
        flex: 1;
        font-size: 12px;
        text-align: center;
        color: #595959;
      }
    }
    .btn-box{
      width: 62.2%;
      display: flex;
      height: 100%;
      div{
        flex: 1;
        text-align: center;
        line-height: 50px;
        color: #595959;
        &:last-of-type{
          background-color: #EA413C;
          color: #fff;
        }
      }
    }
  }
}
.closePlayer{
  width: 6.4%;
  height: 6.4%;
  position: absolute;
  top: 5%;
  right: 5%;
  background: rgba(180,179,179,.4);
  border-radius: 50%;
  z-index: 100;
  text-align: center;
  line-height: 110%;
  color: #ccc;
}
.swiper-slide{
  width: 100%;
  img{
    width: 100%;
  }
}
.player-container{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 100;
  video{
    width: 100%;
    height: 100%;
    background: #000;
    box-sizing: border-box;
  }
}
header{
  position: relative;
}
.playerBtn{
  width: 26.1%;
  height: 11.6%;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  background-image: url('../assets/imgs/player.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 99;
}
</style>
