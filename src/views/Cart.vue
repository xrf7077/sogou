<template>
       <div id="box">
        <h1>购物车</h1>
        <ul>
            <li v-for="(data,index) in datalist" :key="index">
                <img :src="data.image[0]" alt="">
                <input type="checkbox">
                {{data.image[0]}}
                {{data.productName}}{{data.price}}{{data.linePrice}}{{data.skuName}}{

                <button @click="handleDel(data)">-</button>{{data.productNum}}<button
                    @click="data.productNum++">add</button>

            </li>
        </ul>
        <nav>
            <h3>为你推荐</h3>
        </nav>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      datalist:
                [
                  { 'image': ['//mall01.sogoucdn.com/image/2019/05/21/20190521160236_6102.jpg'], 'productId': 17125, 'linePrice': 259900, 'productNum': 1, 'subTotal': 249900, 'productState': 1, 'productName': '搜狗翻译宝Pro', 'skuName': '雅典灰', 'price': 249900, 'stockNum': 10, 'shopId': 1, 'skuId': 50106, 'selected': false },

                  { 'image': ['//mall02.sogoucdn.com/image/2019/05/21/20190521114138_6068.jpg'], 'productId': 21384, 'linePrice': 19900, 'productNum': 1, 'subTotal': 19900, 'productState': 1, 'productName': '【双十一特价】糖猫Plus2 能变声讲故事的电话手表', 'skuName': '蓝色', 'price': 19900, 'stockNum': 10, 'shopId': 1, 'skuId': 66105, 'selected': true },
                  { 'image': ['//mall03.sogoucdn.com/image/2019/08/28/20190828102941_1887.png'], 'productId': 26028, 'linePrice': 39800, 'productNum': 1, 'subTotal': 39800, 'productState': 1, 'productName': '搜狗AI录音笔C1炫彩版 ', 'skuName': '热烈红', 'price': 39800, 'stockNum': 10, 'shopId': 1, 'skuId': 71701, 'selected': false }]
    }
  },
  methods: {
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
h1{
    text-align: center
}
</style>
