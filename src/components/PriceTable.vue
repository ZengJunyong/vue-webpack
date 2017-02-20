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
        S${{payment.amount}}
        <br>
        <button @click="choosePayment(payment)" type="button" class="btn btn-primary">Pay with Card</button>
      </td>
    </tr>
    <tr v-if="months>=3">
      <td>3 months installment</td>
      <td v-for="plan of stripe.plans['3 months']" >
        S${{plan.amount}}
        <br>
        <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
      </td>
    </tr>
    <tr v-if="months>=6">
      <td>6 months installment</td>
      <td></td>
      <td v-for="plan of stripe.plans['6 months']" >
        S${{plan.amount}}
        <br>
        <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
      </td>
    </tr>
    <tr v-if="months>=9">
      <td>9 months installment</td>
      <td></td>
      <td v-for="plan of stripe.plans['9 months']" >
        S${{plan.amount}}
        <br>
        <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
      </td>
    </tr>
    <tr v-if="months>=12">
      <td>12 months installment</td>
      <td></td>
      <td v-for="plan of stripe.plans['12 months']" >
        S${{plan.amount}}
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
                  {"amount": 2199, "itemName": "8-hours package - No Installment"},
                  {"amount": 2699, "itemName": "12-hours package - No Installment"},
                  {"amount": 3299, "itemName": "18-hours package - No Installment"}
              ],
              "plans": {
                  "3 months": [
                      {"amount": 266.67, "itemName": "2-hours package - 3 months", "count": 3, "id": "full-2-3-nov-2016"},
                      {"amount": 633, "itemName": "6-hours package - 3 months", "count": 3, "id": "full-6-3-nov-2016"},
                      {"amount": 733, "itemName": "8-hours package - 3 months", "count": 3, "id": "full-8-3-nov-2016"},
                      {"amount": 899.67, "itemName": "12-hours package - 3 months", "count": 3, "id": "full-12-3-nov-2016"},
                      {"amount": 1099.67, "itemName": "18-hours package - 3 months", "count": 3, "id": "full-18-3-nov-2016"}
                  ],
                  "6 months": [
                      {"amount": 316.5, "itemName": "6-hours package - 6 months", "count": 6, "id": "full-6-6-nov-2016"},
                      {"amount": 366.5, "itemName": "8-hours package - 6 months", "count": 6, "id": "full-8-6-nov-2016"},
                      {"amount": 449.83, "itemName": "12-hours package - 6 months", "count": 6, "id": "full-12-6-nov-2016"},
                      {"amount": 549.83, "itemName": "18-hours package - 6 months", "count": 6, "id": "full-18-6-nov-2016"}
                  ],
                  "9 months": [
                      {"amount": 211, "itemName": "6-hours package - 9 months", "count": 9, "id": "full-6-9-nov-2016"},
                      {"amount": 244.33, "itemName": "8-hours package - 9 months", "count": 9, "id": "full-8-9-nov-2016"},
                      {"amount": 299.89, "itemName": "12-hours package - 9 months", "count": 9, "id": "full-12-9-nov-2016"},
                      {"amount": 366.56, "itemName": "18-hours package - 9 months", "count": 9, "id": "full-18-9-nov-2016"}
                  ],
                  "12 months": [
                      {"amount": 158.25, "itemName": "6-hours package - 12 months", "count": 12, "id": "full-6-12-nov-2016"},
                      {"amount": 183.25, "itemName": "8-hours package - 12 months", "count": 12, "id": "full-8-12-nov-2016"},
                      {"amount": 224.92, "itemName": "12-hours package - 12 months", "count": 12, "id": "full-12-12-nov-2016"},
                      {"amount": 274.92, "itemName": "18-hours package - 12 months", "count": 12, "id": "full-18-12-nov-2016"}
                  ]
              }
          },
          "10off": {
              "payments": [
                  {"amount": 700, "itemName": "2-hours package - $100 OFF"},
                  {"amount": 1799, "itemName": "6-hours package - $100 OFF"},
                  {"amount": 2099, "itemName": "8-hours package - $100 OFF"},
                  {"amount": 2599, "itemName": "12-hours package - $100 OFF"},
                  {"amount": 3199, "itemName": "18-hours package - $100 OFF"}
              ],
              "plans": {
                  "3 months": [
                      {"amount": 233.33, "itemName": "2-hours package - $100 off - 3 months", "count": 3, "id": "discount-2-3-nov-2016"},
                      {"amount": 599.67, "itemName": "6-hours package - $100 off - 3 months", "count": 3, "id": "discount-6-3-nov-2016"},
                      {"amount": 699.67, "itemName": "8-hours package - $100 off - 3 months", "count": 3, "id": "discount-8-3-nov-2016"},
                      {"amount": 866.33, "itemName": "12-hours package - $100 off - 3 months", "count": 3, "id": "discount-12-3-nov-2016"},
                      {"amount": 1066.33, "itemName": "18-hours package - $100 off - 3 months", "count": 3, "id": "discount-18-3-nov-2016"}
                  ],
                  "6 months": [
                      {"amount": 299.83, "itemName": "6-hours package - $100 off - 6 months", "count": 6, "id": "discount-6-6-nov-2016"},
                      {"amount": 349.83, "itemName": "8-hours package - $100 off - 6 months", "count": 6, "id": "discount-8-6-nov-2016"},
                      {"amount": 433.17, "itemName": "12-hours package - $100 off - 6 months", "count": 6, "id": "discount-12-6-nov-2016"},
                      {"amount": 533.17, "itemName": "18-hours package - $100 off - 6 months", "count": 6, "id": "discount-18-6-nov-2016"}
                  ],
                  "9 months": [
                      {"amount": 199.89, "itemName": "6-hours package - $100 off - 9 months", "count": 9, "id": "discount-6-9-nov-2016"},
                      {"amount": 233.22, "itemName": "8-hours package - $100 off - 9 months", "count": 9, "id": "discount-8-9-nov-2016"},
                      {"amount": 288.78, "itemName": "12-hours package - $100 off - 9 months", "count": 9, "id": "discount-12-9-nov-2016"},
                      {"amount": 355.44, "itemName": "18-hours package - $100 off - 9 months", "count": 9, "id": "discount-18-9-nov-2016"}
                  ],
                  "12 months": [
                      {"amount": 149.92, "itemName": "6-hours package - $100 off - 12 months", "count": 12, "id": "discount-6-12-nov-2016"},
                      {"amount": 174.92, "itemName": "8-hours package - $100 off - 12 months", "count": 12, "id": "discount-8-12-nov-2016"},
                      {"amount": 216.58, "itemName": "12-hours package - $100 off - 12 months", "count": 12, "id": "discount-12-12-nov-2016"},
                      {"amount": 266.58, "itemName": "18-hours package - $100 off - 12 months", "count": 12, "id": "discount-18-12-nov-2016"}
                  ]
              }
          }
      }
      next(vm => {
        vm.stripe = config[to.name]
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
