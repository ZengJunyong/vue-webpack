<template>
  <div v-if="plan">
    MYR{{plan.amount}}
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
  import {getObj} from '../util'

  export default {
    name: 'Custom',
    data () {
      return {
        plan: null
      }
    },
    methods: {
      choosePayment(){
        this.$router.push({name: 'pay', query: getObj(this.plan)})
      }
    },
    beforeRouteEnter: (to, from, next) => {

    }
  }
</script>

<style scoped>
  .btn-primary {
    color: #fff;
    background-color: black;
    border-color: black;
    margin-bottom: 25px;
  }
</style>
