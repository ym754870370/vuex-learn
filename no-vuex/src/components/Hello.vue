<template>
    <div>
        <h1>{{msg}}</h1>
        <p>{{count}}</p>
        <button @click="increment">addCount</button>
    </div>
</template>

<script>
import EventBus from '../EventBus.js'
export default {
    name: 'Hello',
    data () {
        return {
            msg: 'Hello',
            count: 0
        }
    },
    methods: {
        increment () {
            this.count ++;
            EventBus.$emit('incrementFoo');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
    text-align: left;
}
p {
    text-align: center;
}
</style>
