<template>
  <div>
    <header v-if="detail">
      <swiper id="banner" :options="options" :cName="cName" :pagination="pagination">
        <div class="swiper-slide" v-for="(data,i) in detail.data.product.image" :key="i">
          <img :src="data" alt srcset />
        </div>
      </swiper>
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
      <div class="playerBtn" @click="isPlayerShow=!isPlayerShow"></div>
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
              <img :src="itemInfo.picSrc" />
            </div>
            <div class="text">
              <div class="name">{{detail.data.product.name}}</div>
              <div class="price">
                <span>￥</span>
                <span>{{parseInt(priceInfo.data.skuSalePriceRange[0]/100)+'.00'}}</span>
              </div>
            </div>
          </div>
          <div class="choose-color">
            <p>颜色</p>
            <div class="color-list">
              <div
                v-for="(data,i) in detail.data.attributeList[0].attributeValueList"
                :key="data.attributeValueId"
                @click="chooseColor(detail.data.attributeList[0].attributeValueList[i].attributeId,detail.data.attributeList[0].attributeValueList[i].attributeValueId)"
              >{{data.attributeValueName}}</div>
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
          <div class="add-to-cart" v-if="showATC">加入购物车</div>
          <div class="buy-now" v-if="showBN">立即购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import swiper from '@/components/Swiper'
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
        color: '蓝色',
        picSrc: '',
        num: 1
      }
    }
  },
  beforeCreate () {
    Axios(
      `/api/product/product/product_detail?c=h5&s=20000&t=1573561721260&v=1.0&product_id=${this.$route.params.id}`
    ).then(res => {
      this.detail = res.data
      this.itemInfo.picSrc = this.detail.data.product.image[0]
    })
    Axios(
      `/api/product/sku/sku_stock_detail?c=h5&s=20000&t=1573564055256&v=1.0&product_id=${this.$route.params.id}&stock_type=1`
    ).then(res => {
      this.priceInfo = res.data
    })
  },
  beforeMount () {
    this.$store.commit('hideTabbar')
  },
  beforeDestroy () {
    this.$store.commit('showTabbar')
  },
  components: {
    swiper
  },
  methods: {
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
    chooseColor (attributeId, attributeValueId) {
      console.log(attributeId + '----' + attributeValueId)
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
    width: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    cursor: pointer;
    border-radius: 100%;
    background-color: lightgray;
  }
  .commit {
    height: 50px;
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
.detail-info {
  padding: 15px 20px;
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
      }
    }
    .btn-box {
      width: 62.2%;
      display: flex;
      height: 100%;
      div {
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
}
</style>
