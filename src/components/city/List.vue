<template>
  <div class="list" ref='wrapper'>
    <div>
      <div class="area">
      <div class="title border-topbottom">现居住地</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">
            {{this.city}}
          </div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper" v-for='hotCity in hot' :key='hotCity.id'>
          <div class="button" @click='handleCity(hotCity.name)'>{{ hotCity.name }}</div>
        </div>
      </div>
    </div>
    <div class="area" v-for='(city, key) in cities' :key='key' :ref='key'>
      <div class="title border-topbottom">{{ key }}</div>
      <div class="item-list" v-for='item in city' :key='item.id'>
        <div class="item border-bottom" @click='handleCity(item.name)'>{{ item.name }}</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapActions, mapState } from 'vuex'
export default {
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods: {
    ...mapActions(['changeCity']),
    handleCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    letter () {
      if (this.letter) {
        let element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    left: 0
    top: 1.58rem
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      color: #666
      background: #eee
      font-size: .26rem
      padding-left: .2rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        width: 33.33%
        float: left
        .button
          border: .02rem solid #ccc
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding: .2rem
</style>
