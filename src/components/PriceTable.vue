<template>
  <table class="table" v-if="stripe">
    <tr>
      <th></th>
      <th>6 hours package</th>
      <th>8 hours package</th>
      <th>12 hours package</th>
      <th>18 hours package</th>
      <th>24 hours package</th>
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
                  {"amount": 1800, "itemName": "6-hours package - No Installment"},
                  {"amount": 2400, "itemName": "8-hours package - No Installment"},
                  {"amount": 3500, "itemName": "12-hours package - No Installment"},
                  {"amount": 5000, "itemName": "18-hours package - No Installment"},
                  {"amount": 6500, "itemName": "24-hours package - No Installment"}
              ],
              "plans": {
                "3 months": [
                  {"amount": 600, "itemName": "6-hours package - 3 months", "count": 3, "id": "fleek-6-3-aug-2018"},
                  {"amount": 800, "itemName": "8-hours package - 3 months", "count": 3, "id": "fleek-8-3-aug-2018"},
                  {"amount": 1166.67, "itemName": "12-hours package - 3 months", "count": 3, "id": "fleek-12-3-aug-2018"},
                  {"amount": 1666.67, "itemName": "18-hours package - 3 months", "count": 3, "id": "fleek-18-3-aug-2018"},
                  {"amount": 2166.67, "itemName": "24-hours package - 3 months", "count": 3, "id": "fleek-24-3-aug-2018"}
                ],
                "6 months": [
                  {"amount": 300, "itemName": "6-hours package - 6 months", "count": 6, "id": "fleek-6-6-aug-2018"},
                  {"amount": 400, "itemName": "8-hours package - 6 months", "count": 6, "id": "fleek-8-6-aug-2018"},
                  {"amount": 583.33, "itemName": "12-hours package - 6 months", "count": 6, "id": "fleek-12-6-aug-2018"},
                  {"amount": 833.33, "itemName": "18-hours package - 6 months", "count": 6, "id": "fleek-18-6-aug-2018"},
                  {"amount": 1083.33, "itemName": "24-hours package - 6 months", "count": 6, "id": "fleek-24-6-aug-2018"}
                ],
                "9 months": [
                  {"amount": 388.89, "itemName": "12-hours package - 9 months", "count": 9, "id": "fleek-12-9-aug-2018"},
                  {"amount": 555.56, "itemName": "18-hours package - 9 months", "count": 9, "id": "fleek-18-9-aug-2018"},
                  {"amount": 722.22, "itemName": "24-hours package - 9 months", "count": 9, "id": "fleek-24-9-aug-2018"}
                ],
                "12 months": [
                  {"amount": 291.67, "itemName": "12-hours package - 12 months", "count": 12, "id": "fleek-12-12-aug-2018"},
                  {"amount": 416.67, "itemName": "18-hours package - 12 months", "count": 12, "id": "fleek-18-12-aug-2018"},
                  {"amount": 541.67, "itemName": "24-hours package - 12 months", "count": 12, "id": "fleek-24-12-aug-2018"}
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
