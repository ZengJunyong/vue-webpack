import "../bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss";
import "assets/main.css";

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
      {path: '/', redirect: '/custom'},
      {path: '/rm', component: require('components/RM')},
      {name: 'price', path: '/price', component: require('components/PriceTable')},
      {name: 'custom', path: '/custom', component: require('components/Custom')},
      {name: 'custom2', path: '/custom2', component: require('components/Custom')},
      {name: 'custom3', path: '/custom3', component: require('components/Custom')},
      {name: 'custom4', path: '/custom4', component: require('components/Custom')},
      {name: 'custom5', path: '/custom5', component: require('components/Custom')},
      {name: 'pay', path: '/pay', component: require('components/Pay')},
      {name: 'addCard', path: '/addCard', component: require('components/AddCard')}
    ]
  })
})
