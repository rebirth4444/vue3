import axios from 'axios'
// import { Message, LoadingBar } from 'iview'
import store from '@/store'
import router from '@/router'

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 5000

// http请求拦截器
axios.interceptors.request.use(
    config => {
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        // if(token){
        //   config.params = {'token':token}
        // }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// http响应拦截器
axios.interceptors.response.use(data => {
    if (!data || typeof data.data !== 'object') {
        // LoadingBar.error()
        // Message.error('服务器响应格式错误')
    } else {
        console.log('-----------------------');
        console.log(data);
        console.log('-----------------------');

    }
    // LoadingBar.finish()
    return data.data
}, error => {
    // let errmsg = '服务器响应错误'
    if (error.response) {
        switch (error.response.status) {
            case 401:
                // errmsg = '请登录后操作'
                store.commit('clearToken')
                router.replace('/login')
                break
        }
    }
    // LoadingBar.error()
    // Message.error(errmsg)
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log(error.response.data);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>');

    return Promise.reject(error.response.data)
})
export default axios;