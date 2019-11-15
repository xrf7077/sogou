import Vue from 'vue'
Vue.directive('scroll', {
  inserted (el, bind) {
    // console.log(bind.value.$refs.myswiper.offsetHeight)
    window.onscroll = function () {
      // console.log(document.documentElement.scrollTop)
      if ((document.documentElement.scrollTop || document.body.scrollTop) > bind.value.$refs.myswiper.offsetHeight) {
        bind.value.handleScroll(true)
      } else {
        bind.value.handleScroll(false)
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})

// bind.value.$refs.myswiper.$el.offsetHeight
