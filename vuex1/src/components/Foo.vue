<template>
    <div>
        <h1>{{msg}}</h1>
        <p>count: {{count}}</p>
        <p>countSquare: {{countSquare}}</p>
        <button @click="increment">addCount</button>
        <p>inputContent: {{inputContent}}</p>
    </div>
</template>

<script>
export default {
    name: 'Foo',
    data () {
        return {
            msg: 'Foo'
        }
    },
    computed:{
        count:function () {
            return this.$store.state.count;
        },
        countSquare () {
            return this.$store.getters.countSquare;
        },
        inputContent:function () {
            return this.$store.state.inputContent;
        }
    },
    methods: {
        increment:function () {
            this.$store.commit('increment');
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
