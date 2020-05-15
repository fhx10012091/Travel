<template>
  <div class="recommend">
    <div class="title">
      热门推荐
    </div>
    <ul>
      <router-link
      tag='li'
      class="item border-bottom"
      v-for='item in list'
      :key='item.id'
      :to="'/detail/' + item.id"
      >
        <img class='item-img' :src="item.imgUrl" alt="">
        <div class="info">
          <p class="info-title">{{ item.title }}</p>
          <p class="info-desc">{{ item.desc }}</p>
          <button class="info-button">查看详情</button>
        </div>
      </router-link>
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
  .recommend
    margin-top: .1rem
    .title
      background: #eee
      text-indent: .2rem
      line-height: .8rem
    .item
      height: 1.9rem
      display: flex
      .item-img
        width: 1.7rem
        padding: .1rem
      .info
        flex: 1
        min-width: 0
        padding: 0 .1rem
        .info-title
          ellipsis()
          line-height: .54rem
          font-size: .32rem
        .info-desc
          line-height: .4rem
        .info-button
          background: #ff9300
          line-height: .44rem
          padding: 0 .2rem
          margin-top: .16rem
          border-radius: .6rem
</style>
