<template>
  <ul class="list">
    <li
      class="item"
      v-for='key in letters'
      :key='key'
      :ref='key'
      @click='onhandlClick'
      @touchstart.prevent='handleTouchstart'
      @touchmove='handleTouchmove'
      @touchend='handleTouchend'
    >{{ key }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    cities: Object
  },
  data () {
    return {
      touchstatus: false,
      startY: 0
    }
  },
  computed: {
    letters () {
      let letters = []
      for (let key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    onhandlClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchstart () {
      this.touchstatus = true
    },
    handleTouchmove (e) {
      if (this.touchstatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let touchY = e.touches[0].clientY - 79
          let index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchend () {
      this.touchstatus = false
    }
  }
}
</script>

<style lang='stylus' scoped>
 @import '~styles/varibles.styl'
  .list
    position: absolute
    right: 0
    bottom: 0
    top: 1.58rem
    width: .4rem
    display: flex
    flex-direction: column
    justify-content: center
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
