import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    HomeData: null,
    CateData: null,
    isTabbarShow: true,
    isCartSumShow: true,
    isCartSumShowed: false,
    isMyShow: true
  },
  actions: {
    getHomeData (store) {
      Axios(`/json/mobile/topic-home.json?c=h5&s=1000500017&t=1573541155083&v=1.0`)
        .then(res => {
          store.commit('setHomeData', res.data)
        })
    },
    getCateData (store) {
      Axios(`http://10.2.151.4:8080/categoryInit`)
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
      console.log(state.CateData)
    },
    showCartSum (state) {
      state.isCartSumShow = true
    },
    hideCartSum (state) {
      state.isCartSumShow = false
    },
    showCartSumed (state) {
      state.isCartSumShowed = true
    },
    hideCartSumed (state) {
      state.isCartSumShowed = false
    },
    setIsTabbarShow (state, data) {
      state.isTabbarShow = data
    },
    showTabbar (state) {
      state.isTabbarShow = true
    },
    hideTabbar (state) {
      state.isTabbarShow = false
    }
  },
  getters: {
    homeDataGetter (state) {
      return state.HomeData
    },
    cateDataGetter (state) {
      return state.CateData
    },
    isTabbarShowGetter (state) {
      return state.isTabbarShow
    }
  }

})
export default store
