<template>
    <section class="index">
        <div>{{ Counter }}</div>
        <button class="button is-danger" @click="decrement">-</button>
        <button class="button is-primary" @click="increment">+</button>
    </section>
</template>

<script lang='ts'>

  import { Vue, Component } from 'vue-property-decorator'
  import { Mutation, State } from 'vuex-class'

  @Component
  export default class Index extends Vue {
      @State('counter') counter: number
      @Mutation('incr') increment: Function
      @Mutation('decr') decrement: Function

      get Counter(): number {
          return this.counter
      }
  }
</script>

<style scoped>
</style>
