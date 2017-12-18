<template>
  <div>
      <app-header></app-header>
      <main>
          <app-jumbo></app-jumbo>
          <app-gang></app-gang>
      </main>
      <app-footer></app-footer>
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

    }
  }
}
</script>

<style>

</style>
