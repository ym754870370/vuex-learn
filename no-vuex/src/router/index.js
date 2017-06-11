import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Foo from '@/components/Foo.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        components: {
            default: Hello,
            foo: Foo
        }
    }]
})
