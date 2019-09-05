import Router from 'vue-router';
import Vue from 'vue';
import Welcome from '../Welcome.vue';
import MultiCouter from '../MultiCouter.vue';
import zhuye from '../zhuye.vue';


Vue.use(Router)

export default new Router({
    routes: [
        // {

        //     path: "/welcome/:name",
        //     component: Welcome,
        //     props: true
        // },
        {
            path: "/welcome/:name",   
            component: Welcome, 
            props:true,
            children: [{
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: 'counter',
                    component: MultiCouter
                },
                {
                    // 当 /user/:id/posts 匹配成功
                    // UserPosts 会被渲染在 User 的 <router-view> 中
                    path: 'todolist',
                    redirect: '/'
                }
            ]
        },
        // {
        //     path: "/couter",
        //     component: MultiCouter
        // },
        // {
        //     path: "/todolist",
        //     redirect: '/'
        // },
         {
             path: '/',
             component: zhuye
         }
    ]
})