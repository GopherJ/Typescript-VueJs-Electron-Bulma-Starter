import { MutationTree } from 'vuex'
import { State } from '../../model'
import {
  SOCKET_ONOPEN,
  SOCKET_ONCLOSE,
  SOCKET_RECONNECT,
  SOCKET_RECONNECT_ERROR,
  SOCKET_ONMESSAGE,
  SOCKET_ONERROR
} from './types'

const mutations_ws: MutationTree<State> = {
  [SOCKET_ONOPEN]: (state, event) => {
    state.socket.isConnected = true
    state.socket.ws_socket = event.target
  },
  [SOCKET_ONCLOSE]: (state) => {
    state.socket.isConnected = false
    state.socket.ws_socket = null
  },
  [SOCKET_ONERROR]: (state, event) => {
  },
  [SOCKET_RECONNECT]: (state, event) => {
  },
  [SOCKET_RECONNECT_ERROR]: (state) => {
  },
  [SOCKET_ONMESSAGE]: (state, message) => {
    state.socket.message = message
  }
}

export default mutations_ws
