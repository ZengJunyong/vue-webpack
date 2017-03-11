import Vue from 'vue'
import {domain} from './config'

module.exports = {
  // https://github.com/vuejs/vue-router/issues/648
  getStripeConfig: Vue.http.get(domain + 'stripeConfig'),
  pay: payment => Vue.http.post(domain + 'stripe', payment),
  addCard: obj => Vue.http.post(domain + 'addCard', obj)
}
