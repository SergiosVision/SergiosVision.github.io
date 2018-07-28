import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Index from './vue_components/MainComponents/Index.vue';
import Recipe from './vue_components/Recipe.vue';
import E404 from './vue_components/E404.vue'

const routes = [
    {
        path: '/',
        component: Index,
        props: route => ({ query: route.query.q })
    },
    {
        path: '/recipes/:id',
        component: Recipe,
        name: 'Recipe',
        props: true
    },
    {
        path: '*',
        component: E404
    }
];


export const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});