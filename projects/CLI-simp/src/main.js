import Vue from 'vue'
import App from './App.vue'
import Niggas from './Niggas.vue'

Vue.component('niggas', Niggas);

new Vue({
  el: '#app',
  render: h => h(App)
})
