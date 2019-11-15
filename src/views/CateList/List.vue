<template>
    <div>
        <div v-if="dataList" class="list">
            <div v-for="(data,i) in dataList" :key="i" class="items" @click="goToDetail(data.productId)">
                <!-- {{data.image}} -->
                <img :src="data.image"/>
                <p>{{data.name}}</p>
                <span>{{data.desc}}</span>
                <div>
                    <span>￥</span>
                    <span>{{data.salePrice/100}}</span>
                </div>
            </div>
        </div>
        <footer>没有更多了~</footer>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      dataList: null
    }
  },
  props: ['type'],
  mounted () {
    Axios(`/api/product/product/product_list?c=h5&s=20000&t=1573780345669&v=1.0&category_id=${this.$route.params.type}&sort_field=${this.$route.params.id}&sort_order=2&pn=1&ps=6`)
      .then(res => {
        this.dataList = res.data.data.pageList
        console.log(this.dataList)
      })
  },
  methods: {
    goToDetail (id) {
      this.$router.push(`/Details/${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
    footer{
        margin: 0 auto;
        font-size: 14px;
        line-height: 60px;
        text-align: center;
        color: #aaa;
    }
    .list{
        background: #fff;
        overflow: hidden;
        box-sizing: border-box;
        padding: 90px 5px 30px;
        .items{
            width: 50%;
            padding: 5px;
            box-sizing: border-box;
            float: left;
            font-size: 14px;
            img{
                width: 100%;
            }
            &>span{
                display: block;
                font-size: 12px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            p{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            &>div{
                font-weight: bold;
                span{
                    color: #EB4949;
                }
            }
        }
    }
</style>
