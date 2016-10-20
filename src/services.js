import Vue from 'vue'

module.exports = {
  // https://github.com/vuejs/vue-router/issues/648
  getStripeConfig: Vue.http.get('http://letsgaigai.com/stripeConfig')
}
