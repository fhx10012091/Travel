<template>
  <div>
    <Header></Header>
    <search :cities='cities'/>
    <list :hot='hot' :cities='cities' :letter='letter'/>
    <alp :cities='cities' @change='onHandleLetter' />
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/city/Header.vue'
import Search from '@/components/city/Search.vue'
import List from '@/components/city/List.vue'
import Alp from '@/components/city/Alp.vue'
export default {
  components: {
    Header,
    Search,
    List,
    Alp
  },
  data () {
    return {
      hot: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.hot = res.data.hotCities
        this.cities = res.data.cities
      }
    },
    onHandleLetter (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style>

</style>
