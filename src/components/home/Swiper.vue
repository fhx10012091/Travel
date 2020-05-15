<template>
  <div class="swiper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if='showSwiper'>
      <swiper-slide v-for='item in list' :key='item.id'>
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000,
        speed: 1000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bullet-active
    background: #fff
  .swiper
    width: 100%
    .swiper-img
      width: 100%
</style>
