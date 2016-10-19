<template>
  <div id="app">
    <h1 class="text-center">GaiGai</h1>

    <div class="container">

      <router-view></router-view>

    </div>
  </div>

</template>

<script>
  import Hello from './components/Hello'
  import Dialect from './components/Dialect'
  import Resouce from './components/Resouce'
  import RM from './components/RM.vue'

  export default {
    components: {
      Hello, Dialect, Resouce, RM
    }
  }
</script>

<style>
</style>
