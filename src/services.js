import Vue from 'vue'

// path = 'https://letsgaigai.com/'
let path = 'http://localhost:4000/'

module.exports = {
  // https://github.com/vuejs/vue-router/issues/648
  getStripeConfig: Vue.http.get('http://letsgaigai.com/stripeConfig'),

  pay: payment => Vue.http.post(path + 'stripe', payment)
}
