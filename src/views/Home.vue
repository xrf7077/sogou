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
      <li>
        <img src="https://mall01.sogoucdn.com/image/2019/05/15/20190515150607_5004.png" alt />
        <p>畅销产品</p>
      </li>
      <li>
        <img src="https://mall02.sogoucdn.com/image/2019/05/15/20190515150631_5005.png" alt />
        <p>翻译产品</p>
      </li>
      <li>
        <img src="https://mall02.sogoucdn.com/image/2019/05/15/20190515150640_5006.png" alt />
        <p>糖猫产品</p>
      </li>
      <li>
        <img src="https://mall02.sogoucdn.com/image/2019/05/15/20190515150650_5007.png" alt />
        <p>糖猫配件</p>
      </li>
    </ul>
    <swiper>
      <div class="swiper-slide">
        <p v-for="(data,i) in datawords" :key="i">{{data.i}}</p>
      </div>
    </swiper>
    <ul class="list_1">
      <li v-for="(data,i) in dataList_1" :key="i" @click="handleClick(data.id)">
        <img :src="data.img" alt />
        <p>{{data.title}}</p>
        <p class="desc">{{data.desc}}</p>
        <span>
          ￥{{data.price}}
          <i class="iconfont icon-gouwuche"></i>
        </span>
      </li>
    </ul>
    <div class="list_2">
      <p>
        <span>糖猫产品</span>
        <a href>查看更多</a>
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
              <i class="iconfont icon-gouwuche"></i>
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
      datawords: [
        '搜狗AI录音笔首发，语音转文字，新华社记者强烈推荐',
        '搜狗翻译宝Pro，63种语言，200多个国家，走遍世间都不怕'
      ],
      dataList: [],
      dataList_1: [],
      picture: [],
      bigOptions: {
        // direction: 'vertical',
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      smallOptions: {
        direction: 'vertical',
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
      url: '/json/mobile/topic-home.json?c=h5&s=20000&t=1573607790145&v=1.0'
    }).then(res => {
      this.dataList = res.data.data.mods[0].list
      // console.log(this.dataList)
    })
    axios({
      url: 'json/mobile/topic-home.json?c=h5&s=20000&t=1573633887668&v=1.0'
    }).then(res => {
      this.dataList_1 = res.data.data.mods[7].list
      // console.log(res.data.data.mods[7].list)
    })
    axios({
      url: 'json/mobile/topic-home.json?c=h5&s=20000&t=1573633887668&v=1.0'
    }).then(res => {
      // console.log(res.data.data.mods[11].list)
      this.picture = res.data.data.mods[11].list
      this.productList = res.data.data.mods[13].list
    })
    if (!this.$store.state.HomeData) {
      this.$store.dispatch('getHomeData')
    } else {
      console.log(this.homeDataGetter)
    }
  },
  methods: {
    handleClick (id) {
      console.log(id)
      this.$router.push(`/Details/${id}`)
    }
  },
  computed: {
    ...mapGetters(['homeDataGetter'])
  }
}
</script>

<style lang="scss" scoped>
.total {
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
  .list_1 {
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
        // text-align: center;
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
      background: #fff;
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
}
</style>
