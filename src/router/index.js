import vue from 'vue'
import Router from 'vue-router'


import About_us from '../components/about.vue'
import Home from '../components/Home.vue'
import Services from '../components/services.vue'
Vue.use(Router)

const router=new Router({
    routes:[
        {
            path:'/Home',
            component:Home,
            name:'Home'
        },
        {
            path:'/about_us',
            component:About_us,
            name:'about_us'
        },
        {
            path:'/Services',
            component:About_us,
            name:'Services'
        }
    ],
    //remove # in url
    mode: 'history'
}) 

export default router
