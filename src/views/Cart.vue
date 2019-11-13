<template>
  <div id="box">
    <h1>购物车</h1>
    <div id="cart">
      <div class="up">
        <input type="checkbox" @change="handleChange" v-model="isAllChecked" />全选
        <!-- <p>编辑</p> -->
      </div>
      <ul>
        <li v-for="data in datalist" :key="data.productId">
          <input type="checkbox" v-model="checkgroup" :value="data" @change="handleItemChange" />
          <img :src="data.image[0]" />
          <p class="name">{{data.productName}}</p>
          <p class="color">商品颜色:{{data.skuName}}</p>
          <p class="price">单价:{{data.price/100+"."+data.price.toString().slice(-2)}}</p>
          <p class="linePrice">原价:{{data.linePrice/100+"."+data.linePrice.toString().slice(-2)}}</p>

          <button @click="handleDel(data)">-</button>
          {{data.productNum}}
          <button @click="data.productNum++">+</button>
        </li>
      </ul>
      <p>合计:{{sum()}}</p>
    </div>
    <nav>
      <h3>为你推荐</h3>
      <dl v-for="data in datalist1" :key="data.productId">
        <dt>
          <img :src="data.image" />
        </dt>
        <dd>
          <p class="name">{{data.name}}</p>
          <p class="detail">{{data.desc}}</p>
          <p class="price">{{data.linePrice/100+"."+data.linePrice.toString().slice(-2)}}</p>
        </dd>
      </dl>
    </nav>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isAllChecked: false,
      checkgroup: [],
      datalist: [
        {
          image: [
            '//mall01.sogoucdn.com/image/2019/05/21/20190521160236_6102.jpg'
          ],
          productId: 17125,
          linePrice: 259900,
          productNum: 1,
          subTotal: 249900,
          productState: 1,
          productName: '搜狗翻译宝Pro',
          skuName: '雅典灰',
          price: 249900,
          stockNum: 10,
          shopId: 1,
          skuId: 50106,
          selected: false
        },

        {
          image: [
            '//mall02.sogoucdn.com/image/2019/05/21/20190521114138_6068.jpg'
          ],
          productId: 21384,
          linePrice: 19900,
          productNum: 1,
          subTotal: 19900,
          productState: 1,
          productName: '【双十一特价】糖猫Plus2 能变声讲故事的电话手表',
          skuName: '蓝色',
          price: 19900,
          stockNum: 10,
          shopId: 1,
          skuId: 66105,
          selected: true
        },
        {
          image: [
            '//mall03.sogoucdn.com/image/2019/08/28/20190828102941_1887.png'
          ],
          productId: 26028,
          linePrice: 39800,
          productNum: 1,
          subTotal: 39800,
          productState: 1,
          productName: '搜狗AI录音笔C1炫彩版 ',
          skuName: '热烈红',
          price: 39800,
          stockNum: 10,
          shopId: 1,
          skuId: 71701,
          selected: false
        }
      ],
      datalist1: [
        {
          image:
            '//mall03.sogoucdn.com/image/2019/08/28/20190828102904_1884.png',
          productId: 26028,
          salePrice: 39800,
          name: '搜狗AI录音笔C1炫彩版 ',
          linePrice: 39800,
          state: 3,
          desc:
            '新老包装随机发货 购买即可参加送充电宝活动  高清录音 语音转文字 16G+云存储 免费转写 '
        },
        {
          image:
            '//mall01.sogoucdn.com/image/2019/06/26/20190626125928_6506.png',
          productId: 17658,
          salePrice: 39800,
          name: '搜狗AI录音笔（智能录音笔C1）',
          linePrice: 39800,
          state: 3,
          desc:
            '新老包装随机发货 购买即有机会得充电宝 高清录音 语音转文字 16G+云存储 免费转写 同声传译 录音速记'
        },
        {
          image:
            '//mall01.sogoucdn.com/image/2019/05/21/20190521160236_6102.jpg',
          productId: 17125,
          salePrice: 249900,
          name: '搜狗翻译宝Pro',
          linePrice: 259900,
          state: 3,
          desc:
            '同声翻译机 63种语言 中英日韩法俄德离线 拍照翻译 出国旅游同步语音翻译器'
        },
        {
          image:
            'http://mall03.sogoucdn.com/image/2019/04/28/20190428142912_4841.jpg',
          productId: 25885,
          salePrice: 59800,
          name: '糖猫Y1 能学口语的视频电话手表',
          linePrice: 59800,
          state: 3,
          desc: '512MB系统内存  4G存储空间  高清视频通话  英语口语学习'
        }
      ]
    }
  },
  methods: {
    sum () {
      console.log(this.checkgroup)
      var sum = 0
      for (var i in this.checkgroup) {
        sum += this.checkgroup[i].productNum * this.checkgroup[i].price
      }

      return sum
    },
    handleChange () {
      if (this.isAllChecked) {
        this.checkgroup = this.datalist
      } else {
        this.checkgroup = []
      }
    },
    handleItemChange () {
      if (this.checkgroup.length === this.datalist.length) {
        this.isAllChecked = true
      } else {
        this.isAllChecked = false
      }
    },
    handleDel (data) {
      data.productNum--
      if (data.productNum === 0) {
        alert('aa')
        data.productNum = 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 30px;
}
.up {
  width: 100%;
  p {
    float: right;
  }
}
#cart {
  ul {
    li {
      img {
        width: 100px;
        height: 100px;
      }
      .name {
      }
    }
  }
}
nav {
    width: 100%;
    margin-bottom: 400px;
  dl {
      width:45.5%;
      float: left;
        margin-left:3%;
    dt {
        width:100%;
      img {
        width: 100%;
      }
    }
    dd {
        width: 100%;
    }
  }
}
</style>
