// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)
Vue.use(require('vue-resource'))

new Vue({
  el: '#app',
  render: h => h(App),
  router: new VueRouter({
    routes: [
      {path: '/rm', component: require('components/RM')}
    ]
  })
})
