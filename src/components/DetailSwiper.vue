<template>
  <div :class='className'>
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination" v-if="pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  data () {
    return {
      className: 'swiper-container ' + this.cName
    }
  },
  mounted () {
    /* eslint-disable */
    new Swiper(`.${this.cName}`, this.options);
    if(this.cName){
        console.log(this.cName);
    }else{
        console.log("!!!");
    }
    /* eslint-disable */
  },
  props: ["options", 'cName', 'pagination']
};
</script>
<style lang="scss" scoped>
.swiper-pagination{
  width: 40px;
  height: 18px;
  line-height: 18px;
  background: rgba(0,0,0,.5);
  font-size: 10px;
  color: #fff;
  position: absolute;
  bottom: 4%;
  margin-left: 86%;
  border-radius: 100px;
}
</style>