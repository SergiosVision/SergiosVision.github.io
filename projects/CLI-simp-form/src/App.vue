<template>
  <div class="wrapper">
      <form-helper>
          <div slot="form-header" class="">
              <h3>This is a title of the form</h3>
              <p class="information">Information about the form</p>
          </div>
          <div slot="form-fields">
              <div class="row">
                  <div class="input-field col s6">
                      <input id="first_name" type="text" class="validate">
                      <label for="first_name">First Name</label>
                  </div>
                  <div class="input-field col s6">
                      <input id="last_name" type="text" class="validate">
                      <label for="last_name">Last Name</label>
                  </div>
              </div>
              <div class="row">
                  <div class="input-field col s12">
                      <input id="password" type="password" class="validate">
                      <label for="password">Password</label>
                  </div>
              </div>
              <div class="row">
                  <div class="input-field col s12">
                      <input id="email" type="email" class="validate">
                      <label for="email">Email</label>
                  </div>
              </div>
          </div>
          <div slot="form-controls" class="form-controls">
              <div class="switch">
                  <label>
                      Off
                      <input type="checkbox">
                      <span class="lever"></span>
                      On
                  </label>
              </div>
              <button v-on:click="handleSubmit" class="waves-effect waves-light btn">Submit</button>
          </div>
      </form-helper>
  </div>
</template>


<script>

import formHelper from './components/formHelper.vue'

export default {
  components: {
        'form-helper': formHelper
  },
  data () {
    return {
        title: 'Sergios Slots Title'
    }
  },
  methods: {

  }
}
</script>

<style>
    body {
        background: url(/src/assets/background.png);
        background-position: center center;
    }
    .information{
        text-align: center;
    }
    #form-controls {
        text-align: left;
    }
    #form-controls .switch {
        display: inline-block;
    }
    #form-controls button {
        margin-left: 30px;
    }
    #useful-links {
        margin-top: 40px;
    }
    #useful-links ul{
        display: flex;
        justify-content: space-between;
    }
</style>
