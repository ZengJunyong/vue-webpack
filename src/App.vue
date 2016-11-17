<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container" style="height: 60px;font-size: 14px;">
        <div class="navbar-header">
          <a class="navbar-brand active" href="#/home">
            <!--<img class="logo" src="gokaikai/assets/images/logo.png"/>-->
          </a>
        </div>
      </div>
    </nav>
    <h1 class="text-center">GaiGai</h1>
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
            S$300 OFF
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
