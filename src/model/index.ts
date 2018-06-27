export interface Ws {
  isConnected: boolean
  ws_socket: WebSocket | null
  message: string
}

export interface State {
  counter: number
  socket: Ws
}

