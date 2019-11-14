import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    //     _ooOoo_
    //     o8888888o
    //     88" . "88
    //     (| -_- |)
    //     O\  =  /O
    //  ____/`---'\____
    // .'  \\|     |//  `.
    // /  \\|||  :  |||//  \
    // /  _||||| -:- |||||-  \
    // |   | \\\  -  /// |   |
    // | \_|  ''\---/''  |   |
    // \  .-\__  `-`  ___/-. /
    // ___`. .'  /--.--\  `. .
    // ."" '<  `.___\_<|>_/___.'  >'"".
    // | | :  `- \`.;`\ _ /`;.`/ - ` : | |
    // \  \ `-.   \_ __\ /__ _/   .-` /  /
    // ======`-.____`-.___\_____/___.-`____.-'======
    //      `=---='
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    // 佛祖保佑      永无BUG      永不修改

    //      佛曰:
    // 写字楼里写字间，写字间里程序员；
    HomeData: null,
    // 程序人员写程序，又拿程序换酒钱。
    CateData: null,
    // 酒醒只在网上坐，酒醉还来网下眠；
    isTabbarShow: true,
    // 酒醉酒醒日复日，网上网下年复年。
    isMyShow: true
    // 但愿老死电脑间，不愿鞠躬老板前；

    // 奔驰宝马贵者趣，公交自行程序员。

    // 别人笑我忒疯癫，我笑自己命太贱；

    // 不见满街漂亮妹，哪个归得程序员？

  },
  actions: {
    getHomeData (store) {
      Axios(`/json/mobile/topic-home.json?c=h5&s=1000500017&t=1573541155083&v=1.0`)
        .then(res => {
          store.commit('setHomeData', res.data)
        })
    },
    getCateData (store) {
      Axios(`json/mobile/cate-home.json?c=h5&s=1000500017&t=1573549265503&v=1.0`)
        .then(res => {
          store.commit('setCateData', res.data)
        })
    }
  },
  mutations: {
    setHomeData (state, data) {
      state.HomeData = data
    },
    setCateData (state, data) {
      state.CateData = data
    }
  },
  getters: {
    homeDataGetter (state) {
      return state.HomeData
    },
    cateDataGetter (state) {
      return state.HomeData
    }
  }

})
export default store
