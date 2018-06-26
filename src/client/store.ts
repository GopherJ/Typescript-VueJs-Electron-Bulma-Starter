import Vue from 'vue'
import Vuex from 'vuex'
import { MutationTree, ActionTree } from 'vuex'

Vue.use(Vuex)

interface State {
  counter: number
}

const mutations: MutationTree<State> = {
  incr: (state) => {
    state.counter++
  },
  decr: (state) => {
    state.counter--
  }
}

const actions: ActionTree<State, any> = {
  incr_action: (state, c) => {

  }
}

const state: State = {
  counter: 0
}

export default new Vuex.Store<State>({
  state,  
  mutations,
  actions
});