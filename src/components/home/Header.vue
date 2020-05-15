<template>
    <div class="header">
      <div class="header-left">
        <div class="iconfont icon-fanhui back-icon"></div>
      </div>
      <div class="header-input">
        <span class="iconfont icon-sousuo"></span>
        输入城市/景点/游玩主题
        </div>
      <div class="header-right">
        <router-link to="/city">
          {{ this.currentCity }}
        </router-link>
        <span class="iconfont icon-ai-arrow-down arrow-icon"></span>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    city: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #ffffff
    .header-left
      float: left
      width: 0.64rem
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      color: #ccc
      line-height: 0.62rem
      padding-left: 0.1rem
      height: .62rem
      background: #ffffff
      border-radius: .1rem
      margin-top: .12rem
      margin-left: .2rem
    .header-right
      float: right
      min-width: 1.04rem
      padding: 0 .1rem
      text-align: center
      a
        color: #ffffff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
