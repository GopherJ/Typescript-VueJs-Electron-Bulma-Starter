import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'

import { State } from '../../model'

Vue.use(Vuex)


export default new Vuex.Store<State>({
  state,
  mutations,
  actions,
  getters
});
