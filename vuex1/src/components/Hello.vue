<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <p>count: {{$store.state.count}}</p>
        <p>countSquare: {{$store.getters.countSquare}}</p>
        <p>
            <button @click="addcount">add</button>
            <button @click="addcountNum(3)">add3</button>
            <button @click="reset">reset</button>
        </p>
        <button @click="watchGet">watch</button>
        <button @click="stopWatchGet">stopWatch</button>
        <p>
            <label>inputContent</label>
            <input type='text' v-model='inputContent'/>
        </p>
        <button @click="clickAction">异步action</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: 'hello',
    data () {
        return {
            msg: 'Hello',
            stopWatch:null,
            count:0
        }
    },
    computed: {
        /*count () {
            return this.$store.state.count;
        },*/
        countSquare () {
            return this.$store.getters.countSquare;
        },
        inputContent: {//改变参数需要通过设置get和set方法进行更新和修改
            get () {
                return this.$store.state.inputContent;
            },
            set (value) {
                this.$store.commit('updateContent',value);
            }
        }
    },
    methods: {
        watchGet:function () {
            this.stopWatch = this.$store.watch(
                function(state){
                    return state.count;
                },
                function(){
                    console.log(1);
                },
                {
                    deep: true
                });
            console.log('watching');
        },
        stopWatchGet:function () {
            if (!this.stopWatch) {
                this.stopWatch();
                this.stopWatch = null;
                console.log('stopwatch');
            }
        },
        addcount:function () {
            //debugger;
            this.$store.commit('increment');
        },
        addcountNum:function (num) {
            //debugger;
            this.$store.commit('incrementNum',num);
        },
        reset:function () {
            this.$store.commit('reset')//commit方法用来调用mutations方法，mutations方法不可以异步执行
        },
        clickAction:function () {
            this.$store.dispatch('testAction');//dispatch方法调用action,支持异步回调，当action返回promise函数时，可以通过.then执行下一步
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
