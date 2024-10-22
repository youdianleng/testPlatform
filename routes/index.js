import {createRouter, createWebHistory} from 'vue-router';

import HomePage from '../resources/views/components/HomePage.vue';
import AboutPage from '../resources/views/components/AboutPage.vue';
import NotFoundPage from '../resources/views/components/NotFoundPage.vue';



const routes = [
    {
        path: '/',
        component: HomePage,
        meta: {
            title:'首页'
        }
    },
    {
        path:'/about',
        component:AboutPage,
        meta: {
            title:'关于我'
        }
    },
    {
        path:'/:patchMatch(.*)',
        component:NotFoundPage,
        meta: {
            title:'404'
        }
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router