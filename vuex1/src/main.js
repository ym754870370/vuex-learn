// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false
    /*vuex-test*/
const store = new Vuex.Store({
    strict: true,
    state: {
        count: 0,
        inputContent: ''
    },
    mutations: {
        increment (state) {
            state.count++;
        },
        incrementNum (state,payload) {
            state.count += payload;
        },
        reset (state) {
            state.count = 0;
        },
        updateContent (state,content) {
            state.inputContent = content;
        }
    },
    getters: {
        countSquare: state => {
            return state.count * state.count
        }
    },
    actions: {
        testAction (context) {//返回的为异步promise函数
            setTimeout(function(){context.commit('increment')},1000);
        }
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
