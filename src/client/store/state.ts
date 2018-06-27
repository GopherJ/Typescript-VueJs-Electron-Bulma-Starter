import { State } from '../../model'

const state: State = {
  counter: 0,
  socket: {
    isConnected : false,
    ws_socket: null,
    message: ''
  }
}

export default state
