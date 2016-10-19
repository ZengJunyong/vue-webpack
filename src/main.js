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
      {path: '/', redirect: '/full'},
      {path: '/rm', component: require('components/RM')},
      {name: 'full', path: '/full', component: require('components/PriceTable')},
      {name: '10off', path: '/10off', component: require('components/PriceTable')},
      {name: 'custom', path: '/custom', component: require('components/Custom')},
      {name: 'custom2', path: '/custom2', component: require('components/Custom')},
      {name: 'custom3', path: '/custom3', component: require('components/Custom')}
    ]
  })
})
