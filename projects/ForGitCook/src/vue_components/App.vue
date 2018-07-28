<template>
  <div class="sv-viewWrapper">
    <header-app></header-app>
    <main>
      <router-view></router-view>
    </main>
    <transition name="opacity">
      <div class="sv-overlay" v-if="modalActive" @click="hideModal"></div>
    </transition>
  </div>
</template>

<script>
  import Header from './MainComponents/Header';
  import { mapMutations, mapGetters } from 'vuex';
  export default {
    components: {
        'header-app': Header
    },
    methods: {
        ...mapMutations('modals', ['showModal', 'hideModal'])
    },
    computed: {
        ...mapGetters('modals', {
            modalActive: 'modalActive'
        })
    }
  }
</script>

<style>

</style>