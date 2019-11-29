<template>
    <div>
        <div v-if="dataList" class="list">
            <div v-for="(data,i) in dataList.productList" :key="i" class="items" @click="goToDetail(data.productId)">
                <img :src="data.image[0].img"/>
                <p>{{data.name}}</p>
                <span>{{data.desc}}</span>
                <div>
                    <span>￥</span>
                    <span>{{data.salePrice}}</span>
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
      dataList: null,
      url: `http://10.2.151.4:8080/getProducts?categoryId=${this.$route.params.type}`
    }
  },
  props: ['listId'],
  beforeMount () {
    switch (this.$route.params.id) {
      case '0':
        this.url = `http://10.2.151.4:8080/getProducts?categoryId=${this.$route.params.type}`
        break
      case '1':
        this.url = `http://10.2.151.4:8080/orderBySales?categoryId=${this.$route.params.type}&msg=0`
        break
      case '2':
        this.url = `http://10.2.151.4:8080/orderByPrice?categoryId=${this.$route.params.type}&msg=0`
        break
      default:
        break
    }
  },
  mounted () {
    Axios(this.url)
      .then(res => {
        this.dataList = res.data
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
