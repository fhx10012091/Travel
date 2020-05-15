<template>
  <div>
    <Header></Header>
    <swiper :list='swiperList'></swiper>
    <icon :list='iconList'></icon>
    <recommend :list='recommendList' />
    <weekend :list='weekendList'/>
  </div>
</template>

<script>
import Header from './Header.vue'
import Swiper from './Swiper.vue'
import Icon from './Icons.vue'
import Recommend from './Recommend.vue'
import Weekend from './Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  components: {
    Header,
    Swiper,
    Icon,
    Recommend,
    Weekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
