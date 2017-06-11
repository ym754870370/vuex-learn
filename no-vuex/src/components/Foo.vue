<template>
    <div>
        <h1>{{msg}}</h1>
        <p>{{count}}</p>
    </div>
</template>

<script>
import EventBus from '../EventBus.js'
export default {
    name: 'Foo',
    data () {
        return {
            msg: 'Foo',
            count: 0
        }
    },
    methods: {
        increment () {
            this.count ++;
        }
    },    
    mounted () {
        EventBus.$on('incrementFoo',this.increment);
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
