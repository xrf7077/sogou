<template>
  <div v-if="detail">
    <div class="goBack" @click="goBack">></div>
    <header>
      <!-- Swiper Component ↓ -->
      <swp id="banner" :options="options" :cName="cName" :pagination="pagination">
        <div class="swiper-slide" v-for="(data,i) in detail.data.product.image" :key="i">
          <img :src="data.img" alt srcset />
        </div>
      </swp>
      <!-- Video ↓ -->
      <div v-if="this.isPlayerShow" class="player-container">
        <div class="closePlayer" @click="isPlayerShow=false">&chi;</div>
        <video
          id="video"
          :src="detail.data.product.video"
          controls="true"
          preload="auto"
          autoplay="autoplay"
          muted
          loop
        >您的浏览器版本过低，请升级您的浏览器</video>
      </div>
      <!-- Video Btn ↓ -->
      <div class="playerBtn" @click="isPlayerShow=!isPlayerShow" v-if="detail.data.product.video">38'24''</div>
    </header>
    <div class="detail-info">
      <div class="detail-content">
        <div class="detail-name">{{detail.data.product.name}}</div>
        <div class="detail-desc">{{detail.data.product.desc}}</div>
      </div>
      <div class="detail-price-row">
        <span>￥</span>
        <span>{{detail.data.product.salePrice+'0'}}</span>
      </div>
    </div>

    <div class="detail-info-title">商品详情</div>
    <div v-html="detail.data.product.pcDetailDesc" v-if="detail"></div>
    <footer>
      <div class="footer-bar">
        <div class="icon-box">
          <div @click="toHome">首页</div>
          <div>客服</div>
          <div @click="toCart">购物车</div>
        </div>
        <div class="btn-box">
          <div @click="showModal(2)">加入购物车</div>
          <div @click="showModal(1)">立即购买</div>
        </div>
      </div>
    </footer>
    <div :class="isModalShow?'modal':'modal hidden'">
      <div class="detail-select-container">
        <div>
          <span class="close-button" @click="closeModal">&times;</span>
          <div class="desc">
            <div class="pic">
              <img :src="detail.data.skus[itemInfo.index].image" v-if="itemInfo.skuId" />
            </div>
            <div class="text">
              <div class="name">{{detail.data.product.name}}</div>
              <div class="price">
                <span>￥</span>
                <span>{{detail.data.product.salePrice+'.00'}}</span>
              </div>
            </div>
          </div>
          <div class="choose-color">
            <p>颜色</p>
            <div class="color-list">
              <div
                v-for="(data, i) in detail.data.skus"
                :key="data.skuId"
                @click="chooseColor(data.skuId,i)"
                :class="(i===itemInfo.index)?'skuChecked':'0'"
              >{{data.skuName}}</div>
            </div>
          </div>
          <div class="set-num">
            <p>数量</p>
            <div>
              <div @click="minus">-</div>
              <input type="number" name id :value="itemInfo.num" />
              <div @click="add">+</div>
            </div>
          </div>
        </div>
        <div class="commit overlay">
          <div class="add-to-cart" v-if="showATC" @click="closeModal">加入购物车</div>
          <div class="buy-now" v-if="showBN" @click="closeModal">立即购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import swp from '@/components/DetailSwiper'
