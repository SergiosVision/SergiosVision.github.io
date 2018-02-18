import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

// Custom directives Global

// Vue.directive('random', {
//     bind(el, binding, vnode) {
//         el.style.color = "#" + Math.random().toString().slice(2,8)
//     }
// });

Vue.directive('theme', {
    bind(el, binding, vnote) {
        if (binding.value === 'wide') {
            el.style.maxWidth = '100%'
        } else if (binding.value === 'narrow') {
            el.style.maxWidth = '560px'
        }

        if (binding.arg === 'column') {
            el.style.backgroundColor = '#ddd';
            el.style.padding = '20px';
        }
    }
});


// Filters Global

// Vue.filter('to-uppercase', function (value) {
//     return value.toUpperCase();
// });
//
// Vue.filter('snippet', function (value) {
//     return value.slice(0, 100) + '...';
// });


// Render

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
