<template>
  <table class="table" v-if="stripe">
    <tr>
      <th></th>
      <th>1 date package</th>
      <th>3 date package</th>
      <th>5 date package</th>
      <th>10 date package</th>
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
      <td></td>
      <td v-for="plan of stripe.plans['3 months']">
        S${{plan.amount}}
        <br>
        <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
      </td>
    </tr>
    <tr v-if="months>=6">
      <td>6 months installment</td>
      <td></td>
      <td v-for="plan of stripe.plans['6 months']">
        S${{plan.amount}}
        <br>
        <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
      </td>
    </tr>
    <tr v-if="months>=9">
      <td>9 months installment</td>
      <td></td>
      <td v-for="plan of stripe.plans['9 months']">
        S${{plan.amount}}
        <br>
        <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
      </td>
    </tr>
    <tr v-if="months>=12">
      <td>12 months installment</td>
      <td></td>
      <td v-for="plan of stripe.plans['12 months']">
        S${{plan.amount}}
        <br>
        <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
      </td>
    </tr>
  </table>

</template>

<script>
  // http://router.vuejs.org/zh-cn/advanced/data-fetching.html
  // 在导航完成前获取数据
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
            {"amount": 226.67, "itemName": "GaiGai 1-dates package - No Installment"},
            {"amount": 633, "itemName": "GaiGai 3-dates package - No Installment"},
            {"amount": 733, "itemName": "GaiGai 5-dates package - No Installment"},
            {"amount": 2699, "itemName": "GaiGai 10-dates package - No Installment"}
          ],
          "plans": {
            "3 months": [
              {"amount": 316.5, "itemName": "3 dates package - 3 months", "count": 3, "id": "full-3-3-nov-2016"},
              {"amount": 366.5, "itemName": "5 dates package - 3 months", "count": 3, "id": "full-5-3-nov-2016"},
              {"amount": 449.83, "itemName": "10 dates package - 3 months", "count": 3, "id": "full-10-3-nov-2016"}
            ],
            "6 months": [
              {"amount": 211, "itemName": "3 dates package - 6 months", "count": 6, "id": "full-3-6-nov-2016"},
              {"amount": 244.33, "itemName": "5 dates package - 6 months", "count": 6, "id": "full-5-6-nov-2016"},
              {"amount": 299.89, "itemName": "10 dates package - 6 months", "count": 6, "id": "full-10-6-nov-2016"}
            ],
            "9 months": [
              {"amount": 265, "itemName": "3 dates package - 9 months", "count": 9, "id": "full-3-9-nov-2016"},
              {"amount": 305, "itemName": "5 dates package - 9 months", "count": 9, "id": "full-5-9-nov-2016"},
              {"amount": 365, "itemName": "10 dates package - 9 months", "count": 9, "id": "full-10-9-nov-2016"}
            ],
            "12 months": [
              {"amount": 198.75, "itemName": "3 dates package - 12 months", "count": 12, "id": "full-3-12-nov-2016"},
              {"amount": 228.75, "itemName": "5 dates package - 12 months", "count": 12, "id": "full-5-12-nov-2016"},
              {"amount": 273.75, "itemName": "10 dates package - 12 months", "count": 12, "id": "full-10-12-nov-2016"}
            ]
          }
        },
        "10off": {
          "payments": [
            {"amount": 945, "itemName": "GaiGai 1-dates package - $300 OFF"},
            {"amount": 2025, "itemName": "GaiGai 3-dates package - $300 OFF"},
            {"amount": 2385, "itemName": "GaiGai 5-dates package - $300 OFF"},
            {"amount": 2925, "itemName": "GaiGai 10-dates package - $300 OFF"}
          ],
          "plans": {
            "3 months": [
              {"amount": 675, "itemName": "3 dates package - $300 off - 3 months", "count": 3, "id": "per10-3-3-nov-2016"},
              {"amount": 795, "itemName": "5 dates package - $300 off - 3 months", "count": 3, "id": "per10-5-3-nov-2016"},
              {"amount": 975, "itemName": "10 dates package - $300 off - 3 months", "count": 3, "id": "per10-10-3-nov-2016"}
            ],
            "6 months": [
              {"amount": 337.5, "itemName": "3 dates package - $300 off - 6 months", "count": 6, "id": "per10-3-6-nov-2016"},
              {"amount": 397.5, "itemName": "5 dates package - $300 off - 6 months", "count": 6, "id": "per10-5-6-nov-2016"},
              {"amount": 487.5, "itemName": "10 dates package - $300 off - 6 months", "count": 6, "id": "per10-10-6-nov-2016"}
            ],
            "9 months": [
              {"amount": 225, "itemName": "3 dates package - $300 off - 9 months", "count": 9, "id": "per10-3-9-nov-2016"},
              {"amount": 265, "itemName": "5 dates package - $300 off - 9 months", "count": 9, "id": "per10-5-9-nov-2016"},
              {"amount": 325, "itemName": "10 dates package - $300 off - 9 months", "count": 9, "id": "per10-10-9-nov-2016"}
            ],
            "12 months": [
              {"amount": 168.75, "itemName": "3 dates package - $300 off - 12 months", "count": 12, "id": "per10-3-12-nov-2016"},
              {"amount": 198.75, "itemName": "5 dates package - $300 off - 12 months", "count": 12, "id": "per10-5-12-nov-2016"},
              {"amount": 243.75, "itemName": "10 dates package - $300 off - 12 months", "count": 12, "id": "per10-10-12-nov-2016"}
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
