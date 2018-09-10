<template>
  <table class="table" v-if="stripe">
    <tr>
      <th></th>
      <th>2 hours package</th>
      <th>6 hours package</th>
      <th>8 hours package</th>
      <th>12 hours package</th>
      <th>18 hours package</th>
      <th>20 hours package</th>
      <th>22 hours package</th>
      <th>24 hours package</th>
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
            {"amount": 3599, "itemName": "18-hours package - No Installment"},
            {"amount": 3999, "itemName": "20-hours package - No Installment"},
            {"amount": 4399, "itemName": "22-hours package - No Installment"},
            {"amount": 4699, "itemName": "24-hours package - No Installment"}
          ],
          "plans": {
            "3 months": [
              {"amount": 266.67, "itemName": "2-hours package - 3 months", "count": 3, "id": "full-2-3-nov-2016"},
              {"amount": 633, "itemName": "6-hours package - 3 months", "count": 3, "id": "full-6-3-nov-2016"},
              {"amount": 833, "itemName": "8-hours package - 3 months", "count": 3, "id": "full-8-3-may-2018"},
              {"amount": 999.67, "itemName": "12-hours package - 3 months", "count": 3, "id": "full-12-3-aug-2017"},
              {"amount": 1199.67, "itemName": "18-hours package - 3 months", "count": 3, "id": "full-18-3-aug-2017"},
              {"amount": 1333, "itemName": "20-hours package - 3 months", "count": 3, "id": "full-20-3-may-2018"},
              {"amount": 1466.33, "itemName": "22-hours package - 3 months", "count": 3, "id": "full-22-3-may-2018"},
              {"amount": 1566.33, "itemName": "24-hours package - 3 months", "count": 3, "id": "full-24-3-may-2018"}
            ],
            "6 months": [
              {"amount": 316.5, "itemName": "6-hours package - 6 months", "count": 6, "id": "full-6-6-nov-2016"},
              {"amount": 416.5, "itemName": "8-hours package - 6 months", "count": 6, "id": "full-8-6-aug-2017"},
              {"amount": 499.83, "itemName": "12-hours package - 6 months", "count": 6, "id": "full-12-6-aug-2017"},
              {"amount": 599.83, "itemName": "18-hours package - 6 months", "count": 6, "id": "full-18-6-aug-2017"},
              {"amount": 666.5, "itemName": "20-hours package - 6 months", "count": 6, "id": "full-20-6-may-2018"},
              {"amount": 733.17, "itemName": "22-hours package - 6 months", "count": 6, "id": "full-22-6-may-2018"},
              {"amount": 783.17, "itemName": "24-hours package - 6 months", "count": 6, "id": "full-24-6-may-2018"}
            ],
            "9 months": [
              {"amount": 277.67, "itemName": "8-hours package - 9 months", "count": 9, "id": "full-8-9-aug-2017"},
              {"amount": 333.22, "itemName": "12-hours package - 9 months", "count": 9, "id": "full-12-9-aug-2017"},
              {"amount": 399.89, "itemName": "18-hours package - 9 months", "count": 9, "id": "full-18-9-aug-2017"},
              {"amount": 444.33, "itemName": "20-hours package - 9 months", "count": 9, "id": "full-20-9-may-2018"},
              {"amount": 488.78, "itemName": "22-hours package - 9 months", "count": 9, "id": "full-22-9-may-2018"},
              {"amount": 522.11, "itemName": "24-hours package - 9 months", "count": 9, "id": "full-24-9-may-2018"}
            ],
            "12 months": [
              {"amount": 208.25, "itemName": "8-hours package - 12 months", "count": 12, "id": "full-8-12-aug-2017"},
              {"amount": 249.92, "itemName": "12-hours package - 12 months", "count": 12, "id": "full-12-12-aug-2017"},
              {"amount": 299.92, "itemName": "18-hours package - 12 months", "count": 12, "id": "full-18-12-aug-2017"},
              {"amount": 333.25, "itemName": "20-hours package - 12 months", "count": 12, "id": "full-20-12-may-2018"},
              {"amount": 366.58, "itemName": "22-hours package - 12 months", "count": 12, "id": "full-22-12-may-2018"},
              {"amount": 391.58, "itemName": "24-hours package - 12 months", "count": 12, "id": "full-24-12-may-2018"}
            ]
          }
        },
        "discount100": {
          "payments": [
            {"amount": 800, "itemName": "2-hours package"},
            {"amount": 1799, "itemName": "6-hours package - $100 OFF"},
            {"amount": 2399, "itemName": "8-hours package - $100 OFF"},
            {"amount": 2899, "itemName": "12-hours package - $100 OFF"},
            {"amount": 3499, "itemName": "18-hours package - $100 OFF"},
            {"amount": 3899, "itemName": "20-hours package - $100 OFF"},
            {"amount": 4299, "itemName": "22-hours package - $100 OFF"},
            {"amount": 4599, "itemName": "24-hours package - $100 OFF"}
          ],
          "plans": {
            "3 months": [
              {"amount": 266.67, "itemName": "2-hours package - 3 months", "count": 3, "id": "discount-2-3-feb-2017"},
              {"amount": 599.67, "itemName": "6-hours package - $100 off - 3 months", "count": 3, "id": "discount-6-3-nov-2016"},
              {"amount": 799.67, "itemName": "8-hours package - $100 off - 3 months", "count": 3, "id": "discount-8-3-aug-2017"},
              {"amount": 966.33, "itemName": "12-hours package - $100 off - 3 months", "count": 3, "id": "discount-12-3-aug-2017"},
              {"amount": 1166.33, "itemName": "18-hours package - $100 off - 3 months", "count": 3, "id": "discount-18-3-aug-2017"},
              {"amount": 1299.67, "itemName": "20-hours package - $100 off - 3 months", "count": 3, "id": "discount-20-3-may-2018"},
              {"amount": 1433, "itemName": "22-hours package - $100 off - 3 months", "count": 3, "id": "discount-22-3-may-2018"},
              {"amount": 1533, "itemName": "24-hours package - $100 off - 3 months", "count": 3, "id": "discount-24-3-may-2018"}
            ],
            "6 months": [
              {"amount": 299.83, "itemName": "6-hours package - $100 off - 6 months", "count": 6, "id": "discount-6-6-nov-2016"},
              {"amount": 399.83, "itemName": "8-hours package - $100 off - 6 months", "count": 6, "id": "discount-8-6-aug-2017"},
              {"amount": 483.17, "itemName": "12-hours package - $100 off - 6 months", "count": 6, "id": "discount-12-6-aug-2017"},
              {"amount": 583.17, "itemName": "18-hours package - $100 off - 6 months", "count": 6, "id": "discount-18-6-aug-2017"},
              {"amount": 649.83, "itemName": "20-hours package - $100 off - 6 months", "count": 6, "id": "discount-20-6-may-2018"},
              {"amount": 716.5, "itemName": "22-hours package - $100 off - 6 months", "count": 6, "id": "discount-22-6-may-2018"},
              {"amount": 766.5, "itemName": "24-hours package - $100 off - 6 months", "count": 6, "id": "discount-24-6-may-2018"}
            ],
            "9 months": [
              {"amount": 266.56, "itemName": "8-hours package - $100 off - 9 months", "count": 9, "id": "discount-8-9-aug-2017"},
              {"amount": 322.11, "itemName": "12-hours package - $100 off - 9 months", "count": 9, "id": "discount-12-9-aug-2017"},
              {"amount": 388.78, "itemName": "18-hours package - $100 off - 9 months", "count": 9, "id": "discount-18-9-aug-2017"},
              {"amount": 433.22, "itemName": "20-hours package - $100 off - 9 months", "count": 9, "id": "discount-20-9-may-2018"},
              {"amount": 477.67, "itemName": "22-hours package - $100 off - 9 months", "count": 9, "id": "discount-22-9-may-2018"},
              {"amount": 511, "itemName": "24-hours package - $100 off - 9 months", "count": 9, "id": "discount-24-9-may-2018"}
            ],
            "12 months": [
              {"amount": 199.92, "itemName": "8-hours package - $100 off - 12 months", "count": 12, "id": "discount-8-12-aug-2017"},
              {"amount": 241.58, "itemName": "12-hours package - $100 off - 12 months", "count": 12, "id": "discount-12-12-aug-2017"},
              {"amount": 291.58, "itemName": "18-hours package - $100 off - 12 months", "count": 12, "id": "discount-18-12-aug-2017"},
              {"amount": 324.92, "itemName": "20-hours package - $100 off - 12 months", "count": 12, "id": "discount-20-12-may-2018"},
              {"amount": 358.25, "itemName": "22-hours package - $100 off - 12 months", "count": 12, "id": "discount-22-12-may-2018"},
              {"amount": 383.25, "itemName": "24-hours package - $100 off - 12 months", "count": 12, "id": "discount-24-12-may-2018"}
            ]
          }
        },
        "discount200": {
          "payments": [
            {"amount": 800, "itemName": "2-hours package"},
            {"amount": 1699, "itemName": "6-hours package - $200 OFF"},
            {"amount": 2299, "itemName": "8-hours package - $200 OFF"},
            {"amount": 2799, "itemName": "12-hours package - $200 OFF"},
            {"amount": 3399, "itemName": "18-hours package - $200 OFF"},
            {"amount": 3799, "itemName": "20-hours package - $200 OFF"},
            {"amount": 4199, "itemName": "22-hours package - $200 OFF"},
            {"amount": 4499, "itemName": "24-hours package - $200 OFF"}
          ],
          "plans": {
            "3 months": [
              {"amount": 266.67, "itemName": "2-hours package - 3 months", "count": 3, "id": "discount200-2-3-feb-2017"},
              {"amount": 566.33, "itemName": "6-hours package - $200 off - 3 months", "count": 3, "id": "discount200-6-3-feb-2017"},
              {"amount": 766.33, "itemName": "8-hours package - $200 off - 3 months", "count": 3, "id": "discount200-8-3-aug-2017"},
              {"amount": 933, "itemName": "12-hours package - $200 off - 3 months", "count": 3, "id": "discount200-12-3-aug-2017"},
              {"amount": 1133, "itemName": "18-hours package - $200 off - 3 months", "count": 3, "id": "discount200-18-3-aug-2017"},
              {"amount": 1266.33, "itemName": "20-hours package - $200 off - 3 months", "count": 3, "id": "discount200-20-3-may-2018"},
              {"amount": 1399.67, "itemName": "22-hours package - $200 off - 3 months", "count": 3, "id": "discount200-22-3-may-2018"},
              {"amount": 1499.67, "itemName": "24-hours package - $200 off - 3 months", "count": 3, "id": "discount200-24-3-may-2018"}
            ],
            "6 months": [
              {"amount": 283.17, "itemName": "6-hours package - $200 off - 6 months", "count": 6, "id": "discount200-6-6-feb-2017"},
              {"amount": 383.17, "itemName": "8-hours package - $200 off - 6 months", "count": 6, "id": "discount200-8-6-aug-2017"},
              {"amount": 466.5, "itemName": "12-hours package - $200 off - 6 months", "count": 6, "id": "discount200-12-6-aug-2017"},
              {"amount": 566.5, "itemName": "18-hours package - $200 off - 6 months", "count": 6, "id": "discount200-18-6-aug-2017"},
              {"amount": 633.17, "itemName": "20-hours package - $200 off - 6 months", "count": 6, "id": "discount200-20-6-may-2018"},
              {"amount": 699.83, "itemName": "22-hours package - $200 off - 6 months", "count": 6, "id": "discount200-22-6-may-2018"},
              {"amount": 749.83, "itemName": "24-hours package - $200 off - 6 months", "count": 6, "id": "discount200-24-6-may-2018"}
            ],
            "9 months": [
              {"amount": 255.44, "itemName": "8-hours package - $200 off - 9 months", "count": 9, "id": "discount200-8-9-aug-2017"},
              {"amount": 311, "itemName": "12-hours package - $200 off - 9 months", "count": 9, "id": "discount200-12-9-aug-2017"},
              {"amount": 377.67, "itemName": "18-hours package - $200 off - 9 months", "count": 9, "id": "discount200-18-9-aug-2017"},
              {"amount": 422.11, "itemName": "20-hours package - $200 off - 9 months", "count": 9, "id": "discount200-20-9-may-2018"},
              {"amount": 466.56, "itemName": "22-hours package - $200 off - 9 months", "count": 9, "id": "discount200-22-9-may-2018"},
              {"amount": 499.89, "itemName": "24-hours package - $200 off - 9 months", "count": 9, "id": "discount200-24-9-may-2018"}
            ],
            "12 months": [
              {"amount": 191.58, "itemName": "8-hours package - $200 off - 12 months", "count": 12, "id": "discount200-8-12-aug-2017"},
              {"amount": 233.25, "itemName": "12-hours package - $200 off - 12 months", "count": 12, "id": "discount200-12-12-aug-2017"},
              {"amount": 283.25, "itemName": "18-hours package - $200 off - 12 months", "count": 12, "id": "discount200-18-12-aug-2017"},
              {"amount": 316.58, "itemName": "20-hours package - $200 off - 12 months", "count": 12, "id": "discount200-20-12-may-2018"},
              {"amount": 349.92, "itemName": "22-hours package - $200 off - 12 months", "count": 12, "id": "discount200-22-12-may-2018"},
              {"amount": 374.92, "itemName": "24-hours package - $200 off - 12 months", "count": 12, "id": "discount200-24-12-may-2018"}
            ]
          }
        },
        "discount300": {
          "payments": [
            {"amount": 800, "itemName": "2-hours package"},
            {"amount": 1599, "itemName": "6-hours package - $300 OFF"},
            {"amount": 2199, "itemName": "8-hours package - $300 OFF"},
            {"amount": 2699, "itemName": "12-hours package - $300 OFF"},
            {"amount": 3299, "itemName": "18-hours package - $300 OFF"},
            {"amount": 3699, "itemName": "20-hours package - $300 OFF"},
            {"amount": 4099, "itemName": "22-hours package - $300 OFF"},
            {"amount": 4399, "itemName": "24-hours package - $300 OFF"}
          ],
          "plans": {
            "3 months": [
              {"amount": 266.67, "itemName": "2-hours package - 3 months", "count": 3, "id": "discount300-2-3-feb-2017"},
              {"amount": 533, "itemName": "6-hours package - $300 off - 3 months", "count": 3, "id": "discount300-6-3-feb-2017"},
              {"amount": 733, "itemName": "8-hours package - $300 off - 3 months", "count": 3, "id": "discount300-8-3-aug-2017"},
              {"amount": 899.67, "itemName": "12-hours package - $300 off - 3 months", "count": 3, "id": "discount300-12-3-aug-2017"},
              {"amount": 1099.67, "itemName": "18-hours package - $300 off - 3 months", "count": 3, "id": "discount300-18-3-aug-2017"},
              {"amount": 1299.67, "itemName": "20-hours package - $300 off - 3 months", "count": 3, "id": "discount300-20-3-may-2018"},
              {"amount": 1433, "itemName": "22-hours package - $300 off - 3 months", "count": 3, "id": "discount300-22-3-may-2018"},
              {"amount": 1533, "itemName": "24-hours package - $300 off - 3 months", "count": 3, "id": "discount300-24-3-may-2018"}
            ],
            "6 months": [
              {"amount": 266.5, "itemName": "6-hours package - $300 off - 6 months", "count": 6, "id": "discount300-6-6-feb-2017"},
              {"amount": 366.5, "itemName": "8-hours package - $300 off - 6 months", "count": 6, "id": "discount300-8-6-aug-2017"},
              {"amount": 449.83, "itemName": "12-hours package - $300 off - 6 months", "count": 6, "id": "discount300-12-6-aug-2017"},
              {"amount": 549.83, "itemName": "18-hours package - $300 off - 6 months", "count": 6, "id": "discount300-18-6-aug-2017"},
              {"amount": 649.83, "itemName": "20-hours package - $300 off - 6 months", "count": 6, "id": "discount300-20-6-may-2018"},
              {"amount": 716.5, "itemName": "22-hours package - $300 off - 6 months", "count": 6, "id": "discount300-22-6-may-2018"},
              {"amount": 766.5, "itemName": "24-hours package - $300 off - 6 months", "count": 6, "id": "discount300-24-6-may-2018"}
            ],
            "9 months": [
              {"amount": 244.33, "itemName": "8-hours package - $300 off - 9 months", "count": 9, "id": "discount300-8-9-aug-2017"},
              {"amount": 299.89, "itemName": "12-hours package - $300 off - 9 months", "count": 9, "id": "discount300-12-9-aug-2017"},
              {"amount": 366.56, "itemName": "18-hours package - $300 off - 9 months", "count": 9, "id": "discount300-18-9-aug-2017"},
              {"amount": 433.22, "itemName": "20-hours package - $300 off - 9 months", "count": 9, "id": "discount300-20-9-may-2018"},
              {"amount": 477.67, "itemName": "22-hours package - $300 off - 9 months", "count": 9, "id": "discount300-22-9-may-2018"},
              {"amount": 511, "itemName": "24-hours package - $300 off - 9 months", "count": 9, "id": "discount300-24-9-may-2018"}
            ],
            "12 months": [
              {"amount": 183.25, "itemName": "8-hours package - $300 off - 12 months", "count": 12, "id": "discount300-8-12-aug-2017"},
              {"amount": 224.92, "itemName": "12-hours package - $300 off - 12 months", "count": 12, "id": "discount300-12-12-aug-2017"},
              {"amount": 274.92, "itemName": "18-hours package - $300 off - 12 months", "count": 12, "id": "discount300-18-12-aug-2017"},
              {"amount": 324.92, "itemName": "20-hours package - $300 off - 12 months", "count": 12, "id": "discount300-20-12-may-2018"},
              {"amount": 358.25, "itemName": "22-hours package - $300 off - 12 months", "count": 12, "id": "discount300-22-12-may-2018"},
              {"amount": 383.25, "itemName": "24-hours package - $300 off - 12 months", "count": 12, "id": "discount300-24-12-may-2018"}
            ]
          }
        },
        "discount400": {
          "payments": [
            {"amount": 800, "itemName": "2-hours package"},
            {"amount": 1499, "itemName": "6-hours package - $400 OFF"},
            {"amount": 2099, "itemName": "8-hours package - $400 OFF"},
            {"amount": 2599, "itemName": "12-hours package - $400 OFF"},
            {"amount": 3199, "itemName": "18-hours package - $400 OFF"},
            {"amount": 3599, "itemName": "20-hours package - $400 OFF"},
            {"amount": 3999, "itemName": "22-hours package - $400 OFF"},
            {"amount": 4299, "itemName": "24-hours package - $400 OFF"}
          ],
          "plans": {
            "3 months": [
              {"amount": 266.67, "itemName": "2-hours package - 3 months", "count": 3, "id": "discount300-2-3-feb-2017"},
              {"amount": 499.67, "itemName": "6-hours package - $400 off - 3 months", "count": 3, "id": "discount400-6-3-sep-2018"},
              {"amount": 699.67, "itemName": "8-hours package - $400 off - 3 months", "count": 3, "id": "discount400-8-3-sep-2018"},
              {"amount": 866.33, "itemName": "12-hours package - $400 off - 3 months", "count": 3, "id": "discount400-12-3-sep-2018"},
              {"amount": 1066.33, "itemName": "18-hours package - $400 off - 3 months", "count": 3, "id": "discount400-18-3-sep-2018"},
              {"amount": 1199.67, "itemName": "20-hours package - $400 off - 3 months", "count": 3, "id": "discount400-20-3-sep-2018"},
              {"amount": 1333, "itemName": "22-hours package - $400 off - 3 months", "count": 3, "id": "discount400-22-3-sep-2018"},
              {"amount": 1433, "itemName": "24-hours package - $400 off - 3 months", "count": 3, "id": "discount400-24-3-sep-2018"}
            ],
            "6 months": [
              {"amount": 249.83, "itemName": "6-hours package - $400 off - 6 months", "count": 6, "id": "discount400-6-6-sep-2018"},
              {"amount": 349.83, "itemName": "8-hours package - $400 off - 6 months", "count": 6, "id": "discount400-8-6-sep-2018"},
              {"amount": 433.17, "itemName": "12-hours package - $400 off - 6 months", "count": 6, "id": "discount400-12-6-sep-2018"},
              {"amount": 533.17, "itemName": "18-hours package - $400 off - 6 months", "count": 6, "id": "discount400-18-6-sep-2018"},
              {"amount": 599.83, "itemName": "20-hours package - $400 off - 6 months", "count": 6, "id": "discount400-20-6-sep-2018"},
              {"amount": 666.5, "itemName": "22-hours package - $400 off - 6 months", "count": 6, "id": "discount400-22-6-sep-2018"},
              {"amount": 716.5, "itemName": "24-hours package - $400 off - 6 months", "count": 6, "id": "discount400-24-6-sep-2018"}
            ],
            "9 months": [
              {"amount": 233.22, "itemName": "8-hours package - $400 off - 9 months", "count": 9, "id": "discount400-8-9-sep-2018"},
              {"amount": 288.78, "itemName": "12-hours package - $400 off - 9 months", "count": 9, "id": "discount400-12-9-sep-2018"},
              {"amount": 355.44, "itemName": "18-hours package - $400 off - 9 months", "count": 9, "id": "discount400-18-9-sep-2018"},
              {"amount": 399.89, "itemName": "20-hours package - $400 off - 9 months", "count": 9, "id": "discount400-20-9-sep-2018"},
              {"amount": 444.33, "itemName": "22-hours package - $400 off - 9 months", "count": 9, "id": "discount400-22-9-sep-2018"},
              {"amount": 477.67, "itemName": "24-hours package - $400 off - 9 months", "count": 9, "id": "discount400-24-9-sep-2018"}
            ],
            "12 months": [
              {"amount": 174.92, "itemName": "8-hours package - $400 off - 12 months", "count": 12, "id": "discount400-8-12-sep-2018"},
              {"amount": 216.58, "itemName": "12-hours package - $400 off - 12 months", "count": 12, "id": "discount400-12-12-sep-2018"},
              {"amount": 266.58, "itemName": "18-hours package - $400 off - 12 months", "count": 12, "id": "discount400-18-12-sep-2018"},
              {"amount": 299.92, "itemName": "20-hours package - $400 off - 12 months", "count": 12, "id": "discount400-20-12-sep-2018"},
              {"amount": 333.25, "itemName": "22-hours package - $400 off - 12 months", "count": 12, "id": "discount400-22-12-sep-2018"},
              {"amount": 358.25, "itemName": "24-hours package - $400 off - 12 months", "count": 12, "id": "discount400-24-12-sep-2018"}
            ]
          }
        },
        "discount500": {
          "payments": [
            {"amount": 800, "itemName": "2-hours package"},
            {"amount": 1399, "itemName": "6-hours package - $500 OFF"},
            {"amount": 1999, "itemName": "8-hours package - $500 OFF"},
            {"amount": 2499, "itemName": "12-hours package - $500 OFF"},
            {"amount": 3099, "itemName": "18-hours package - $500 OFF"},
            {"amount": 3499, "itemName": "20-hours package - $500 OFF"},
            {"amount": 3899, "itemName": "22-hours package - $500 OFF"},
            {"amount": 4199, "itemName": "24-hours package - $500 OFF"}
          ],
          "plans": {
            "3 months": [
              {"amount": 266.67, "itemName": "2-hours package - 3 months", "count": 3, "id": "discount300-2-3-feb-2017"},
              {"amount": 466.33, "itemName": "6-hours package - $500 off - 3 months", "count": 3, "id": "discount500-6-3-sep-2018"},
              {"amount": 666.33, "itemName": "8-hours package - $500 off - 3 months", "count": 3, "id": "discount500-8-3-sep-2018"},
              {"amount": 833, "itemName": "12-hours package - $500 off - 3 months", "count": 3, "id": "discount500-12-3-sep-2018"},
              {"amount": 1033, "itemName": "18-hours package - $500 off - 3 months", "count": 3, "id": "discount500-18-3-sep-2018"},
              {"amount": 1166.33, "itemName": "20-hours package - $500 off - 3 months", "count": 3, "id": "discount500-20-3-sep-2018"},
              {"amount": 1299.67, "itemName": "22-hours package - $500 off - 3 months", "count": 3, "id": "discount500-22-3-sep-2018"},
              {"amount": 1399.67, "itemName": "24-hours package - $500 off - 3 months", "count": 3, "id": "discount500-24-3-sep-2018"}
            ],
            "6 months": [
              {"amount": 233.17, "itemName": "6-hours package - $500 off - 6 months", "count": 6, "id": "discount500-6-6-sep-2018"},
              {"amount": 333.17, "itemName": "8-hours package - $500 off - 6 months", "count": 6, "id": "discount500-8-6-sep-2018"},
              {"amount": 416.5, "itemName": "12-hours package - $500 off - 6 months", "count": 6, "id": "discount500-12-6-sep-2018"},
              {"amount": 516.5, "itemName": "18-hours package - $500 off - 6 months", "count": 6, "id": "discount500-18-6-sep-2018"},
              {"amount": 583.17, "itemName": "20-hours package - $500 off - 6 months", "count": 6, "id": "discount500-20-6-sep-2018"},
              {"amount": 649.83, "itemName": "22-hours package - $500 off - 6 months", "count": 6, "id": "discount500-22-6-sep-2018"},
              {"amount": 699.83, "itemName": "24-hours package - $500 off - 6 months", "count": 6, "id": "discount500-24-6-sep-2018"}
            ],
            "9 months": [
              {"amount": 222.11, "itemName": "8-hours package - $500 off - 9 months", "count": 9, "id": "discount500-8-9-sep-2018"},
              {"amount": 277.67, "itemName": "12-hours package - $500 off - 9 months", "count": 9, "id": "discount500-12-9-sep-2018"},
              {"amount": 344.33, "itemName": "18-hours package - $500 off - 9 months", "count": 9, "id": "discount500-18-9-sep-2018"},
              {"amount": 388.78, "itemName": "20-hours package - $500 off - 9 months", "count": 9, "id": "discount500-20-9-sep-2018"},
              {"amount": 433.22, "itemName": "22-hours package - $500 off - 9 months", "count": 9, "id": "discount500-22-9-sep-2018"},
              {"amount": 466.56, "itemName": "24-hours package - $500 off - 9 months", "count": 9, "id": "discount500-24-9-sep-2018"}
            ],
            "12 months": [
              {"amount": 166.58, "itemName": "8-hours package - $500 off - 12 months", "count": 12, "id": "discount500-8-12-sep-2018"},
              {"amount": 208.25, "itemName": "12-hours package - $500 off - 12 months", "count": 12, "id": "discount500-12-12-sep-2018"},
              {"amount": 258.25, "itemName": "18-hours package - $500 off - 12 months", "count": 12, "id": "discount500-18-12-sep-2018"},
              {"amount": 291.58, "itemName": "20-hours package - $500 off - 12 months", "count": 12, "id": "discount500-20-12-sep-2018"},
              {"amount": 324.92, "itemName": "22-hours package - $500 off - 12 months", "count": 12, "id": "discount500-22-12-sep-2018"},
              {"amount": 349.92, "itemName": "24-hours package - $500 off - 12 months", "count": 12, "id": "discount500-24-12-sep-2018"}
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
