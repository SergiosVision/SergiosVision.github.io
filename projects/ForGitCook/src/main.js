import Vue from 'vue'
import App from './vue_components/App.vue'

import {store} from './store'
import {router} from './routes'

import Filter from './vue_components/MainComponents/Filter.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.http.options.root = '/';

Vue.component('filter-app', Filter);

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
