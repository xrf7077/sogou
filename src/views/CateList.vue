<template>
    <div>
      <div class="title">分类</div>
      <ul @click="refresh">
        <router-link tag="li" :to="'/CateList/'+this.$route.params.type+'/List/1'" activeClass="active" class="Home" :listId='type'><span>默认</span></router-link>
        <router-link tag="li" :to="'/CateList/'+this.$route.params.type+'/List/3'" activeClass="active" class="Cate" :listId='type'><span>销量</span></router-link>
        <router-link tag="li" :to="'/CateList/'+this.$route.params.type+'/List/2'" activeClass="active" class="Cart" :listId='type'><span>价格</span></router-link>
      </ul>
      <router-view :key="activeDate"/>
    </div>
</template>
<style lang="scss" scoped>
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
    border: 0;
  }
  ul{
    width: 100%;
    height: 35px;
    display: flex;
    position: fixed;
    top: 46px;
    background: #fff;
    li{
      flex: 1;
      text-align: center;
      height: 100%;
      line-height: 35px;
      font-size: 14px;
      &.active{
        color: #EA413C;
      }
    }
  }
</style>
<script>
export default {
  data () {
    return {
      activeDate: 1
    }
  },
  beforeMount () {
    this.$store.commit('hideTabbar')
  },
  beforeDestroy () {
    this.$store.commit('showTabbar')
  },
  mounted () {
    console.log(this.$route.params)
  },
  methods: {
    refresh () {
      console.log(123)
      this.activeDate = new Date().getTime()
    }
  }
}
</script>
