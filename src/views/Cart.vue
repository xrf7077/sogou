<template>
  <div id="box" v-scroll="{
    $refs:$refs,
    handleScroll:handleScroll}" v-if="datalist">
    <div class="top">
      <h2>购物车</h2>
    </div>
    <div id="cart">
      <div class="up">
        <input type="checkbox" @change="handleChange" v-model="isAllChecked" id="allChecked" />
        <input type="checkbox" @change="handleChange()" v-model="isAllChecked" id="allChecked" />

        <label for="allChecked"></label>
        <span class="up_a">全选</span>
        <div @click="edit" v-show="$store.state.isCartSumShow">编辑</div>
        <div @click="edited" v-show="$store.state.isCartSumShowed">完成</div>
      </div>
      <ul>
        <li v-for="(data,i) in datalist" :key="i">
          <div class="i-select">
            <input
              type="checkbox"
              v-model="checkgroup"
              :value="data"
              @change="handleItemChange(data)"
              :id="i"
              hidden
            />
            <label :for="i"></label>

          </div>
          <dl>
            <dt>
              <img :src="data.image" />
            </dt>
            <dd>
              <p class="name">{{data.productName}}</p>
              <p class="color">商品颜色:{{data.skuName}}</p>
              <span class="price">¥:{{data.price}}</span>
              <!-- <span
                class="linePrice"
              >原价:{{data.linePrice/100+"."+data.linePrice.toString().slice(-2)}}</span>-->
              <div class="calcu">
                <span @click="handleDel(data)" ref="minus" class="iconfont icon-jian"></span>
                <input type="text" :value="data.productNum" />
                <span @click="handleAdd(data)" class="iconfont icon-jia"></span>
              </div>
            </dd>
          </dl>
        </li>
      </ul>
      <empty-cart :class="isHidden?'hidden':''"></empty-cart>
    </div>
    <nav>
      <div class="top"></div>
      <h3 ref="myswiper">为你推荐</h3>
      <dl v-for="(data,i) in datalist1" :key="i">
        <dt>
          <img :src="data.image" />
        </dt>
        <dd>
          <p class="name">{{data.name}}</p>
          <p class="detail">{{data.desc}}</p>
          <p class="price">¥:{{data.linePrice}}</p>
        </dd>
      </dl>
      <div class="bottom">
        <p>没有更多了</p>
      </div>
    </nav>
    <div class="sum" :class="isAdsorpt?'':'adsorpt'">
      <input type="checkbox" @change="handleChange()" v-model="isAllChecked" id="allChecked" />
      <label for="allChecked"></label>
      <span class="span1">全选</span>
      <div class="sub-cart" v-show="$store.state.isCartSumShow">结算</div>
      <button class="sub-cart_1" v-show="$store.state.isCartSumShowed" @click="handleListDel(data)">删除</button>
      <p v-show="$store.state.isCartSumShow">
        合计:
        <span>{{sum()}}</span>
      </p>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
