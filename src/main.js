import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from './axios';
import VueAxios from 'vue-axios';
import '@/assets/iconfont.css';
import { sync } from 'vuex-router-sync';
// import "./registerServiceWorker";
import "./plugins/element.js";

// 插件
Vue.use(Vuex);
Vue.use(VueAxios, axios);
sync(store, router);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => { //beforeEach是router的钩子函数，在进入路由前执行
    if (to.meta.title) { //判断是否有标题
        document.title = to.meta.title
    }
    next() //执行进入路由，如果不写就不会进入目标页
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");