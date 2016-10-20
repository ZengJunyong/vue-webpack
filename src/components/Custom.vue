<template>
  <div v-if="plan">
    S${{plan.amount}}
    <br>
    <button @click="choosePayment()" type="button" class="btn btn-primary">
      {{plan.count? 'Subscribe':'Pay with Card'}}
    </button>
  </div>

</template>

<script>
  // http://router.vuejs.org/zh-cn/advanced/data-fetching.html
  // 在导航完成前获取数据
  import {getStripeConfig} from '../services'

  export default {
    name: 'Custom',
    data () {
      return {
        plan: null
      }
    },
    methods: {
      choosePayment(){
        console.log('choose')
      }
    },
    beforeRouteEnter: (to, from, next) => {
      // https://github.com/vuejs/vue-router/issues/648
      getStripeConfig
        .then(
          function (res) {
            next(
              function (vm) {
                vm.plan = JSON.parse(res.body)[to.name]
              }
            )
          }
        )
    }
  }
</script>

<style scoped>
</style>
