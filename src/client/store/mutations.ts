import { MutationTree } from 'vuex'
import { State } from '../../model'
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
  }
}

export default mutations
