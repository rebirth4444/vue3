import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from './axios'
import VueAxios from 'vue-axios'
import { sync } from 'vuex-router-sync'
// import "./registerServiceWorker";
import "./plugins/element.js";

// 插件
Vue.use(Vuex);
Vue.use(VueAxios, axios);
sync(store, router);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");