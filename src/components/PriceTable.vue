<template>
  <table class="table" v-if="stripe">
    <tr>
      <th></th>
      <th>2 hours package</th>
      <th>6 hours package</th>
      <th>8 hours package</th>
      <th>12 hours package</th>
      <th>18 hours package</th>
    </tr>
    <tr>
      <td>No installment</td>
      <td v-for="payment of stripe.payments">
        MYR{{payment.amount}}
        <br>
        <button @click="choosePayment(payment)" type="button" class="btn btn-primary">Pay with Card</button>
      </td>
    </tr>
    <tr v-if="months>=3">
      <td>3 months installment</td>
      <td v-for="plan of stripe.plans['3 months']" >
        MYR{{plan.amount}}
        <br>
        <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
      </td>
    </tr>
    <tr v-if="months>=6">
      <td>6 months installment</td>
      <td></td>
      <td v-for="plan of stripe.plans['6 months']" >
        MYR{{plan.amount}}
        <br>
        <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
      </td>
    </tr>
    <tr v-if="months>=9">
      <td>9 months installment</td>
      <td></td>
      <td></td>
      <td v-for="plan of stripe.plans['9 months']" >
        MYR{{plan.amount}}
        <br>
        <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
      </td>
    </tr>
    <tr v-if="months>=12">
      <td>12 months installment</td>
      <td></td>
      <td></td>
      <td v-for="plan of stripe.plans['12 months']" >
        MYR{{plan.amount}}
        <br>
        <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
      </td>
    </tr>
  </table>

</template>

<script>
  import {getObj} from '../util'

  export default {
    name: 'PriceTable',
    data () {
      return {
        stripe: null,
        months: null
      }
    },
    methods: {
      choosePayment(plan){
        this.$router.push({name: 'pay', query: getObj(plan)})
      }
    },
    beforeRouteEnter: (to, from, next) => {
      var config = {
          "full": {
              "payments": [
                  {"amount": 800, "itemName": "2-hours package - No Installment"},
                  {"amount": 1899, "itemName": "6-hours package - No Installment"},
                  {"amount": 2499, "itemName": "8-hours package - No Installment"},
                  {"amount": 2999, "itemName": "12-hours package - No Installment"},
                  {"amount": 3599, "itemName": "18-hours package - No Installment"}
              ],
              "plans": {
                "3 months": [
                  {"amount": 266.67, "itemName": "2-hours package - 3 months", "count": 3, "id": "full-2-3-sep-2017"},
                  {"amount": 633, "itemName": "6-hours package - 3 months", "count": 3, "id": "full-6-3-sep-2017"},
                  {"amount": 333, "itemName": "8-hours package - 3 months", "count": 3, "id": "full-8-3-sep-2017"},
                  {"amount": 999.67, "itemName": "12-hours package - 3 months", "count": 3, "id": "full-12-3-sep-2017"},
                  {"amount": 1199.67, "itemName": "18-hours package - 3 months", "count": 3, "id": "full-18-3-sep-2017"}
                ],
                "6 months": [
                  {"amount": 316.5, "itemName": "6-hours package - 6 months", "count": 6, "id": "full-6-6-sep-2017"},
                  {"amount": 416.5, "itemName": "8-hours package - 6 months", "count": 6, "id": "full-8-6-sep-2017"},
                  {"amount": 499.83, "itemName": "12-hours package - 6 months", "count": 6, "id": "full-12-6-sep-2017"},
                  {"amount": 599.83, "itemName": "18-hours package - 6 months", "count": 6, "id": "full-18-6-sep-2017"}
                ],
                "9 months": [
                  {"amount": 277.67, "itemName": "8-hours package - 9 months", "count": 9, "id": "full-8-9-sep-2017"},
                  {"amount": 333.22, "itemName": "12-hours package - 9 months", "count": 9, "id": "full-12-9-sep-2017"},
                  {"amount": 399.89, "itemName": "18-hours package - 9 months", "count": 9, "id": "full-18-9-sep-2017"}
                ],
                "12 months": [
                  {"amount": 208.25, "itemName": "8-hours package - 12 months", "count": 12, "id": "full-8-12-sep-2017"},
                  {"amount": 249.92, "itemName": "12-hours package - 12 months", "count": 12, "id": "full-12-12-sep-2017"},
                  {"amount": 299.92, "itemName": "18-hours package - 12 months", "count": 12, "id": "full-18-12-sep-2017"}
                ]
              }
          }
      }
      next(vm => {
        vm.stripe = config[vm.$route.query.discount]
        vm.months = vm.$route.query.months * 1
      })
    }
  }
</script>

<style scoped>
  .table {
    margin-top: 20px;
  }

  th, td {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }
</style>