import '@/directive/scroll'
import emptyCart from './Cart/EmptyCart'
import Axios from 'axios'
export default {
  data () {
    return {
      isAllChecked: false,
      isChecked: false,
      isCheckedGroup: [],
      checkgroup: [],
      isAdsorpt: false,
      isHidden: true,
      datalist: null,
      datalist1: [{ 'image': '//mall03.sogoucdn.com/image/2019/08/28/20190828102904_1884.png', 'productId': 26028, 'salePrice': 398, 'name': '搜狗AI录音笔C1炫彩版 ', 'linePrice': 398, 'state': 3, 'desc': '新老包装随机发货 购买即可参加送充电宝活动  高清录音 语音转文字 16G+云存储 免费转写 ' }, { 'image': '//mall01.sogoucdn.com/image/2019/06/26/20190626125928_6506.png', 'productId': 17658, 'salePrice': 398, 'name': '搜狗AI录音笔（智能录音笔C1）', 'linePrice': 398, 'state': 3, 'desc': '新老包装随机发货 购买即有机会得充电宝 高清录音 语音转文字 16G+云存储 免费转写 同声传译 录音速记' }, { 'image': '//mall01.sogoucdn.com/image/2019/05/21/20190521160236_6102.jpg', 'productId': 17125, 'salePrice': 2499, 'name': '搜狗翻译宝Pro', 'linePrice': 2599, 'state': 3, 'desc': '同声翻译机 63种语言 中英日韩法俄德离线 拍照翻译 出国旅游同步语音翻译器' }, { 'image': 'http://mall03.sogoucdn.com/image/2019/04/28/20190428142912_4841.jpg', 'productId': 25885, 'salePrice': 598, 'name': '糖猫Y1 能学口语的视频电话手表', 'linePrice': 598, 'state': 3, 'desc': '512MB系统内存  4G存储空间  高清视频通话  英语口语学习' }]
    }
  },
  components: {
    emptyCart
  },
  methods: {
    sum () {
      //   console.log(this.checkgroup)
      var sum = 0
      for (var i = 0; i < this.checkgroup.length; i++) {
        sum += this.checkgroup[i].productNum * this.checkgroup[i].price
      }
      return sum
    },
    handleChange () {
      if (this.isAllChecked) {
        this.checkgroup = this.datalist
        Axios.get(`http://10.2.151.4:8080/chooseAll?selected=1`)
      } else {
        this.checkgroup = []
        Axios.get(`http://10.2.151.4:8080/chooseAll?selected=0`)
      }
    },
    handleItemChange (data) {
      // if (this.checkgroup.length === this.datalist.length) {
      //   this.isAllChecked = true
      //   Axios.get(`http://10.2.151.4:8080/chooseAll?selected=1`)
      // } else {
      //   this.isAllChecked = false
      //   Axios.get(`http://10.2.151.4:8080/chooseAll?selected=0`)
      // }
      Axios.get(
        `http://10.2.151.4:8080/changeSelected?selected=1&productId=${data.productId}&skuId=${data.skuId}`
      )
    },
    handleDel (data) {
      data.productNum--
      console.log(data)
      if (data.productNum === 0) {
        data.productNum = 1
        console.log(this.$refs.minus)
      }
      Axios.get(
        `http://10.2.151.4:8080/changeProductNum?productNum=${data.productNum}&productId=${data.productId}&skuId=${data.skuId}`
      )
    },
    handleAdd (data) {
      data.productNum++
      Axios.get(
        `http://10.2.151.4:8080/changeProductNum?productNum=${data.productNum}&productId=${data.productId}&skuId=${data.skuId}`
      )
    },
    handleListDel (data) {
      var checkgroup = this.checkgroup
      var datalist = this.datalist
      var indexList = []
      for (var i = 0; i < checkgroup.length; i++) {
        var index = datalist.indexOf(checkgroup[i])
        if (index !== -1) {
          indexList.push(index)
        }
      }
      for (var j = indexList.length - 1; j > -1; j--) {
        datalist.splice(indexList[j], 1)
      }
      this.checkgroup = []
      Axios.get(`http://10.2.151.4:8080/delFromCart`)
      console.log('aaa')
    },
    edit () {
      this.$store.commit('hideCartSum')
      this.$store.commit('showCartSumed')
      this.isAdsorpt = true
    },
    edited () {
      this.$store.commit('showCartSum')
      this.$store.commit('hideCartSumed')
      this.isAdsorpt = false
    },
    handleScroll (isFixed) {
      this.isAdsorpt = isFixed
    }
  },
  created () {
    Axios.get('http://10.2.151.4:8080/showCart').then(res => {
      this.datalist = res.data.data.productList
      console.log(this.datalist)
      for (var i = 0; i < this.datalist.length; i++) {
        console.log(Boolean(this.datalist[i].selected))
      }
    })
  },

  updated () {
    // console.log(this.datalist)
    if (this.datalist.length === 0) {
      this.isHidden = false
    } else {
      this.isHidden = true
    }
  }
}
</script>

