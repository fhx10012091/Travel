<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(page, index) in pages" :key='index'>
        <div class="icon" v-for='item in page' :key='item.id'>
          <div class="icon-img">
            <img class="icon-content-img" :src="item.imgUrl" alt="">
          </div>
          <div class="icon-desc">{{ item.desc }}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      let pages = []
      this.list.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    width: 100%
    .icon
      width: 25%
      height: 0
      overflow: hidden
      float: left
      padding-bottom: 25%
      position: relative
      .icon-img
        position: absolute
        left: 0
        top: 0
        right: 0
        box-sizing: border-box
        padding-top: 6px
        bottom: .44rem
        .icon-content-img
          display: block
          margin: 0 auto
          height: 95%
      .icon-desc
        position: absolute
        left: 0
        bottom: 0
        right: 0
        color: $darkTextColor
        line-height: .44rem
        text-align: center
        white-space: nowrap
        overflow: hidden
        ellipsis()
</style>
