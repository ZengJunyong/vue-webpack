<template>
  <div id="app">
    <h1 class="text-center">GaiGai</h1>
    <div class="container">
      <ul class="nav nav-pills" v-if="$route.query.custom=='no'">
        <li :class="{active: $route.name == 'full'}" v-if="$route.query.discount!='y'">
          <router-link
            :to="{ name: 'full', query: { custom: $route.query.custom,discount:$route.query.discount,months:$route.query.months }}">
            FULL
          </router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
</style>
