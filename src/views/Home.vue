<template>
  <div class="total">
    <h1>
      <span class="iconfont icon-sougou"></span>搜狗优品
    </h1>
    <swiper class="swiper" v-if="dataList.length">
      <div class="swiper-slide" v-for="(data,i) in dataList" :key="i">
        <img :src="data.img" alt />
      </div>
    </swiper>
    <ul class="list">
      <li v-for="(data,i) in navList" :key="i" @click="clickRouter(data.link)">
        <img :src="data.img" alt=""/>
        <p>{{data.title}}</p>
      </li>
    </ul>
    <swiper class="swiper_2" v-if="datawords.length">
      <div class="swiper-slide">
        <p v-for="(data,i) in datawords" :key="i">
          <span class="iconfont icon-xiaolaba"></span>
          {{data.title}}</p>
      </div>
    </swiper>
    <ul class="list_1">
      <li v-for="(data,i) in dataList_1" :key="i" @click="handleClick(data.id)">
        <img :src="data.img" alt />
        <p>{{data.title}}</p>
        <div class="desc">{{data.desc}}</div>
        <span>
          ￥{{data.price}}
          <i class="iconfont icon-qicheqianlian-"></i>
        </span>
      </li>
    </ul>
    <div class="list_2">
      <p>
        <span>糖猫产品</span>
        <a href="">查看更多</a>
      </p>
      <div v-for="(data,i) in picture" :key="i">
        <img :src="data.img" alt />
        <ul class="productList">
          <li v-for="(data,i) in productList" :key="i" @click="handleClick(data.id)">
            <img :src="data.img" alt />
            <div>{{data.title}}</div>
            <p>{{data.desc}}</p>
            <span>
              ￥{{data.price}}
              <i class="iconfont icon-qicheqianlian-"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="list_3">
      <p>
        <span>糖猫配件</span>
        <a href>查看更多</a>
      </p>
      <div v-for="(data,i) in list_3List" :key="i">
        <img :src="data.img" alt />
        <ul class="productList">
          <li v-for="(data,i) in productList_1" :key="i" @click="handleClick(data.id)">
            <img :src="data.img" alt />
            <div>{{data.title}}</div>
            <p>{{data.desc}}</p>
            <span>
              ￥{{data.price}}
              <i class="iconfont icon-qicheqianlian-"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from '@/components/Swiper'
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      datawords: [],
      dataList: [],
      dataList_1: [],
      picture: [],
      list_3List: [],
      productList: [],
      navList: [],
      options: {
        // direction: 'vertical',
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: {
    swiper
  },
  mounted () {
    axios({
      url: 'json/mobile/topic-home.json?c=h5&s=20000&t=1573633887668&v=1.0'
    }).then(res => {
      this.dataList = res.data.data.mods[0].list
      this.navList = res.data.data.mods[2].list
      this.datawords = res.data.data.mods[4].list
      this.dataList_1 = res.data.data.mods[7].list
      this.picture = res.data.data.mods[11].list
      this.productList = res.data.data.mods[13].list
      this.list_3List = res.data.data.mods[17].list
      this.productList_1 = res.data.data.mods[19].list
    })
    if (!this.$store.state.HomeData) {
      this.$store.dispatch('getHomeData')
    } else {
    }
  },
  methods: {
    handleClick (id) {
      this.$router.push(`/Details/${id}`)
    },
    clickRouter (id) {
      var newId = id.substring(25)
      this.$router.push({ path: `/CateList/${newId}/List/1` })
    }
  },
  computed: {
    ...mapGetters(['homeDataGetter'])
  }
}
</script>

<style lang="scss" scoped>
.total {
  background: #fff;
  padding-bottom: 50px;
  h1 {
    width: 100%;
    height: 47px;
    line-height: 46px;
    background: #202020;
    color: #fff;
    font-size: 18px;
    text-align: center;
    span {
      width: 21px;
      height: 17px;
      display: inline-block;
      color: #fff;
    }
  }
  .swiper {
    div {
      img {
        display: block;
        height: 160px;
        width: 100%;
      }
    }
  }
  .list {
    display: flex;
    justify-content: space-between;
    list-style: none;
    flex-direction: row;
    padding: 0 10px;
    li {
      width: 82px;
      height: 55px;
      padding: 0 3px;
      img {
        display: block;
        width: 40px;
        height: 40px;
        margin: 0 auto;
      }
      p {
        text-align: center;
        font-size: 12px;
      }
    }
  }
  .swiper_2{
     width:340px;
      height:30px;
      margin:10px 10px 0;
      background: gray;
    .swiper-slide{
      line-height:30px;
      p{
        font-size:12px;
      span{
        color:red
      }
      }
    }
  }
  .list_1 {
    margin-top:15px;
    width: 100%;
    list-style: none;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    li {
      height: 251px;
      width: 154px;
      display: inline-block;
      margin-left: 20px;
      img {
        width: 157px;
        height: 165px;
      }
      p {
        width: 165px;
        height:13px;
        font-size: 13px;
        font-weight: 700;
      }
      .desc {
        color: #8c8c8c;
        font-size: 8px;
        margin-top: 3px;
      }
      span {
        display: inline-block;
        width: 137px;
        color: #ea413c;
        font-size: 12px;
        font-weight: 700;
        float: left;
        margin-top: 5px;
        i {
          float: right;
        }
      }
    }
  }
  .list_2 {
    width: 100%;
    p {
      height: 36px;
      line-height: 36px;
      span {
        font-size: 15px;
        font-weight: 700;
        margin-left: 5px;
      }
      a {
        font-size: 12px;
        color: #8c8c8c;
        text-decoration: none;
        margin-left: 190px;
      }
    }
    img {
      width: 100%;
      height: 134px;
    }
  }
  .productList {
    width: 100%;
    li {
      height: 251px;
      width: 154px;
      display: inline-block;
      margin-left: 20px;
      div{
        font-size:15px;
        color:#262626;
        font-weight:700;
        height:16px;
        // text-align:left;
      }
      img {
        width: 157px;
        height: 165px;
      }
      p {
        width: 146px;
        height: 16px;
        font-size: 12px;
        color: #8c8c8c;
      }
      span {
        display: inline-block;
        width: 137px;
        color: #ea413c;
        font-size: 12px;
        font-weight: 700;
        margin-top: 10px;
        i {
          float: right;
        }
      }
    }
  }
  .list_3 {
    width: 100%;
    p {
      height: 36px;
      line-height: 36px;
      span {
        font-size: 15px;
        font-weight: 700;
        margin-left: 5px;
      }
      a {
        font-size: 12px;
        color: #8c8c8c;
        text-decoration: none;
        margin-left: 190px;
      }
    }
    img {
      width: 100%;
      height: 134px;
    }
  }
}
</style>