export default {
  data () {
    return {
      showATC: 1,
      showBN: 1,
      isModalShow: 0,
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
      time: 0,
      itemInfo: {
        num: 1,
        index: 0,
        skuId: null,
        skuName: null
      }
    }
  },
  beforeCreate () {
    Axios(
      `http://10.2.151.4:8080/detail?productId=${this.$route.params.id}`
    ).then(res => {
      this.detail = res.data
      this.itemInfo.skuId = this.detail.data.skus[this.itemInfo.index].skuId
      this.itemInfo.skuName = this.detail.data.skus[this.itemInfo.index].skuName
    })
  },
  beforeMount () {
    this.$store.commit('hideTabbar')
  },
  beforeDestroy () {
    this.$store.commit('showTabbar')
  },
  components: {
    swp
  },
  methods: {
    goBack () {
      window.history.back()
    },
    toHome () {
      this.$router.push('/Home')
    },
    toCart () {
      this.$router.push('/Cart')
    },
    minus () {
      this.itemInfo.num--
    },
    add () {
      this.itemInfo.num++
    },
    chooseColor (attributeId, i) {
      this.itemInfo.index = i
      this.itemInfo.skuId = this.detail.data.skus[i].skuId
      this.itemInfo.skuName = this.detail.data.skus[i].skuName
      console.log({ ...this.itemInfo })
    },
    closeModal () {
      this.isModalShow = 0
    },
    showModal (type) {
      switch (type) {
        case 1:
          this.showATC = 0
          this.showBN = 1
          this.isModalShow = 1
          return
        case 2:
          this.showATC = 1
          this.showBN = 0
          this.isModalShow = 1
          return
        case 3:
          this.showATC = 1
          this.showBN = 1
          this.isModalShow = 1
          return
        default:
          return 'error'
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.skuChecked{
  color: #ea413c !important;
  border: 1PX solid #ea413c !important;
}
.goBack{
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  transform: rotate(180deg);
  position: absolute;
  top: 10px;
  left: 10px;
  text-align: center;
  color: #fff;
  z-index: 9999;
  line-height: 28px;
}
.ironman{
  display: none;
}
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  // opacity: 0;
  // visibility: hidden;
  z-index: 999;
  transition: all 0.35s linear;
  & > div {
    transform: translateY(0);
    transition: all 0.35s linear;
  }
}
.hidden {
  & > div {
    transform: translateY(150%);
  }
  background-color: rgba(0, 0, 0, 0);
  z-index: -1 !important;
}
.detail-select-container {
  width: 100%;
  height: 58.5%;
  position: fixed;
  bottom: 0;
  background: #fff;
  & > div:first-of-type {
    max-height: 360px;
    overflow: scroll;
  }
  .close-button {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 1.2rem;
    line-height: 1.2rem;
    font-weight: 100;
    text-align: center;
    cursor: pointer;
    border-radius: 100%;
  }
  .commit {
    height: 50px;
    font-size: 15px;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    div {
      flex: 1;
      text-align: center;
      line-height: 50px;
      background: #ea413c;
      color: #fff;
    }
  }
  .set-num {
    padding: 14px 0 0 14px;
    box-sizing: border-box;
    margin-bottom: 60px;
    width: 100%;
    p{
      font-size: 15px !important;
    }
    & > div {
      display: flex;
      width: 123px;
      border: 1px solid #ccc;
      margin: 14px 0;
      box-sizing: border-box;
      div {
        font-size: 24px;
        text-align: center;
        height: 39px;
        line-height: 35px;
        display: block;
        outline: none;
        width: 39px;
        background-color: #fff;
        border: 0;
        display: block;
      }
      input {
        border: none;
        outline: none;
        -webkit-appearance: none;
        display: block;
        width: 45px;
        font-size: 13px;
        text-align: center;
        border-right: 1px solid #ccc;
        border-left: 1px solid #ccc;
      }
    }
  }
  .desc {
    display: flex;
    padding: 14px;
    box-sizing: border-box;
    .pic {
      width: 23%;
      border: 1px solid #ccc;
      img {
        width: 100%;
      }
    }
    .text {
      margin-left: 14px;
      line-height: 25px;
      box-sizing: border-box;
      padding-top: 10px;
      font-size: 15px;
      span {
        color: #ea413c;
        font-size: 17.5px;
      }
    }
  }
  .choose-color {
    padding-left: 14px;
    box-sizing: border-box;
    width: 100%;
    p {
      font-size: 15px;
    }
    .color-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      div {
        width: 20.9%;
        height: 10.2%;
        line-height: 38px;
        font-size: 13px;
        color: #262626;
        border: 0.5px solid #ccc;
        border-radius: 2px;
        text-align: center;
        box-sizing: border-box;
        margin: 14px 14px 0 0;
      }
    }
  }
}
.detail-info-title{
  color: #EA413C;
  background: #fff;
  font-size: .59733rem;
  height: 2.13333333333333rem;
  line-height: 2.133333333333rem;
  text-align: center
}
.detail-info {
  padding: 15px 20px;
  background: #fff;
  margin-bottom: .42667rem;
  .detail-content {
    .detail-name {
      font-size: 17px;
      line-height: 1.6;
    }
    .detail-desc {
      margin-top: 7.5px;
      font-size: 13px;
    }
  }
  .detail-price-row {
    margin-top: 3.91%;
    span {
      color: #ea413c;
      font-size: 18px;
      &:nth-of-type(2) {
        font-size: 21px;
      }
    }
  }
}
footer {
  background: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 49.8px;
  .footer-bar {
    width: 100%;
    height: 100%;
    display: flex;
    .icon-box {
      width: 37.8%;
      display: flex;
      border-right: 1px solid #ccc;
      box-sizing: border-box;
      height: 100%;
      div {
        flex: 1;
        font-size: 12px;
        text-align: center;
        color: #595959;
        padding-top: 30px;
        box-sizing: border-box;
        background-size: 60% 60%;
        background-repeat: no-repeat;
        background-position: center top;
        &:first-of-type{
          background-image: url('../assets/imgs/detail/homepage.png')
        }
        &:nth-of-type(2){
          background-image: url('../assets/imgs/detail/services.png')
        }
        &:last-of-type{
          background-image: url('../assets/imgs/detail/cart.png')
        }
      }
    }
    .btn-box {
      width: 62.2%;
      display: flex;
      height: 100%;
      div {
        font-size: .59733rem;
        flex: 1;
        text-align: center;
        line-height: 50px;
        color: #595959;
        &:last-of-type {
          background-color: #ea413c;
          color: #fff;
        }
      }
    }
  }
}
.closePlayer {
  font-size: .59733rem;
  width: 6.4%;
  height: 6.4%;
  position: absolute;
  top: 5%;
  right: 5%;
  background: rgba(180, 179, 179, 0.4);
  border-radius: 50%;
  z-index: 100;
  text-align: center;
  line-height: 110%;
  color: #ccc;
}
.swiper-slide {
  width: 100%;
  img {
    width: 100%;
  }
}
.player-container {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  z-index: 100;
  video {
    width: 100%;
    height: 100%;
    background: #000;
    box-sizing: border-box;
  }
}
header {
  position: relative;
}
.playerBtn {
  width: 26.1%;
  height: 11.6%;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  background-image: url("../assets/imgs/player.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 99;
  color: #ddd;
  font-size: 13px;
  padding-left: 45px;
  line-height: 43px;
  box-sizing: border-box;
}
</style>
