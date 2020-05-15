<template>
  <div class="header">
    城市选择
    <div class="iconfont icon-fanhui back-icon" @click='handleChangeCity'></div>
  </div>
</template>

<script>
export default {
  methods: {
    handleChangeCity () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .header
    line-height: $headerHeight
    background: $bgColor
    text-align: center
    color: #ffffff
    font-size: .32rem
    .back-icon
      width: .64rem
      text-align: center
      position: absolute
      left: 0
      top: 0
      font-size: .4rem
</style>
