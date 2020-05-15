<template>
  <div class="gallary" @click='onhandleClose'>
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    onhandleClose () {
      this.$emit('change')
    }
  }
}
</script>

<style lang='stylus'>
  .gallary >>> .swiper-container
    overflow: inherit
  .swiper-pagination
    color: #fff
    font-size: .3rem
  .gallary
    z-index: 99
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
        .swiper-pagination
          color: #fff
          bottom: -1rem
</style>
