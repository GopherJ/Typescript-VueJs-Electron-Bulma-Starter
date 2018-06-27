<template>
    <section class="index">
      <div class="has-text-centered">
          <div>Count: {{ Counter }}</div>
          <button class="button is-danger" @click="decrement">-</button>
          <button class="button is-primary" @click="increment">+</button>
      </div>
      <div>
          <div>Websocket recv: {{ socket.message }}</div>
      </div>
    </section>
</template>

<script lang='ts'>

  import { Vue, Component, Provide } from 'vue-property-decorator'
  import { Mutation, State } from 'vuex-class'
  import { Ws } from '../../model'

  @Component
  export default class Index extends Vue {
      @State('counter') counter: number
      @State('socket') socket: Ws
      @Mutation('incre') increment: Function
      @Mutation('decre') decrement: Function

      get Counter(): number {
          return this.counter
      }
  }
</script>

<style scoped>
</style>
