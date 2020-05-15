<template>
  <div class="weekend">
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for='item in list' :key='item.id'>
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="info">
          <p class="info-title">{{ item.title }}</p>
          <p class="info-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/mixins.styl'
  .weekend
    .title
      background: #eee
      text-indent: .2rem
      line-height: .8rem
    .item
      .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 37.09%
        .item-img
          width: 100%
      .info
        padding: 0 .1rem
        .info-title
          ellipsis()
          color: #000
          line-height: .54rem
          font-size: .32rem
        .info-desc
          line-height: .4rem
          fone-size: .24rem
          color: #ccc
          padding: .05rem 0
          ellipsis()
</style>
