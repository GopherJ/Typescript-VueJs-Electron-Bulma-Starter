import { MutationTree } from 'vuex'
import { State } from '../../model'
import mutations_ws from './mutations_ws'
import {
  INCRE,
  DECRE
} from './types'

const mutations: MutationTree<State> = {
  [INCRE]: (state) => {
    state.counter++
  },
  [DECRE]: (state) => {
    state.counter--
  },
  ...mutations_ws
}

export default mutations
