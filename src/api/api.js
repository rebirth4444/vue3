import Vue from "vue";
export default {
    isLogin () {
        return new Promise((resolve)=>{
            Vue.axios.get('/user/isLogin').then(res =>{
                resolve(res)
            },error=>{
                resolve(error);
            });
        })
    },
    get() {
        return new Promise((resolve) => {
            Vue.axios.get('/user').then(res => {
                resolve(res)
            },error =>{
                resolve(error);
            })
        })
    }
}