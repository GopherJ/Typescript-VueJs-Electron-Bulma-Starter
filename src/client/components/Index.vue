<template>
    <section class="index">
      <div class="has-text-centered">
          <div>Count: {{ Counter }}</div>
          <button class="button is-danger" @click="decrement">-</button>
          <button class="button is-primary" @click="increment">+</button>
      </div>
      <div>
          <div>Websocket send:  </div>
          <div>Websocket recv: {{ message }}</div>
      </div>
    </section>
</template>

<script lang='ts'>

  import { Vue, Component, Provide } from 'vue-property-decorator'
  import { Mutation, State } from 'vuex-class'

  @Component
  export default class Index extends Vue {
      @Provide() sended: string | null

      @State('counter') counter: number
      @State('socket.message') message: string
      @Mutation('incr') increment: Function
      @Mutation('decr') decrement: Function

      get Counter(): number {
          return this.counter
      }

      mounted() {
        setInterval(() => {
          this.sended = "" + Math.random() * 100
        })
      }
  }
</script>

<style scoped>
</style>