<style lang="scss" scoped>
#box {
  background: white;
  .top {
    position: fixed;
    width: 100%;
    top: 0;
    height: 2.3rem;
    line-height: 2.13rem;
    font-size: 0.5rem;
    background: #f5f5f5;
    z-index: 1;
    h2 {
      text-align: center;
      font-weight: 400;
      height: 2.3rem;
      background: #f5f5f5;
    }
  }
  #cart {
    background: white;
    margin-top: 2.13rem;
    .up {
      height: 2rem;
      line-height: 2rem;
      border-top: 0.01rem solid #f5f5f5;
      border-bottom: 0.01rem solid #f5f5f5;
      font-size: 0.6rem;
      position: relative;
      .up_a {
        margin-left: 1.7rem;
      }
      input {
        float: left;
        line-height: 3.4rem;
        margin-left: 4%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: none;
      }
      label {
        margin-left: 4%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      span {
        height: 2rem;
        line-height: 2rem;
        font-size: 0.6rem;
      }
      div {
        float: right;
        margin-right: 3%;
        font-size: 0.6rem;
      }
    }
    ul {
      li {
        .i-select {
          width: 0.7rem;
          height: 4.57rem;
          float: left;
          margin-left: 4%;
          margin-right: 2%;
          position: relative;
          input {
            float: left;
            line-height: 3.4rem;
            margin-left: 4%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          label {
            margin-left: 4%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        dl {
          height: 3.57rem;
          padding-top: 0.65rem;
          padding-bottom: 0.65rem;
          border-bottom: 0.01rem solid #f5f5f5;
          dt {
            width: 3.47rem;
            height: 3.47rem;
            border: 0.05rem solid #f5f5f5;
            float: left;

            img {
              width: 3.47rem;
              height: 3.47rem;
              padding: 0;
            }
          }
          dd {
            width: 9.78rem;
            height: 3.47rem;
            font-size: 0.6rem;
            float: right;
            background: white;
            position: relative;
            .price {
              position: absolute;
              bottom: 0;
              float: left;
              color: red;
            }
            .calcu {
              position: absolute;
              bottom: 0;
              right: 0;
              width: 4.34rem;
              height: 1rem;
              float: right;
              input {
                display: inline-block;
                width: 2rem;
                height: 1rem;
                text-align: center;
                margin-left: 0.3rem;
                margin-right: 0.3rem;
                background: #f5f5f5;
                outline: none;
                border: none;
              }
              button {
                display: inline;
              }
            }
          }
        }
      }
    }
  }
  nav {
    width: 100%;
    background: white;
    margin-top: 1rem;
    overflow: hidden;
    .top {
      width: 100%;
      height: 0.6rem;
      background: #f5f5f5;
    }
    h3 {
      font-size: 0.8rem;
      font-weight: bold;
      line-height: 2.5rem;
      margin-left: 3%;
      display: block;
    }
    dl {
      width: 45.5%;
      float: left;
      padding-left: 3%;
      background: white;
      display: block;
      dt {
        width: 100%;
        background: white;
        display: block;

        img {
          width: 100%;
          display: block;
        }
      }
      dd {
        width: 100%;
        background: white;
        display: block;
        .name {
          font-size: 0.7rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .detail {
          font-size: 0.12rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .price {
          color: red;
          font-size: 0.7rem;
        }
      }
    }
    .bottom {
      height: 2.68rem;
      float: left;
      width: 100%;
      text-align: center;
      background: #f5f5f5;
      color: #bfbfbf;
      font-size: 0.5rem;
      line-height: 1.34rem;
      margin-bottom: 3.57rem;
    }
  }
  .sum {
    position: fixed;
    bottom: 2.1rem;
    width: 96%;
    height: 2.3rem;
    line-height: 2.2rem;
    font-size: 0.59733rem;
    background: white;
    padding-left: 4%;
    border-bottom: 1px solid #f5f5f5;
    p {
      float: right;
      color: black;
      margin-right: 5%;
      font-size: 0.68rem;
      span {
        font-size: 0.68rem;
        color: red;
      }
    }
    input {
      float: left;
      line-height: 3.4rem;
      margin-left: 4%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: none;
    }
    label {
      margin-left: 4%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .span1 {
      margin-left: 1.7rem;
    }

    .sub-cart {
      width: 5rem;
      height: 2.2rem;
      text-align: center;
      color: white;
      float: right;
      background: red;
    }
    .sub-cart_1 {
      border: 0.04rem solid #f5f5f5;
      border-radius: 1rem;
      width: 3.5rem;
      font-size: 0.6rem;
      height: 1.5rem;
      text-align: center;
      float: right;
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
      background: white;
      outline: none;
    }
  }
}
input[type="checkbox"] + label::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  padding: 2px;
  margin-right: 5px;
  background-clip: content-box;
  border-radius: 50%;
  border: 0.05rem solid gray;
}
input[type="checkbox"]:checked + label::before {
  background-color: red;
}
.adsorpt {
  display: none;
}
.hidden {
  display: none;
}
</style>
