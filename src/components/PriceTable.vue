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
                  {"amount": 2499, "itemName": "8-hours package - No Installment"},
                  {"amount": 2999, "itemName": "12-hours package - No Installment"},
                  {"amount": 3599, "itemName": "18-hours package - No Installment"}
              ],
              "plans": {
                  "3 months": [
                      {"amount": 266.67, "itemName": "2-hours package - 3 months", "count": 3, "id": "full-2-3-nov-2016"},
                      {"amount": 633, "itemName": "6-hours package - 3 months", "count": 3, "id": "full-6-3-nov-2016"},
                      {"amount": 333, "itemName": "8-hours package - 3 months", "count": 3, "id": "full-8-3-aug-2017"},
                      {"amount": 999.67, "itemName": "12-hours package - 3 months", "count": 3, "id": "full-12-3-aug-2017"},
                      {"amount": 1199.67, "itemName": "18-hours package - 3 months", "count": 3, "id": "full-18-3-aug-2017"}
                  ],
                  "6 months": [
                      {"amount": 316.5, "itemName": "6-hours package - 6 months", "count": 6, "id": "full-6-6-nov-2016"},
                      {"amount": 416.5, "itemName": "8-hours package - 6 months", "count": 6, "id": "full-8-6-aug-2017"},
                      {"amount": 499.83, "itemName": "12-hours package - 6 months", "count": 6, "id": "full-12-6-aug-2017"},
                      {"amount": 599.83, "itemName": "18-hours package - 6 months", "count": 6, "id": "full-18-6-aug-2017"}
                  ],
                  "9 months": [
                      {"amount": 277.67, "itemName": "8-hours package - 9 months", "count": 9, "id": "full-8-9-aug-2017"},
                      {"amount": 333.22, "itemName": "12-hours package - 9 months", "count": 9, "id": "full-12-9-aug-2017"},
                      {"amount": 399.89, "itemName": "18-hours package - 9 months", "count": 9, "id": "full-18-9-aug-2017"}
                  ],
                  "12 months": [
                      {"amount": 208.25, "itemName": "8-hours package - 12 months", "count": 12, "id": "full-8-12-aug-2017"},
                      {"amount": 249.92, "itemName": "12-hours package - 12 months", "count": 12, "id": "full-12-12-aug-2017"},
                      {"amount": 299.92, "itemName": "18-hours package - 12 months", "count": 12, "id": "full-18-12-aug-2017"}
                  ]
              }
          },
        "discount100": {
          "payments": [
            {"amount": 800, "itemName": "2-hours package"},
            {"amount": 1799, "itemName": "6-hours package - $100 OFF"},
            {"amount": 2399, "itemName": "8-hours package - $100 OFF"},
            {"amount": 2899, "itemName": "12-hours package - $100 OFF"},
            {"amount": 3499, "itemName": "18-hours package - $100 OFF"}
          ],
          "plans": {
            "3 months": [
              {"amount": 266.67, "itemName": "2-hours package - 3 months", "count": 3, "id": "discount-2-3-feb-2017"},
              {"amount": 599.67, "itemName": "6-hours package - $100 off - 3 months", "count": 3, "id": "discount-6-3-nov-2016"},
              {"amount": 799.67, "itemName": "8-hours package - $100 off - 3 months", "count": 3, "id": "discount-8-3-aug-2017"},
              {"amount": 966.33, "itemName": "12-hours package - $100 off - 3 months", "count": 3, "id": "discount-12-3-aug-2017"},
              {"amount": 1166.33, "itemName": "18-hours package - $100 off - 3 months", "count": 3, "id": "discount-18-3-aug-2017"}
            ],
            "6 months": [
              {"amount": 299.83, "itemName": "6-hours package - $100 off - 6 months", "count": 6, "id": "discount-6-6-nov-2016"},
              {"amount": 399.83, "itemName": "8-hours package - $100 off - 6 months", "count": 6, "id": "discount-8-6-aug-2017"},
              {"amount": 483.17, "itemName": "12-hours package - $100 off - 6 months", "count": 6, "id": "discount-12-6-aug-2017"},
              {"amount": 583.17, "itemName": "18-hours package - $100 off - 6 months", "count": 6, "id": "discount-18-6-aug-2017"}
            ],
            "9 months": [
              {"amount": 266.56, "itemName": "8-hours package - $100 off - 9 months", "count": 9, "id": "discount-8-9-aug-2017"},
              {"amount": 322.11, "itemName": "12-hours package - $100 off - 9 months", "count": 9, "id": "discount-12-9-aug-2017"},
              {"amount": 388.78, "itemName": "18-hours package - $100 off - 9 months", "count": 9, "id": "discount-18-9-aug-2017"}
            ],
            "12 months": [
              {"amount": 199.92, "itemName": "8-hours package - $100 off - 12 months", "count": 12, "id": "discount-8-12-aug-2017"},
              {"amount": 241.58, "itemName": "12-hours package - $100 off - 12 months", "count": 12, "id": "discount-12-12-aug-2017"},
              {"amount": 291.58, "itemName": "18-hours package - $100 off - 12 months", "count": 12, "id": "discount-18-12-aug-2017"}
            ]
          }
        },
        "discount200": {
          "payments": [
            {"amount": 800, "itemName": "2-hours package"},
            {"amount": 1699, "itemName": "6-hours package - $200 OFF"},
            {"amount": 2299, "itemName": "8-hours package - $200 OFF"},
            {"amount": 2799, "itemName": "12-hours package - $200 OFF"},
            {"amount": 3399, "itemName": "18-hours package - $200 OFF"}
          ],
          "plans": {
            "3 months": [
              {"amount": 266.67, "itemName": "2-hours package - 3 months", "count": 3, "id": "discount200-2-3-feb-2017"},
              {"amount": 566.33, "itemName": "6-hours package - $200 off - 3 months", "count": 3, "id": "discount200-6-3-feb-2017"},
              {"amount": 766.33, "itemName": "8-hours package - $200 off - 3 months", "count": 3, "id": "discount200-8-3-aug-2017"},
              {"amount": 933, "itemName": "12-hours package - $200 off - 3 months", "count": 3, "id": "discount200-12-3-aug-2017"},
              {"amount": 1133, "itemName": "18-hours package - $200 off - 3 months", "count": 3, "id": "discount200-18-3-aug-2017"}
            ],
            "6 months": [
              {"amount": 283.17, "itemName": "6-hours package - $200 off - 6 months", "count": 6, "id": "discount200-6-6-feb-2017"},
              {"amount": 383.17, "itemName": "8-hours package - $200 off - 6 months", "count": 6, "id": "discount200-8-6-aug-2017"},
              {"amount": 466.5, "itemName": "12-hours package - $200 off - 6 months", "count": 6, "id": "discount200-12-6-aug-2017"},
              {"amount": 566.5, "itemName": "18-hours package - $200 off - 6 months", "count": 6, "id": "discount200-18-6-aug-2017"}
            ],
            "9 months": [
              {"amount": 255.44, "itemName": "8-hours package - $200 off - 9 months", "count": 9, "id": "discount200-8-9-aug-2017"},
              {"amount": 311, "itemName": "12-hours package - $200 off - 9 months", "count": 9, "id": "discount200-12-9-aug-2017"},
              {"amount": 377.67, "itemName": "18-hours package - $200 off - 9 months", "count": 9, "id": "discount200-18-9-aug-2017"}
            ],
            "12 months": [
              {"amount": 191.58, "itemName": "8-hours package - $200 off - 12 months", "count": 12, "id": "discount200-8-12-aug-2017"},
              {"amount": 233.25, "itemName": "12-hours package - $200 off - 12 months", "count": 12, "id": "discount200-12-12-aug-2017"},
              {"amount": 283.25, "itemName": "18-hours package - $200 off - 12 months", "count": 12, "id": "discount200-18-12-aug-2017"}
            ]
          }
        },
        "discount300": {
          "payments": [
            {"amount": 800, "itemName": "2-hours package"},
            {"amount": 1599, "itemName": "6-hours package - $300 OFF"},
            {"amount": 2199, "itemName": "8-hours package - $300 OFF"},
            {"amount": 2699, "itemName": "12-hours package - $300 OFF"},
            {"amount": 3299, "itemName": "18-hours package - $300 OFF"}
          ],
          "plans": {
            "3 months": [
              {"amount": 266.67, "itemName": "2-hours package - 3 months", "count": 3, "id": "discount300-2-3-feb-2017"},
              {"amount": 533, "itemName": "6-hours package - $300 off - 3 months", "count": 3, "id": "discount300-6-3-feb-2017"},
              {"amount": 733, "itemName": "8-hours package - $300 off - 3 months", "count": 3, "id": "discount300-8-3-aug-2017"},
              {"amount": 899.67, "itemName": "12-hours package - $300 off - 3 months", "count": 3, "id": "discount300-12-3-aug-2017"},
              {"amount": 1099.67, "itemName": "18-hours package - $300 off - 3 months", "count": 3, "id": "discount300-18-3-aug-2017"}
            ],
            "6 months": [
              {"amount": 266.5, "itemName": "6-hours package - $300 off - 6 months", "count": 6, "id": "discount300-6-6-feb-2017"},
              {"amount": 366.5, "itemName": "8-hours package - $300 off - 6 months", "count": 6, "id": "discount300-8-6-aug-2017"},
              {"amount": 449.83, "itemName": "12-hours package - $300 off - 6 months", "count": 6, "id": "discount300-12-6-aug-2017"},
              {"amount": 549.83, "itemName": "18-hours package - $300 off - 6 months", "count": 6, "id": "discount300-18-6-aug-2017"}
            ],
            "9 months": [
              {"amount": 244.33, "itemName": "8-hours package - $300 off - 9 months", "count": 9, "id": "discount300-8-9-aug-2017"},
              {"amount": 299.89, "itemName": "12-hours package - $300 off - 9 months", "count": 9, "id": "discount300-12-9-aug-2017"},
              {"amount": 366.56, "itemName": "18-hours package - $300 off - 9 months", "count": 9, "id": "discount300-18-9-aug-2017"}
            ],
            "12 months": [
              {"amount": 183.25, "itemName": "8-hours package - $300 off - 12 months", "count": 12, "id": "discount300-8-12-aug-2017"},
              {"amount": 224.92, "itemName": "12-hours package - $300 off - 12 months", "count": 12, "id": "discount300-12-12-aug-2017"},
              {"amount": 274.92, "itemName": "18-hours package - $300 off - 12 months", "count": 12, "id": "discount300-18-12-aug-2017"}
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
