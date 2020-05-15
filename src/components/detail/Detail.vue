<template>
  <div class='content'>
    <detail-banner :gallaryImgs='gallaryImgs' :bannerImg='bannerImg' :sightName='sightName'></detail-banner>
    <detail-header></detail-header>
    <detail-list :list='categoryList'></detail-list>
  </div>
</template>

<script>
import DetailBanner from './Banner.vue'
import DetailHeader from './Header.vue'
import DetailList from './List.vue'
import axios from 'axios'
export default {
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      sightName: ''
    }
  },
  methods: {
    getDetail () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.id
        }
      }).then(this.getDetailInfo)
    },
    getDetailInfo (res) {
      res = res.data
      console.log(res)
      if (res.ret && res.data) {
        this.bannerImg = res.data.bannerImg
        this.categoryList = res.data.categoryList
        this.gallaryImgs = res.data.gallaryImgs
        this.sightName = res.data.sightName
      }
    }
  },
  mounted () {
    this.getDetail()
  }
}
</script>

<style lang='stylus' scoped>
  .content
    height: 20rem
</style>
