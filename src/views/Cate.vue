<template>
  <div class="cate">
      <div class="title">分类</div>
      <div class="cate-type-box" v-for="data in cateDataGetter.data.cateHome" :key="data.categoryId">
        <img :src="data.categoryImage" @click="jumpToList(data.categoryId)"/>
        <div class="items" v-for="item in data.productList" :key="item.productId" @click="jumpToDetail(item.productId)">
          <img :src="item.image"/>
          <p>{{item.name}}</p>
          <span>￥{{item.salePrice}}</span>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  mounted () {
    if (!this.$store.state.CateData) {
      this.$store.dispatch('getCateData')
    } else {
    }
  },
  computed: {
    ...mapGetters(['cateDataGetter'])
  },
  methods: {
    jumpToDetail (id) {
      this.$router.push(`/Details/${id}`)
    },
    jumpToList (id) {
      this.$router.push({ path: `/CateList/${id}/List/1` })
    }
  }
}
</script>

<style lang='scss' scoped>
.cate{
  padding-top: 50px;
  padding-bottom: 60px;
  overflow: hidden;
  background-color: #fff;
}
.title{
  height: 46px;
  width: 100%;
  line-height: 46px;
  font-size: 17px;
  text-align: center;
  position: fixed;
  top: 0;
  z-index: 9;
  background-color: #fff;
  box-shadow: 0 .5px .5px #ccc;
}
.cate-type-box{
  padding: 10px;
  img{
    width: 100%;
  }
  .items{
    float: left;
    width: 33.3%;
    padding: 5px;
    box-sizing: border-box;
    p{
      font-size: 12px;
      width: 100%;
      display: block;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    span{
      font-size: 13.5px;
      color: #eb4949;
      width: 100%;
      display: block;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
