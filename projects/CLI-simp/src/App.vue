<template>
  <div>
      <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
      <main>
          <app-jumbo></app-jumbo>
          <app-gang v-bind:gang="gang"></app-gang>
      </main>
      <app-footer v-bind:copy="copy"></app-footer>
  </div>
</template>


<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Jumbotron from './components/Jumbotron.vue'
import Gang from './components/Gang.vue'

export default {
  components: {
      'app-header': Header,
      'app-jumbo': Jumbotron,
      'app-gang': Gang,
      'app-footer': Footer
  },
  data () {
    return {
        gang: [
            {"name":"Sergios Vision", "speciality":"Vue components", show: false},
            {"name":"Barot Bellingham", "speciality":"HTML", show: false},
            {"name":"Jonathan G. Ferrar II", "speciality":"Canvas", show: false},
            {"name":"Hillary Hewitt Goldwynn-Post", "speciality":"Data Grab", show: false},
        ],
        title: "Vue Sergios Example",
        copy: 'SergiosVision'
    }
  },
  methods: {
      updateTitle: function (updatedTitle) {
          this.title = updatedTitle
      }
  }
}
</script>

<style>
    body {
        background: url(/src/assets/background.png);
        background-position: center center;
    }
</style>
