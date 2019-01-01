import Vue from "vue"
const datatable = {
    state: {
        headerOptions: [],
        pageSize: 10,
        pageIndex: 1,
        dataList: [],
        dataTotal: 0,
        dataInfo: {},
        isEditor: false,
        pageLength: [10, 20, 30, 40]
    },
    mutations: {
        CHANGE_DATE(state, info) { //table参数设置
            state.pageSize = info.pageSize;
            state.pageIndex = info.pageIndex;
            state.dataList = info.dataList;
            state.dataTotal = info.dataTotal;
        },
        CHANGE_HEADER(state, header) { //table头部设置
            state.headerOptions = header;
        },
        DATA_INFO(state, info) {
            console.log('---------------------');
            console.log(info);
            console.log('---------------------');

            state.isEditor = true;
            state.dataInfo = info;
        },
        CLEAN_INFO(state) {
            state.dataInfo = {};
            state.isEditor = false;
        },
        CLEAN_DATA(state) {
            state.headerOptions = [];
            state.pageSize = 0;
            state.pageIndex = 1;
            state.dataList = [];
            state.dataTotal = 0;
            state.dataInfo = {};
            state.isEditor = false;
        },
    },
    actions: {
        claerData({ commit }) {
            commit('CLEAR_TABLE');
        },
        //获取tablelist
        setHeader({ commit }, info) {
            commit('CHANGE_HEADER', info);
        },
        axiosPost({ commit }, info, type) {
            var url = info.url;
            var type = info.type;
            delete info.type;
            delete info.url;
            return new Promise((resolve, reject) => {
                Vue.axios.post(url, info).then((res) => {
                    switch (type) {
                        case 'list':
                            commit('CHANGE_DATE', res.data);
                            break;
                        case 'info':
                            commit('LIST_INFO', res.data);
                            break;
                    };
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        axiosGet({ commit }, info) {
            var url = info.url;
            var type = info.type;
            delete info.type;
            delete info.url;
            return new Promise((resolve, reject) => {
                Vue.axios.get(url, info).then((res) => {
                    switch (type) {
                        case 'list':
                            commit('CHANGE_DATE', res.data);
                            break;
                        case 'info':
                            commit('LIST_INFO', res.data);
                            break;
                    };
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        }
    }
}

export default datatable;