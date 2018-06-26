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
  },
  SOCKET_ONOPEN: (state, event) => {
  },
  SOCKET_ONCLOSE: (state, event) => {
  },
  SOCKET_ONERROR: (state, event) => {
  },
  SOCKET_RECONNECT: (state, event) => {
  },
  SOCKET_RECONNECT_ERROR: (state) => {
  },
  SOCKET_ONMESSAGE: (state, message) => {
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
