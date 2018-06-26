import Vue from 'vue'
import Vuex from 'vuex'
import { MutationTree, ActionTree } from 'vuex'

Vue.use(Vuex)

interface Ws {
  isConnected: boolean,
  ws_socket: null,
  message: String
}

interface State {
  counter: number,
  socket: Ws
}

const mutations: MutationTree<State> = {
  incr: (state) => {
    state.counter++
  },
  decr: (state) => {
    state.counter--
  },

  SOCKET_ONOPEN: (state, event) => {
    state.socket.isConnected = true
    state.socket.ws_socket = event.target
  },
  SOCKET_ONCLOSE: (state) => {
    state.socket.isConnected = false
    state.socket.ws_socket = null
  },
  SOCKET_ONERROR: (state, event) => {
  },
  SOCKET_RECONNECT: (state, event) => {
  },
  SOCKET_RECONNECT_ERROR: (state) => {
  },
  SOCKET_ONMESSAGE: (state, message) => {
    state.socket.message = message
  }
}

const actions: ActionTree<State, any> = {
}

const state: State = {
  counter: 0,
  socket: {
    isConnected: false,
    ws_socket: null,
    message: ''
  }
}

export default new Vuex.Store<State>({
  state,
  mutations,
  actions
});
