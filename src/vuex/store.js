import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isBusy: false,
    sales: 0
  }
})

export default store 