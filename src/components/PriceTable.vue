<template>
    <div>
        <Process step="1"></Process>
        <table class="table table-bordered" v-if="stripe">
            <thead>
            <tr>
                <th></th>
                <th v-if="query.membership=='basic'&&(query.packages=='0'||query.packages=='all')">1 date package</th>
                <th v-if="query.packages=='1'||query.packages=='all'">3 date package</th>
                <th v-if="query.packages=='2'||query.packages=='all'">5 date package</th>
                <th v-if="query.packages=='3'||query.packages=='all'">10 date package</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>No installment</td>
                <td v-for="(payment,index) in stripe.payments" v-if="query.membership=='basic'&&(query.packages==index||query.packages=='all')">
                    S${{payment.amount}}
                    <br>
                    <button @click="choosePayment(payment)" type="button" class="btn btn-primary">Pay with Card</button>
                </td>
                <td v-for="(payment,index) in stripe.payments" v-if="query.membership!='basic'&&(query.packages-1==index||query.packages=='all')">
                    S${{payment.amount}}
                    <br>
                    <button @click="choosePayment(payment)" type="button" class="btn btn-primary">Pay with Card</button>
                </td>
            </tr>
            <tr v-if="query.months>=3">
                <td>3 months installment</td>
                <td v-if="query.membership=='basic'&&(query.packages=='0'||query.packages=='all')"></td>
                <td v-for="(plan,index) in stripe.plans['3 months']" v-if="query.packages-1==index||query.packages=='all'">
                    S${{plan.amount}}
                    <br>
                    <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
                </td>
            </tr>
            <tr v-if="query.months>=6">
                <td>6 months installment</td>
                <td v-if="query.membership=='basic'&&(query.packages=='0'||query.packages=='all')"></td>
                <td v-for="(plan,index) in stripe.plans['6 months']" v-if="query.packages-1==index||query.packages=='all'">
                    S${{plan.amount}}
                    <br>
                    <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
                </td>
            </tr>
            <tr v-if="query.months>=9">
                <td>9 months installment</td>
                <td v-if="query.membership=='basic'&&(query.packages=='0'||query.packages=='all')"></td>
                <td v-for="(plan,index) in stripe.plans['9 months']" v-if="query.packages-1==index||query.packages=='all'">
                    S${{plan.amount}}
                    <br>
                    <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
                </td>
            </tr>
            <tr v-if="query.months>=12">
                <td>12 months installment</td>
                <td v-if="query.membership=='basic'&&(query.packages=='0'||query.packages=='all')"></td>
                <td v-for="(plan,index) in stripe.plans['12 months']" v-if="query.packages-1==index||query.packages=='all'">
                    S${{plan.amount}}
                    <br>
                    <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    // http://router.vuejs.org/zh-cn/advanced/data-fetching.html
    // 在导航完成前获取数据
    import {getStripeConfig} from '../services'
    import {getObj} from '../util'
    import Process from './Process.vue'

    export default {
        name: 'PriceTable',
        components: {
            Process
        },
        data () {
            return {
                stripe: null,
                months: null,
                query: null
            }
        },
        methods: {
            choosePayment(plan){
                this.$router.push({name: 'pay', query: getObj(plan)})
            }
        },
        beforeRouteEnter: (to, from, next) => {
            var config ={
                "basic": {
                    "full": {
                        "payments": [
                            {"amount": 995, "itemName": "GaiGai 1-dates package - No Installment"},
                            {"amount": 2385, "itemName": "GaiGai 3-dates package - No Installment"},
                            {"amount": 2745, "itemName": "GaiGai 5-dates package - No Installment"},
                            {"amount": 3795, "itemName": "GaiGai 10-dates package - No Installment"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 795, "itemName": "3 dates package - 3 months", "count": 3, "id": "full-3-3-nov-2016"},
                                {"amount": 915, "itemName": "5 dates package - 3 months", "count": 3, "id": "full-5-3-nov-2016"},
                                {"amount": 1265, "itemName": "10 dates package - 3 months", "count": 3, "id": "full-10-3-nov-2017"}
                            ],
                            "6 months": [
                                {"amount": 397.5, "itemName": "3 dates package - 6 months", "count": 6, "id": "full-3-6-nov-2016"},
                                {"amount": 457.5, "itemName": "5 dates package - 6 months", "count": 6, "id": "full-5-6-nov-2016"},
                                {"amount": 632.5, "itemName": "10 dates package - 6 months", "count": 6, "id": "full-10-6-nov-2017"}
                            ],
                            "9 months": [
                                {"amount": 278.25, "itemName": "3 dates package - 9 months", "count": 9, "id": "full-3-9-nov-2016"},
                                {"amount": 320.25, "itemName": "5 dates package - 9 months", "count": 9, "id": "full-5-9-nov-2016"},
                                {"amount": 442.75, "itemName": "10 dates package - 9 months", "count": 9, "id": "full-10-9-nov-2017"}
                            ],
                            "12 months": [
                                {"amount": 208.7, "itemName": "3 dates package - 12 months", "count": 12, "id": "full-3-12-nov-2016"},
                                {"amount": 240.2, "itemName": "5 dates package - 12 months", "count": 12, "id": "full-5-12-nov-2016"},
                                {"amount": 332.08, "itemName": "10 dates package - 12 months", "count": 12, "id": "full-10-12-nov-2017"}
                            ]
                        }
                    },
                    "discount100": {
                        "payments": [
                            {"amount": 945, "itemName": "GaiGai 1-dates package - $100 OFF"},
                            {"amount": 2285, "itemName": "GaiGai 3-dates package - $100 OFF"},
                            {"amount": 2645, "itemName": "GaiGai 5-dates package - $100 OFF"},
                            {"amount": 3695, "itemName": "GaiGai 10-dates package - $100 OFF"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 761.67, "itemName": "3 dates package - $100 off - 3 months", "count": 3, "id": "discount100-3-3-nov-2016"},
                                {"amount": 881.67, "itemName": "5 dates package - $100 off - 3 months", "count": 3, "id": "discount100-5-3-nov-2016"},
                                {"amount": 1231.67, "itemName": "10 dates package - $100 off - 3 months", "count": 3, "id": "discount100-10-3-nov-2017"}
                            ],
                            "6 months": [
                                {"amount": 380.83, "itemName": "3 dates package - $100 off - 6 months", "count": 6, "id": "discount100-3-6-nov-2016"},
                                {"amount": 440.83, "itemName": "5 dates package - $100 off - 6 months", "count": 6, "id": "discount100-5-6-nov-2016"},
                                {"amount": 615.83, "itemName": "10 dates package - $100 off - 6 months", "count": 6, "id": "discount100-10-6-nov-2017"}
                            ],
                            "9 months": [
                                {"amount": 266.58, "itemName": "3 dates package - $100 off - 9 months", "count": 9, "id": "discount100-3-9-nov-2016"},
                                {"amount": 308.58, "itemName": "5 dates package - $100 off - 9 months", "count": 9, "id": "discount100-5-9-nov-2016"},
                                {"amount": 431.08, "itemName": "10 dates package - $100 off - 9 months", "count": 9, "id": "discount100-10-9-nov-2017"}
                            ],
                            "12 months": [
                                {"amount": 199.95, "itemName": "3 dates package - $100 off - 12 months", "count": 12, "id": "discount100-3-12-nov-2016"},
                                {"amount": 231.45, "itemName": "5 dates package - $100 off - 12 months", "count": 12, "id": "discount100-5-12-nov-2016"},
                                {"amount": 323.33, "itemName": "10 dates package - $100 off - 12 months", "count": 12, "id": "discount100-10-12-nov-2017"}
                            ]
                        }
                    },
                    "discount200": {
                        "payments": [
                            {"amount": 945, "itemName": "GaiGai 1-dates package - $200 OFF"},
                            {"amount": 2185, "itemName": "GaiGai 3-dates package - $200 OFF"},
                            {"amount": 2545, "itemName": "GaiGai 5-dates package - $200 OFF"},
                            {"amount": 3595, "itemName": "GaiGai 10-dates package - $200 OFF"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 728.33, "itemName": "3 dates package - $200 off - 3 months", "count": 3, "id": "discount200-3-3-nov-2016"},
                                {"amount": 848.33, "itemName": "5 dates package - $200 off - 3 months", "count": 3, "id": "discount200-5-3-nov-2016"},
                                {"amount": 1198.33, "itemName": "10 dates package - $200 off - 3 months", "count": 3, "id": "discount200-10-3-nov-2017"}
                            ],
                            "6 months": [
                                {"amount": 364.17, "itemName": "3 dates package - $200 off - 6 months", "count": 6, "id": "discount200-3-6-nov-2016"},
                                {"amount": 424.17, "itemName": "5 dates package - $200 off - 6 months", "count": 6, "id": "discount200-5-6-nov-2016"},
                                {"amount": 599.17, "itemName": "10 dates package - $200 off - 6 months", "count": 6, "id": "discount200-10-6-nov-2017"}
                            ],
                            "9 months": [
                                {"amount": 254.92, "itemName": "3 dates package - $200 off - 9 months", "count": 9, "id": "discount200-3-9-nov-2016"},
                                {"amount": 296.92, "itemName": "5 dates package - $200 off - 9 months", "count": 9, "id": "discount200-5-9-nov-2016"},
                                {"amount": 419.42, "itemName": "10 dates package - $200 off - 9 months", "count": 9, "id": "discount200-10-9-nov-2017"}
                            ],
                            "12 months": [
                                {"amount": 191.2, "itemName": "3 dates package - $200 off - 12 months", "count": 12, "id": "discount200-3-12-nov-2016"},
                                {"amount": 222.7, "itemName": "5 dates package - $200 off - 12 months", "count": 12, "id": "discount200-5-12-nov-2016"},
                                {"amount": 314.58, "itemName": "10 dates package - $200 off - 12 months", "count": 12, "id": "discount200-10-12-nov-2017"}
                            ]
                        }
                    },
                    "discount300": {
                        "payments": [
                            {"amount": 945, "itemName": "GaiGai 1-dates package - $300 OFF"},
                            {"amount": 2085, "itemName": "GaiGai 3-dates package - $300 OFF"},
                            {"amount": 2445, "itemName": "GaiGai 5-dates package - $300 OFF"},
                            {"amount": 3495, "itemName": "GaiGai 10-dates package - $300 OFF"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 695, "itemName": "3 dates package - $300 off - 3 months", "count": 3, "id": "discount-3-3-nov-2016"},
                                {"amount": 815, "itemName": "5 dates package - $300 off - 3 months", "count": 3, "id": "discount-5-3-nov-2016"},
                                {"amount": 1165, "itemName": "10 dates package - $300 off - 3 months", "count": 3, "id": "discount-10-3-nov-2017"}
                            ],
                            "6 months": [
                                {"amount": 347.5, "itemName": "3 dates package - $300 off - 6 months", "count": 6, "id": "discount-3-6-nov-2016"},
                                {"amount": 407.5, "itemName": "5 dates package - $300 off - 6 months", "count": 6, "id": "discount-5-6-nov-2016"},
                                {"amount": 582.5, "itemName": "10 dates package - $300 off - 6 months", "count": 6, "id": "discount-10-6-nov-2017"}
                            ],
                            "9 months": [
                                {"amount": 243.25, "itemName": "3 dates package - $300 off - 9 months", "count": 9, "id": "discount-3-9-nov-2016"},
                                {"amount": 285.25, "itemName": "5 dates package - $300 off - 9 months", "count": 9, "id": "discount-5-9-nov-2016"},
                                {"amount": 407.75, "itemName": "10 dates package - $300 off - 9 months", "count": 9, "id": "discount-10-9-nov-2017"}
                            ],
                            "12 months": [
                                {"amount": 182.45, "itemName": "3 dates package - $300 off - 12 months", "count": 12, "id": "discount-3-12-nov-2016"},
                                {"amount": 213.95, "itemName": "5 dates package - $300 off - 12 months", "count": 12, "id": "discount-5-12-nov-2016"},
                                {"amount": 305.83, "itemName": "10 dates package - $300 off - 12 months", "count": 12, "id": "discount-10-12-nov-2017"}
                            ]
                        }
                    }
                },
                "priority": {
                    "full": {
                        "payments": [
                            {"amount": 3225, "itemName": "GaiGai 3-dates package - No Installment"},
                            {"amount": 3705, "itemName": "GaiGai 5-dates package - No Installment"},
                            {"amount": 5115, "itemName": "GaiGai 10-dates package - No Installment"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 1075, "itemName": "3 dates package - 3 months", "count": 3, "id": "full-3-3-nov-2016-priority"},
                                {"amount": 1235, "itemName": "5 dates package - 3 months", "count": 3, "id": "full-5-3-nov-2016-priority"},
                                {"amount": 1705, "itemName": "10 dates package - 3 months", "count": 3, "id": "full-10-3-nov-2017-priority"}
                            ],
                            "6 months": [
                                {"amount": 537.5, "itemName": "3 dates package - 6 months", "count": 6, "id": "full-3-6-nov-2016-priority"},
                                {"amount": 617.5, "itemName": "5 dates package - 6 months", "count": 6, "id": "full-5-6-nov-2016-priority"},
                                {"amount": 852.5, "itemName": "10 dates package - 6 months", "count": 6, "id": "full-10-6-nov-2017-priority"}
                            ],
                            "9 months": [
                                {"amount": 376.25, "itemName": "3 dates package - 9 months", "count": 9, "id": "full-3-9-nov-2016-priority"},
                                {"amount": 432.25, "itemName": "5 dates package - 9 months", "count": 9, "id": "full-5-9-nov-2016-priority"},
                                {"amount": 596.75, "itemName": "10 dates package - 9 months", "count": 9, "id": "full-10-9-nov-2017-priority"}
                            ],
                            "12 months": [
                                {"amount": 282.2, "itemName": "3 dates package - 12 months", "count": 12, "id": "full-3-12-nov-2016-priority"},
                                {"amount": 324.2, "itemName": "5 dates package - 12 months", "count": 12, "id": "full-5-12-nov-2016-priority"},
                                {"amount": 447.58, "itemName": "10 dates package - 12 months", "count": 12, "id": "full-10-12-nov-2017-priority"}
                            ]
                        }
                    },
                    "discount100": {
                        "payments": [
                            {"amount": 3125, "itemName": "GaiGai 3-dates package - $100 OFF"},
                            {"amount": 3605, "itemName": "GaiGai 5-dates package - $100 OFF"},
                            {"amount": 5015, "itemName": "GaiGai 10-dates package - $100 OFF"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 1041.67, "itemName": "3 dates package - $100 off - 3 months", "count": 3, "id": "discount100-3-3-nov-2016-priority"},
                                {"amount": 1201.67, "itemName": "5 dates package - $100 off - 3 months", "count": 3, "id": "discount100-5-3-nov-2016-priority"},
                                {"amount": 1671.67, "itemName": "10 dates package - $100 off - 3 months", "count": 3, "id": "discount100-10-3-nov-2017-priority"}
                            ],
                            "6 months": [
                                {"amount": 520.83, "itemName": "3 dates package - $100 off - 6 months", "count": 6, "id": "discount100-3-6-nov-2016-priority"},
                                {"amount": 600.83, "itemName": "5 dates package - $100 off - 6 months", "count": 6, "id": "discount100-5-6-nov-2016-priority"},
                                {"amount": 835.83, "itemName": "10 dates package - $100 off - 6 months", "count": 6, "id": "discount100-10-6-nov-2017-priority"}
                            ],
                            "9 months": [
                                {"amount": 364.58, "itemName": "3 dates package - $100 off - 9 months", "count": 9, "id": "discount100-3-9-nov-2016-priority"},
                                {"amount": 420.58, "itemName": "5 dates package - $100 off - 9 months", "count": 9, "id": "discount100-5-9-nov-2016-priority"},
                                {"amount": 585.08, "itemName": "10 dates package - $100 off - 9 months", "count": 9, "id": "discount100-10-9-nov-2017-priority"}
                            ],
                            "12 months": [
                                {"amount": 273.45, "itemName": "3 dates package - $100 off - 12 months", "count": 12, "id": "discount100-3-12-nov-2016-priority"},
                                {"amount": 315.45, "itemName": "5 dates package - $100 off - 12 months", "count": 12, "id": "discount100-5-12-nov-2016-priority"},
                                {"amount": 438.83, "itemName": "10 dates package - $100 off - 12 months", "count": 12, "id": "discount100-10-12-nov-2017-priority"}
                            ]
                        }
                    },
                    "discount200": {
                        "payments": [
                            {"amount": 3025, "itemName": "GaiGai 3-dates package - $200 OFF"},
                            {"amount": 3505, "itemName": "GaiGai 5-dates package - $200 OFF"},
                            {"amount": 4915, "itemName": "GaiGai 10-dates package - $200 OFF"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 1008.33, "itemName": "3 dates package - $200 off - 3 months", "count": 3, "id": "discount200-3-3-nov-2016-priority"},
                                {"amount": 1168.33, "itemName": "5 dates package - $200 off - 3 months", "count": 3, "id": "discount200-5-3-nov-2016-priority"},
                                {"amount": 1638.33, "itemName": "10 dates package - $200 off - 3 months", "count": 3, "id": "discount200-10-3-nov-2017-priority"}
                            ],
                            "6 months": [
                                {"amount": 504.17, "itemName": "3 dates package - $200 off - 6 months", "count": 6, "id": "discount200-3-6-nov-2016-priority"},
                                {"amount": 584.17, "itemName": "5 dates package - $200 off - 6 months", "count": 6, "id": "discount200-5-6-nov-2016-priority"},
                                {"amount": 819.17, "itemName": "10 dates package - $200 off - 6 months", "count": 6, "id": "discount200-10-6-nov-2017-priority"}
                            ],
                            "9 months": [
                                {"amount": 352.92, "itemName": "3 dates package - $200 off - 9 months", "count": 9, "id": "discount200-3-9-nov-2016-priority"},
                                {"amount": 408.92, "itemName": "5 dates package - $200 off - 9 months", "count": 9, "id": "discount200-5-9-nov-2016-priority"},
                                {"amount": 573.42, "itemName": "10 dates package - $200 off - 9 months", "count": 9, "id": "discount200-10-9-nov-2017-priority"}
                            ],
                            "12 months": [
                                {"amount": 264.7, "itemName": "3 dates package - $200 off - 12 months", "count": 12, "id": "discount200-3-12-nov-2016-priority"},
                                {"amount": 306.7, "itemName": "5 dates package - $200 off - 12 months", "count": 12, "id": "discount200-5-12-nov-2016-priority"},
                                {"amount": 430.08, "itemName": "10 dates package - $200 off - 12 months", "count": 12, "id": "discount200-10-12-nov-2017-priority"}
                            ]
                        }
                    },
                    "discount300": {
                        "payments": [
                            {"amount": 2925, "itemName": "GaiGai 3-dates package - $300 OFF"},
                            {"amount": 3405, "itemName": "GaiGai 5-dates package - $300 OFF"},
                            {"amount": 4815, "itemName": "GaiGai 10-dates package - $300 OFF"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 975, "itemName": "3 dates package - $300 off - 3 months", "count": 3, "id": "discount-3-3-nov-2016-priority"},
                                {"amount": 1135, "itemName": "5 dates package - $300 off - 3 months", "count": 3, "id": "discount-5-3-nov-2016-priority"},
                                {"amount": 1605, "itemName": "10 dates package - $300 off - 3 months", "count": 3, "id": "discount-10-3-nov-2017-priority"}
                            ],
                            "6 months": [
                                {"amount": 487.5, "itemName": "3 dates package - $300 off - 6 months", "count": 6, "id": "discount-3-6-nov-2016-priority"},
                                {"amount": 567.5, "itemName": "5 dates package - $300 off - 6 months", "count": 6, "id": "discount-5-6-nov-2016-priority"},
                                {"amount": 802.5, "itemName": "10 dates package - $300 off - 6 months", "count": 6, "id": "discount-10-6-nov-2017-priority"}
                            ],
                            "9 months": [
                                {"amount": 341.25, "itemName": "3 dates package - $300 off - 9 months", "count": 9, "id": "discount-3-9-nov-2016-priority"},
                                {"amount": 397.25, "itemName": "5 dates package - $300 off - 9 months", "count": 9, "id": "discount-5-9-nov-2016-priority"},
                                {"amount": 561.75, "itemName": "10 dates package - $300 off - 9 months", "count": 9, "id": "discount-10-9-nov-2017-priority"}
                            ],
                            "12 months": [
                                {"amount": 255.95, "itemName": "3 dates package - $300 off - 12 months", "count": 12, "id": "discount-3-12-nov-2016-priority"},
                                {"amount": 297.95, "itemName": "5 dates package - $300 off - 12 months", "count": 12, "id": "discount-5-12-nov-2016-priority"},
                                {"amount": 421.33, "itemName": "10 dates package - $300 off - 12 months", "count": 12, "id": "discount-10-12-nov-2017-priority"}
                            ]
                        }
                    }
                },
                "elite": {
                    "full": {
                        "payments": [
                            {"amount": 5805, "itemName": "GaiGai 3-dates package - No Installment"},
                            {"amount": 6675, "itemName": "GaiGai 5-dates package - No Installment"},
                            {"amount": 9225, "itemName": "GaiGai 10-dates package - No Installment"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 1935, "itemName": "3 dates package - 3 months", "count": 3, "id": "full-3-3-nov-2016-elite"},
                                {"amount": 2225, "itemName": "5 dates package - 3 months", "count": 3, "id": "full-5-3-nov-2016-elite"},
                                {"amount": 3075, "itemName": "10 dates package - 3 months", "count": 3, "id": "full-10-3-nov-2017-elite"}
                            ],
                            "6 months": [
                                {"amount": 967.5, "itemName": "3 dates package - 6 months", "count": 6, "id": "full-3-6-nov-2016-elite"},
                                {"amount": 1112.5, "itemName": "5 dates package - 6 months", "count": 6, "id": "full-5-6-nov-2016-elite"},
                                {"amount": 1537.5, "itemName": "10 dates package - 6 months", "count": 6, "id": "full-10-6-nov-2017-elite"}
                            ],
                            "9 months": [
                                {"amount": 677.25, "itemName": "3 dates package - 9 months", "count": 9, "id": "full-3-9-nov-2016-elite"},
                                {"amount": 778.75, "itemName": "5 dates package - 9 months", "count": 9, "id": "full-5-9-nov-2016-elite"},
                                {"amount": 1076.25, "itemName": "10 dates package - 9 months", "count": 9, "id": "full-10-9-nov-2017-elite"}
                            ],
                            "12 months": [
                                {"amount": 507.96, "itemName": "3 dates package - 12 months", "count": 12, "id": "full-3-12-nov-2016-elite"},
                                {"amount": 584.09, "itemName": "5 dates package - 12 months", "count": 12, "id": "full-5-12-nov-2016-elite"},
                                {"amount": 807.23, "itemName": "10 dates package - 12 months", "count": 12, "id": "full-10-12-nov-2017-elite"}
                            ]
                        }
                    },
                    "discount100": {
                        "payments": [
                            {"amount": 5705, "itemName": "GaiGai 3-dates package - $100 OFF"},
                            {"amount": 6575, "itemName": "GaiGai 5-dates package - $100 OFF"},
                            {"amount": 9125, "itemName": "GaiGai 10-dates package - $100 OFF"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 1901.67, "itemName": "3 dates package - $100 off - 3 months", "count": 3, "id": "discount100-3-3-nov-2016-elite"},
                                {"amount": 2191.67, "itemName": "5 dates package - $100 off - 3 months", "count": 3, "id": "discount100-5-3-nov-2016-elite"},
                                {"amount": 3041.67, "itemName": "10 dates package - $100 off - 3 months", "count": 3, "id": "discount100-10-3-nov-2017-elite"}
                            ],
                            "6 months": [
                                {"amount": 950.83, "itemName": "3 dates package - $100 off - 6 months", "count": 6, "id": "discount100-3-6-nov-2016-elite"},
                                {"amount": 1095.83, "itemName": "5 dates package - $100 off - 6 months", "count": 6, "id": "discount100-5-6-nov-2016-elite"},
                                {"amount": 1520.83, "itemName": "10 dates package - $100 off - 6 months", "count": 6, "id": "discount100-10-6-nov-2017-elite"}
                            ],
                            "9 months": [
                                {"amount": 665.58, "itemName": "3 dates package - $100 off - 9 months", "count": 9, "id": "discount100-3-9-nov-2016-elite"},
                                {"amount": 767.08, "itemName": "5 dates package - $100 off - 9 months", "count": 9, "id": "discount100-5-9-nov-2016-elite"},
                                {"amount": 1064.58, "itemName": "10 dates package - $100 off - 9 months", "count": 9, "id": "discount100-10-9-nov-2017-elite"}
                            ],
                            "12 months": [
                                {"amount": 499.21, "itemName": "3 dates package - $100 off - 12 months", "count": 12, "id": "discount100-3-12-nov-2016-elite"},
                                {"amount": 575.34, "itemName": "5 dates package - $100 off - 12 months", "count": 12, "id": "discount100-5-12-nov-2016-elite"},
                                {"amount": 798.48, "itemName": "10 dates package - $100 off - 12 months", "count": 12, "id": "discount100-10-12-nov-2017-elite"}
                            ]
                        }
                    },
                    "discount200": {
                        "payments": [
                            {"amount": 5605, "itemName": "GaiGai 3-dates package - $200 OFF"},
                            {"amount": 6475, "itemName": "GaiGai 5-dates package - $200 OFF"},
                            {"amount": 9025, "itemName": "GaiGai 10-dates package - $200 OFF"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 1868.33, "itemName": "3 dates package - $200 off - 3 months", "count": 3, "id": "discount200-3-3-nov-2016-elite"},
                                {"amount": 2158.33, "itemName": "5 dates package - $200 off - 3 months", "count": 3, "id": "discount200-5-3-nov-2016-elite"},
                                {"amount": 3008.33, "itemName": "10 dates package - $200 off - 3 months", "count": 3, "id": "discount200-10-3-nov-2017-elite"}
                            ],
                            "6 months": [
                                {"amount": 934.17, "itemName": "3 dates package - $200 off - 6 months", "count": 6, "id": "discount200-3-6-nov-2016-elite"},
                                {"amount": 1079.17, "itemName": "5 dates package - $200 off - 6 months", "count": 6, "id": "discount200-5-6-nov-2016-elite"},
                                {"amount": 1504.17, "itemName": "10 dates package - $200 off - 6 months", "count": 6, "id": "discount200-10-6-nov-2017-elite"}
                            ],
                            "9 months": [
                                {"amount": 653.92, "itemName": "3 dates package - $200 off - 9 months", "count": 9, "id": "discount200-3-9-nov-2016-elite"},
                                {"amount": 755.42, "itemName": "5 dates package - $200 off - 9 months", "count": 9, "id": "discount200-5-9-nov-2016-elite"},
                                {"amount": 1052.92, "itemName": "10 dates package - $200 off - 9 months", "count": 9, "id": "discount200-10-9-nov-2017-elite"}
                            ],
                            "12 months": [
                                {"amount": 490.46, "itemName": "3 dates package - $200 off - 12 months", "count": 12, "id": "discount200-3-12-nov-2016-elite"},
                                {"amount": 566.59, "itemName": "5 dates package - $200 off - 12 months", "count": 12, "id": "discount200-5-12-nov-2016-elite"},
                                {"amount": 789.73, "itemName": "10 dates package - $200 off - 12 months", "count": 12, "id": "discount200-10-12-nov-2017-elite"}
                            ]
                        }
                    },
                    "discount300": {
                        "payments": [
                            {"amount": 5505, "itemName": "GaiGai 3-dates package - $300 OFF"},
                            {"amount": 6375, "itemName": "GaiGai 5-dates package - $300 OFF"},
                            {"amount": 8925, "itemName": "GaiGai 10-dates package - $300 OFF"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 1835, "itemName": "3 dates package - $300 off - 3 months", "count": 3, "id": "discount-3-3-nov-2016-elite"},
                                {"amount": 2125, "itemName": "5 dates package - $300 off - 3 months", "count": 3, "id": "discount-5-3-nov-2016-elite"},
                                {"amount": 2975, "itemName": "10 dates package - $300 off - 3 months", "count": 3, "id": "discount-10-3-nov-2017-elite"}
                            ],
                            "6 months": [
                                {"amount": 917.5, "itemName": "3 dates package - $300 off - 6 months", "count": 6, "id": "discount-3-6-nov-2016-elite"},
                                {"amount": 1062.5, "itemName": "5 dates package - $300 off - 6 months", "count": 6, "id": "discount-5-6-nov-2016-elite"},
                                {"amount": 1487.5, "itemName": "10 dates package - $300 off - 6 months", "count": 6, "id": "discount-10-6-nov-2017-elite"}
                            ],
                            "9 months": [
                                {"amount": 642.25, "itemName": "3 dates package - $300 off - 9 months", "count": 9, "id": "discount-3-9-nov-2016-elite"},
                                {"amount": 743.75, "itemName": "5 dates package - $300 off - 9 months", "count": 9, "id": "discount-5-9-nov-2016-elite"},
                                {"amount": 1041.25, "itemName": "10 dates package - $300 off - 9 months", "count": 9, "id": "discount-10-9-nov-2017-elite"}
                            ],
                            "12 months": [
                                {"amount": 481.71, "itemName": "3 dates package - $300 off - 12 months", "count": 12, "id": "discount-3-12-nov-2016-elite"},
                                {"amount": 557.84, "itemName": "5 dates package - $300 off - 12 months", "count": 12, "id": "discount-5-12-nov-2016-elite"},
                                {"amount": 780.97, "itemName": "10 dates package - $300 off - 12 months", "count": 12, "id": "discount-10-12-nov-2017-elite"}
                            ]
                        }
                    }
                },
                "custom":{"amount": 262.45, "itemName": "10 dates package - 12 months installment ($300 off promo)", "count": 12, "id": "custom2_27feb17"},
                "custom2":{"amount": 332.08, "itemName": "10 dates package - 11 months", "count": 11, "id": "custom1_27feb17"},
                "custom3":{"amount": 307.50, "itemName": "5 dates package - 4 months", "count": 4, "id": "custom2_7feb17"}
            }
            next(vm => {
                debugger
                let {query} = vm.$route
                let {membership, discount} = query
                vm.query = query
                vm.stripe = config[membership][discount]
                vm.months = vm.$route.query.months * 1
            })
        }
    }
</script>

<style scoped>
    .table {
        margin-top: 20px;
        text-align: center;
    }

    th, td {
        padding: 10px;
        line-height: 1.42857143;
        vertical-align: top;
        border-top: 1px solid #ddd;
    }

    .table > thead > tr > th {
        background: black;
        color: white;
        padding-top: 18px;
        padding-bottom: 18px;
        text-align: center;
    }

    td {
        background: #f2f2f2;
        vertical-align: middle !important;
    }

    .btn-primary {
        color: #fff;
        background-color: black;
        border-color: #2e6da4;
    }
</style>
