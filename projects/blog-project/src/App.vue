<style lang="sass">
    @import url('https://fonts.googleapis.com/css?family=Oswald:400,700');
    body
        margin: 0
        font-family: 'Oswald', sans-serif

    .app-container
        min-height: 100vh
        padding: 0 0 20px 0

</style>


<template>
  <div class="app-container">
      <app-header></app-header>
      <router-view></router-view>
  </div>
</template>


<script>

import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import header from './components/header.vue';

export default {
    components: {
      'add-blog': addBlog,
      'show-blogs': showBlog,
      'list-blogs': listBlogs,
      'app-header': header
    },
    data() {
        return {

        }
    },
    methods: {

    }
}


</script>