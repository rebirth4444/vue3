import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
//前台页面
import Blog from "@/views/Blog.vue";

//后台页面
import Admin from "@/views/backstage/Home.vue";
import Main from "@/views/backstage/Main.vue";
import Article from "@/views/backstage/Article.vue";
import Test from "@/views/testTable.vue";

Vue.use(Router);

export default new Router({
    routes: [
        // {
        //   path: "/",
        //   name: "home",
        //   component: Home
        // },
        {
            path: "/about",
            meta: {
                title: '示例'
            },
            name: "about",
            component: () =>
                import( /* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/",
            name: "blog",
            meta: {
                title: '博客列表'
            },
            component: Blog
        },
        {
            path: "/test",
            name: "test",
            meta: {
                title: '测试页面'
            },
            component: Test
        },
        {
            path: '/backstage',
            name: 'backstage',
            redirect: '/backstage/main',
            component: resolve => { require(["@/views/backstage/Home.vue"], resolve) },
            children: [{
                path: 'blog',
                component: Blog
            }, {
                path: 'main',
                meta: {
                    title: '控制台'
                },
                component: Main
            }, {
                path: 'article',
                meta: {
                    title: '文章管理'
                },
                component: Article
            }]

        },
    ]
});