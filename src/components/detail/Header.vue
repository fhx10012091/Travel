<template>
  <div class="header">
    <router-link to='/' tag='div' class="header-abs" v-show="showAbs">
      <span class="iconfont icon-fanhui back-icon"></span>
    </router-link>
    <div class="header-fixed" v-show='!showAbs' :style='fixOpacity'>
      <router-link to='/' tag='div' class="header-left">
        <div class="iconfont icon-fanhui back-icon"></div>
      </router-link>
      <div class="header-content">
        景点详情
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showAbs: true,
      fixOpacity: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.fixOpacity = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .header
    .header-abs
      position: absolute
      left: .2rem
      top: .2rem
      width: .8rem
      height: .8rem
      background: #666
      border-radius: 50%
      line-height: .8rem
      text-align: center
      color: #fff
      .back-icon
        font-size: .5rem
    .header-fixed
      position: fixed
      top: 0
      left: 0
      right: 0
      display: flex
      line-height: $headerHeight
      background: $bgColor
      color: #ffffff
      z-index: 2
      .header-left
        position: absolute
        top: 0
        left: 0
        width: .64rem
        text-align: center
        font-size: .4rem
        color: #fff
      .header-content
        margin: 0 auto
</style>
