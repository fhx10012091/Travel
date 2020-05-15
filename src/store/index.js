import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import state from './state'
Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    state,
    mutations,
    actions: {
      changeCity (store, city) {
        store.commit('changeCity', city)
        localStorage.city = city
      }
    }
  })
}
