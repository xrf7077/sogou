<template>
  <div class="swiper-container ironman" >
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.ironman', this.options)
  },
  props: ['options', 'classname']
}
</script>
