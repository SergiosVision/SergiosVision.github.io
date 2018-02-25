// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'
import Alert from './components/Shared/Alert.vue'
import EditDialog from './components/Meetups/Edit/EditMeetupDetail.vue'
import EditDate from './components/Meetups/Edit/EditMeetupDate.vue'
import EditTime from './components/Meetups/Edit/EditMeetupTime.vue'
import RegisterDialog from './components/Meetups/Registration/RegisterDialog.vue'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.filter('date', DateFilter)

Vue.component('app-alert', Alert)

Vue.component('app-edit-meetup', EditDialog)

Vue.component('app-edit-meetup-date', EditDate)

Vue.component('app-edit-meetup-time', EditTime)

Vue.component('app-register-dialog', RegisterDialog)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
        apiKey: 'AIzaSyA2XA4NIUyZxuv2UpZzsPSFK-vtEmhaCPU',
        authDomain: 'sergiosmeetupapp.firebaseapp.com',
        databaseURL: 'https://sergiosmeetupapp.firebaseio.com',
        projectId: 'sergiosmeetupapp',
        storageBucket: 'gs://sergiosmeetupapp.appspot.com',
    })
      firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.$store.dispatch('autoSignIn', user)
            this.$store.dispatch('fetchUserData')
          }
      })
    this.$store.dispatch('loadMeetups')
  }
})
