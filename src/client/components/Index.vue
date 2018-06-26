<template>
    <section class="index">
        <button class="button is-danger" @click="decrement">-</button>
        <button class="button is-primary" @click="increment">+</button>
    </section>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import { mapMutations } from 'vuex';

@Component
export default class Index extends Vue {
    @Prop() name!: string;
    @Prop() initialEnthusiasm!: number;

    ...mapMutations([
      'incr',
      'decr'
    ]),
    increment() {
    }

    decrement() {
    }

    get Counter(): string {
        return (this.enthusiasm + 1).toString();
    }
}
</script>

<style scoped>
</style>
