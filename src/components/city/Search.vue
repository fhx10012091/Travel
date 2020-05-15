<template>
  <div>
    <div class="search">
    <input
      type="text"
      class="search-input"
      placeholder="输入城市名或拼音"
      v-model='keyword'
    />
  </div>
  <div class="search-content" ref='search' v-show='keyword'>
    <ul>
    <li
      class="search-list border-bottom"
      v-for='item in list'
      :key='item.id'
      @click='handleCity(item.name)'
    >{{ item.name }}</li>
    <li class="search-list border-bottom" v-show='hasLength'>没有找到匹配数据</li>
  </ul>
  </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCity (city) {
      this.$store.commit('changeCity', city)
      this.keyword = ''
    }
  },
  computed: {
    hasLength () {
      return !this.list.length
    }
  },
  props: {
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  watch: {
    keyword () {
      let result = []
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        for (let key in this.cities) {
          this.cities[key].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 200)
    }
  }
}
</script>

<style lang='stylus'>
  @import '~styles/varibles.styl'
  .search
    background: $bgColor
    line-height: .72rem
    text-align: center
    padding: 0 .1rem
    .search-input
      text-align: center
      width: 100%
      height: .62rem
      border-radius: .06rem
      padding: 0 .1rem
      box-sizing: border-box
      color: #666
  .search-content
    position: absolute
    top: 1.58rem
    bottom: 0
    left: 0
    right: 0
    background: #eee
    z-index: 1
    overflow: hidden
    .search-list
      line-height: .62rem
      padding: 0 .2rem
      background: #fff
      color: #666
</style>
