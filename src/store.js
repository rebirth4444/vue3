import Vue from "vue";
import Vuex from "vuex";
import datatable from "./store/datatable";
import  getters from "./store/getters";

Vue.use(Vuex);


//module内获取state this.$store.state.datatable.xxxx;
export default new Vuex.Store({
  modules:{
    datatable
  },
  getters
  // state: {
    
  // },
  // mutations: {},
  // actions: {}
});
