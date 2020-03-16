import Vue from 'vue'
import Vuex from 'vuex'

import { alert } from './alert.module'
import { jobs } from './job.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    alert,
    jobs
  }
})
