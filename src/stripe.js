// http://router.vuejs.org/zh-cn/advanced/data-fetching.html
// 在导航完成前获取数据

import Vue from 'vue'

module.exports = {
  beforeRouteEnter: (to, from, next) => {
    // https://github.com/vuejs/vue-router/issues/648
    Vue.http.get('http://letsgaigai.com/stripeConfig')
      .then(
        function (res) {
          next(vm => {
            vm.stripe = JSON.parse(res.body)[to.name]
            vm.months = vm.$route.query.months * 1
          })
        }
      )
  }
}
