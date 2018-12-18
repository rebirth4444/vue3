import Vue from "vue";
export default {
    get() {
        return new Promise((resolve,reject) => {
            Vue.axios.get('/user').then(response => {
                resolve(response)
            })
        })
    }
}