<template>
  <div>
    <div class="banner" @click='onhandleShow'>
      <img class="banner-img"
      :src="bannerImg" alt=""/>
      <div class="banner-info">
        <div class="banner-title">
          {{ this.sightName }}
        </div>
        <div class="banner-number">
          <span class="iconfont icon-ai-arrow-down banner-icon"></span>
          39
        </div>
      </div>
    </div>
    <fade>
      <gallary v-show='show' @change='onhandleClose' :imgs='gallaryImgs'></gallary>
    </fade>
  </div>
</template>

<script>
import Gallary from '@/common/gallary/Gallary.vue'
import Fade from '@/common/fade/Fade.vue'
export default {
  props: {
    bannerImg: String,
    gallaryImgs: Array,
    sightName: String
  },
  data () {
    return {
      show: false
    }
  },
  components: {
    Gallary,
    Fade
  },
  methods: {
    onhandleShow () {
      this.show = true
    },
    onhandleClose () {
      this.show = false
    }
  }
}
</script>

<style lang='stylus' scoped>
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 55%
    position: relative
    .banner-img
      width: 100%
    .banner-info
      line-height: .6rem
      display: flex
      position: absolute
      bottom: 0
      left: 0
      right: 0
      color: #fff
      background: linear-gradient(top, rgba(0,0,0,0
      ), rgba(0,0,0,.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        line-height: .32rem
        margin-top: .14rem
        padding 0 .4rem
        .banner-icon
          font-size: .24rem
</style>
