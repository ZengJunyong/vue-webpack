import "../bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss";

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)
Vue.use(require('vue-resource'))
Vue.use(require('vue-verify'))

new Vue({
  el: '#app',
  render: h => h(App),
  router: new VueRouter({
    routes: [
      {path: '/', redirect: '/price'},
      {path: '/rm', component: require('components/RM')},
      {name: 'price', path: '/price', component: require('components/PriceTable')},
      {name: 'pay', path: '/pay', component: require('components/Pay')},
      {name: 'addCard', path: '/addCard', component: require('components/AddCard')}
    ]
  })
})
