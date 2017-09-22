<template>
  <div id="app">
    <h1 class="text-center">Fleek</h1>
    <div class="container">
      <ul class="nav nav-pills" v-if="$route.query.custom=='no'">
        <li :class="{active: $route.name == 'full'}" v-if="$route.query.discount!='y'">
          <router-link
            :to="{ name: 'full', query: { custom: $route.query.custom,discount:$route.query.discount,months:$route.query.months }}">
            FULL
          </router-link>
        </li>
        <li :class="{active: $route.name == '10off'}" v-if="$route.query.discount=='y'">
          <router-link
            :to="{ name: '10off', query: { custom: $route.query.custom,discount:$route.query.discount,months:$route.query.months }}">
            MYR300 OFF
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
