<template>
    <div>
        <Process step="1"></Process>
        <table class="table table-bordered" v-if="stripe">
            <thead>
            <tr>
                <th></th>
                <th v-if="query.membership=='classic'&&(query.packages=='0'||query.packages=='all')">1 date package</th>
                <th v-if="query.packages=='1'||query.packages=='all'">3 date package</th>
                <th v-if="query.packages=='2'||query.packages=='all'">5 date package</th>
                <th v-if="query.packages=='3'||query.packages=='all'">10 date package</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>No installment</td>
                <td v-for="(payment,index) in stripe.payments" v-if="query.membership=='classic'&&(query.packages==index||query.packages=='all')">
                    MYR{{payment.amount}}
                    <br>
                    <button @click="choosePayment(payment)" type="button" class="btn btn-primary">Pay with Card</button>
                </td>
                <td v-for="(payment,index) in stripe.payments" v-if="query.membership!='classic'&&(query.packages-1==index||query.packages=='all')">
                    MYR{{payment.amount}}
                    <br>
                    <button @click="choosePayment(payment)" type="button" class="btn btn-primary">Pay with Card</button>
                </td>
            </tr>
            <tr v-if="query.months>=3">

                <td>3 months installment</td>
                <td v-if="query.membership=='classic'&&(query.packages=='0'||query.packages=='all')"></td>
                <td v-for="(plan,index) in stripe.plans['3 months']" v-if="query.packages-1==index||query.packages=='all'">
                    MYR{{plan.amount}}
                    <br>
                    <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
                </td>
            </tr>
            <tr v-if="query.months>=6">
                <td>6 months installment</td>
                <td v-if="query.membership=='classic'&&(query.packages=='0'||query.packages=='all')"></td>
                <td v-for="(plan,index) in stripe.plans['6 months']" v-if="query.packages-1==index||query.packages=='all'">
                    MYR{{plan.amount}}
                    <br>
                    <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
                </td>
            </tr>
            <tr v-if="query.months>=9">
                <td>9 months installment</td>
                <td v-if="query.membership=='classic'&&(query.packages=='0'||query.packages=='all')"></td>
                <td v-for="(plan,index) in stripe.plans['9 months']" v-if="query.packages-1==index||query.packages=='all'">
                    MYR{{plan.amount}}
                    <br>
                    <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
                </td>
            </tr>
            <tr v-if="query.months>=12">
                <td>12 months installment</td>
                <td v-if="query.membership=='classic'&&(query.packages=='0'||query.packages=='all')"></td>
                <td v-for="(plan,index) in stripe.plans['12 months']" v-if="query.packages-1==index||query.packages=='all'">
                    MYR{{plan.amount}}
                    <br>
                    <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
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
                "classic": {
                    "full": {
                        "payments": [
                            {"amount": 2000, "itemName": "1-dates package - No Installment"},
                            {"amount": 4500, "itemName": "3-dates package - No Installment"},
                            {"amount": 5100, "itemName": "5-dates package - No Installment"},
                            {"amount": 7500, "itemName": "10-dates package - No Installment"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 1500, "itemName": "3 dates package - 3 months", "count": 3, "id": "full-3-3-mar-2017"},
                                {"amount": 1700, "itemName": "5 dates package - 3 months", "count": 3, "id": "full-5-3-mar-2017"},
                                {"amount": 2500, "itemName": "10 dates package - 3 months", "count": 3, "id": "full-10-3-mar-2017"}
                            ],
                            "6 months": [
                                {"amount": 750, "itemName": "3 dates package - 6 months", "count": 6, "id": "full-3-6-mar-2017"},
                                {"amount": 850, "itemName": "5 dates package - 6 months", "count": 6, "id": "full-5-6-mar-2017"},
                                {"amount": 1250, "itemName": "10 dates package - 6 months", "count": 6, "id": "full-10-6-mar-2017"}
                            ],
                            "9 months": [
                                {"amount": 525, "itemName": "3 dates package - 9 months", "count": 9, "id": "full-3-9-mar-2017"},
                                {"amount": 595, "itemName": "5 dates package - 9 months", "count": 9, "id": "full-5-9-mar-2017"},
                                {"amount": 875, "itemName": "10 dates package - 9 months", "count": 9, "id": "full-10-9-mar-2017"}
                            ]
                        }
                    },
                    "discount150": {
                        "payments": [
                            {"amount": 2000, "itemName": "1-dates package -  MYR150 OFF"},
                            {"amount": 4350, "itemName": "3-dates package -  MYR150 OFF"},
                            {"amount": 4950, "itemName": "5-dates package -  MYR150 OFF"},
                            {"amount": 7350, "itemName": "10-dates package -  MYR150 OFF"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 1450, "itemName": "3 dates package -  MYR150 off - 3 months", "count": 3, "id": "discount150-3-3-mar-2017"},
                                {"amount": 1650, "itemName": "5 dates package -  MYR150 off - 3 months", "count": 3, "id": "discount150-5-3-mar-2017"},
                                {"amount": 2450, "itemName": "10 dates package -  MYR150 off - 3 months", "count": 3, "id": "discount150-10-3-mar-2017"}
                            ],
                            "6 months": [
                                {"amount": 725, "itemName": "3 dates package -  MYR150 off - 6 months", "count": 6, "id": "discount150-3-6-mar-2017"},
                                {"amount": 825, "itemName": "5 dates package -  MYR150 off - 6 months", "count": 6, "id": "discount150-5-6-mar-2017"},
                                {"amount": 1225, "itemName": "10 dates package -  MYR150 off - 6 months", "count": 6, "id": "discount150-10-6-mar-2017"}
                            ],
                            "9 months": [
                                {"amount": 507.5, "itemName": "3 dates package -  MYR150 off - 9 months", "count": 9, "id": "discount150-3-9-mar-2017"},
                                {"amount": 577.5, "itemName": "5 dates package -  MYR150 off - 9 months", "count": 9, "id": "discount150-5-9-mar-2017"},
                                {"amount": 857.5, "itemName": "10 dates package -  MYR150 off - 9 months", "count": 9, "id": "discount150-10-9-mar-2017"}
                            ]
                        }
                    },
                    "discount300": {
                        "payments": [
                            {"amount": 2000, "itemName": "1-dates package -  MYR300 OFF"},
                            {"amount": 4200, "itemName": "3-dates package -  MYR300 OFF"},
                            {"amount": 4800, "itemName": "5-dates package -  MYR300 OFF"},
                            {"amount": 7200, "itemName": "10-dates package -  MYR300 OFF"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 1400, "itemName": "3 dates package -  MYR300 off - 3 months", "count": 3, "id": "discount300-3-3-mar-2017"},
                                {"amount": 1600, "itemName": "5 dates package -  MYR300 off - 3 months", "count": 3, "id": "discount300-5-3-mar-2017"},
                                {"amount": 2400, "itemName": "10 dates package -  MYR300 off - 3 months", "count": 3, "id": "discount300-10-3-mar-2017"}
                            ],
                            "6 months": [
                                {"amount": 700, "itemName": "3 dates package -  MYR300 off - 6 months", "count": 6, "id": "discount300-3-6-mar-2017"},
                                {"amount": 800, "itemName": "5 dates package -  MYR300 off - 6 months", "count": 6, "id": "discount300-5-6-mar-2017"},
                                {"amount": 1200, "itemName": "10 dates package -  MYR300 off - 6 months", "count": 6, "id": "discount300-10-6-mar-2017"}
                            ],
                            "9 months": [
                                {"amount": 490, "itemName": "3 dates package -  MYR300 off - 9 months", "count": 9, "id": "discount300-3-9-mar-2017"},
                                {"amount": 560, "itemName": "5 dates package -  MYR300 off - 9 months", "count": 9, "id": "discount300-5-9-mar-2017"},
                                {"amount": 840, "itemName": "10 dates package -  MYR300 off - 9 months", "count": 9, "id": "discount300-10-9-mar-2017"}
                            ]
                        }
                    }
                },
                "priority": {
                    "full": {
                        "payments": [
                            {"amount": 6000, "itemName": "3-dates package - No Installment"},
                            {"amount": 6900, "itemName": "5-dates package - No Installment"},
                            {"amount": 9900, "itemName": "10-dates package - No Installment"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 2000, "itemName": "3 dates package - 3 months", "count": 3, "id": "full-3-3-mar-2017-priority"},
                                {"amount": 2300, "itemName": "5 dates package - 3 months", "count": 3, "id": "full-5-3-mar-2017-priority"},
                                {"amount": 3300, "itemName": "10 dates package - 3 months", "count": 3, "id": "full-10-3-mar-2017-priority"}
                            ],
                            "6 months": [
                                {"amount": 1000, "itemName": "3 dates package - 6 months", "count": 6, "id": "full-3-6-mar-2017-priority"},
                                {"amount": 1150, "itemName": "5 dates package - 6 months", "count": 6, "id": "full-5-6-mar-2017-priority"},
                                {"amount": 1650, "itemName": "10 dates package - 6 months", "count": 6, "id": "full-10-6-mar-2017-priority"}
                            ],
                            "9 months": [
                                {"amount": 700, "itemName": "3 dates package - 9 months", "count": 9, "id": "full-3-9-mar-2017-priority"},
                                {"amount": 805, "itemName": "5 dates package - 9 months", "count": 9, "id": "full-5-9-mar-2017-priority"},
                                {"amount": 1155, "itemName": "10 dates package - 9 months", "count": 9, "id": "full-10-9-mar-2017-priority"}
                            ]
                        }
                    },
                    "discount150": {
                        "payments": [
                            {"amount": 5850, "itemName": "3-dates package -  MYR150 OFF"},
                            {"amount": 6750, "itemName": "5-dates package -  MYR150 OFF"},
                            {"amount": 9750, "itemName": "10-dates package -  MYR150 OFF"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 1950, "itemName": "3 dates package -  MYR150 off - 3 months", "count": 3, "id": "discount150-3-3-mar-2017-priority"},
                                {"amount": 2250, "itemName": "5 dates package -  MYR150 off - 3 months", "count": 3, "id": "discount150-5-3-mar-2017-priority"},
                                {"amount": 3250, "itemName": "10 dates package -  MYR150 off - 3 months", "count": 3, "id": "discount150-10-3-mar-2017-priority"}
                            ],
                            "6 months": [
                                {"amount": 975, "itemName": "3 dates package -  MYR150 off - 6 months", "count": 6, "id": "discount150-3-6-mar-2017-priority"},
                                {"amount": 1125, "itemName": "5 dates package -  MYR150 off - 6 months", "count": 6, "id": "discount150-5-6-mar-2017-priority"},
                                {"amount": 1625, "itemName": "10 dates package -  MYR150 off - 6 months", "count": 6, "id": "discount150-10-6-mar-2017-priority"}
                            ],
                            "9 months": [
                                {"amount": 682.5, "itemName": "3 dates package -  MYR150 off - 9 months", "count": 9, "id": "discount150-3-9-mar-2017-priority"},
                                {"amount": 787.5, "itemName": "5 dates package -  MYR150 off - 9 months", "count": 9, "id": "discount150-5-9-mar-2017-priority"},
                                {"amount": 1137.5, "itemName": "10 dates package -  MYR150 off - 9 months", "count": 9, "id": "discount150-10-9-mar-2017-priority"}
                            ]
                        }
                    },
                    "discount300": {
                        "payments": [
                            {"amount": 5700, "itemName": "3-dates package -  MYR300 OFF"},
                            {"amount": 6600, "itemName": "5-dates package -  MYR300 OFF"},
                            {"amount": 9600, "itemName": "10-dates package -  MYR300 OFF"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 1900, "itemName": "3 dates package -  MYR300 off - 3 months", "count": 3, "id": "discount300-3-3-mar-2017-priority"},
                                {"amount": 2200, "itemName": "5 dates package -  MYR300 off - 3 months", "count": 3, "id": "discount300-5-3-mar-2017-priority"},
                                {"amount": 3200, "itemName": "10 dates package -  MYR300 off - 3 months", "count": 3, "id": "discount300-10-3-mar-2017-priority"}
                            ],
                            "6 months": [
                                {"amount": 950, "itemName": "3 dates package -  MYR300 off - 6 months", "count": 6, "id": "discount300-3-6-mar-2017-priority"},
                                {"amount": 1100, "itemName": "5 dates package -  MYR300 off - 6 months", "count": 6, "id": "discount300-5-6-mar-2017-priority"},
                                {"amount": 1600, "itemName": "10 dates package -  MYR300 off - 6 months", "count": 6, "id": "discount300-10-6-mar-2017-priority"}
                            ],
                            "9 months": [
                                {"amount": 665, "itemName": "3 dates package -  MYR300 off - 9 months", "count": 9, "id": "discount300-3-9-mar-2017-priority"},
                                {"amount": 770, "itemName": "5 dates package -  MYR300 off - 9 months", "count": 9, "id": "discount300-5-9-mar-2017-priority"},
                                {"amount": 1120, "itemName": "10 dates package -  MYR300 off - 9 months", "count": 9, "id": "discount300-10-9-mar-2017-priority"}
                            ]
                        }
                    }
                },
                "elite": {
                    "full": {
                        "payments": [
                            {"amount": 10800, "itemName": "3-dates package - No Installment"},
                            {"amount": 12600, "itemName": "5-dates package - No Installment"},
                            {"amount": 17400, "itemName": "10-dates package - No Installment"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 3600, "itemName": "3 dates package - 3 months", "count": 3, "id": "full-3-3-mar-2017-elite"},
                                {"amount": 4200, "itemName": "5 dates package - 3 months", "count": 3, "id": "full-5-3-mar-2017-elite"},
                                {"amount": 5800, "itemName": "10 dates package - 3 months", "count": 3, "id": "full-10-3-mar-2017-elite"}
                            ],
                            "6 months": [
                                {"amount": 1800, "itemName": "3 dates package - 6 months", "count": 6, "id": "full-3-6-mar-2017-elite"},
                                {"amount": 2100, "itemName": "5 dates package - 6 months", "count": 6, "id": "full-5-6-mar-2017-elite"},
                                {"amount": 2900, "itemName": "10 dates package - 6 months", "count": 6, "id": "full-10-6-mar-2017-elite"}
                            ],
                            "9 months": [
                                {"amount": 1260, "itemName": "3 dates package - 9 months", "count": 9, "id": "full-3-9-mar-2017-elite"},
                                {"amount": 1470, "itemName": "5 dates package - 9 months", "count": 9, "id": "full-5-9-mar-2017-elite"},
                                {"amount": 2030, "itemName": "10 dates package - 9 months", "count": 9, "id": "full-10-9-mar-2017-elite"}
                            ]
                        }
                    },
                    "discount150": {
                        "payments": [
                            {"amount": 10650, "itemName": "3-dates package -  MYR150 OFF"},
                            {"amount": 12450, "itemName": "5-dates package -  MYR150 OFF"},
                            {"amount": 17250, "itemName": "10-dates package -  MYR150 OFF"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 3550, "itemName": "3 dates package -  MYR150 off - 3 months", "count": 3, "id": "discount150-3-3-mar-2017-elite"},
                                {"amount": 4150, "itemName": "5 dates package -  MYR150 off - 3 months", "count": 3, "id": "discount150-5-3-mar-2017-elite"},
                                {"amount": 5750, "itemName": "10 dates package -  MYR150 off - 3 months", "count": 3, "id": "discount150-10-3-mar-2017-elite"}
                            ],
                            "6 months": [
                                {"amount": 1775, "itemName": "3 dates package -  MYR150 off - 6 months", "count": 6, "id": "discount150-3-6-mar-2017-elite"},
                                {"amount": 2075, "itemName": "5 dates package -  MYR150 off - 6 months", "count": 6, "id": "discount150-5-6-mar-2017-elite"},
                                {"amount": 2875, "itemName": "10 dates package -  MYR150 off - 6 months", "count": 6, "id": "discount150-10-6-mar-2017-elite"}
                            ],
                            "9 months": [
                                {"amount": 1242.5, "itemName": "3 dates package -  MYR150 off - 9 months", "count": 9, "id": "discount150-3-9-mar-2017-elite"},
                                {"amount": 1452.5, "itemName": "5 dates package -  MYR150 off - 9 months", "count": 9, "id": "discount150-5-9-mar-2017-elite"},
                                {"amount": 2012.5, "itemName": "10 dates package -  MYR150 off - 9 months", "count": 9, "id": "discount150-10-9-mar-2017-elite"}
                            ]
                        }
                    },
                    "discount300": {
                        "payments": [
                            {"amount": 10500, "itemName": "3-dates package -  MYR300 OFF"},
                            {"amount": 12300, "itemName": "5-dates package -  MYR300 OFF"},
                            {"amount": 17100, "itemName": "10-dates package -  MYR300 OFF"}
                        ],
                        "plans": {
                            "3 months": [
                                {"amount": 3500, "itemName": "3 dates package -  MYR300 off - 3 months", "count": 3, "id": "discount300-3-3-mar-2017-elite"},
                                {"amount": 4100, "itemName": "5 dates package -  MYR300 off - 3 months", "count": 3, "id": "discount300-5-3-mar-2017-elite"},
                                {"amount": 5700, "itemName": "10 dates package -  MYR300 off - 3 months", "count": 3, "id": "discount300-10-3-mar-2017-elite"}
                            ],
                            "6 months": [
                                {"amount": 1750, "itemName": "3 dates package -  MYR300 off - 6 months", "count": 6, "id": "discount300-3-6-mar-2017-elite"},
                                {"amount": 2050, "itemName": "5 dates package -  MYR300 off - 6 months", "count": 6, "id": "discount300-5-6-mar-2017-elite"},
                                {"amount": 2850, "itemName": "10 dates package -  MYR300 off - 6 months", "count": 6, "id": "discount300-10-6-mar-2017-elite"}
                            ],
                            "9 months": [
                                {"amount": 1225, "itemName": "3 dates package -  MYR300 off - 9 months", "count": 9, "id": "discount300-3-9-mar-2017-elite"},
                                {"amount": 1435, "itemName": "5 dates package -  MYR300 off - 9 months", "count": 9, "id": "discount300-5-9-mar-2017-elite"},
                                {"amount": 1995, "itemName": "10 dates package -  MYR300 off - 9 months", "count": 9, "id": "discount300-10-9-mar-2017-elite"}
                            ]
                        }
                    }
                },
                "custom":{"amount": 262.45, "itemName": "10 dates package - 12 months installment ( MYR300 off promo)", "count": 12, "id": "custom2_27feb17"},
                "custom2":{"amount": 332.08, "itemName": "10 dates package - 11 months", "count": 11, "id": "custom1_27feb17"},
                "custom3":{"amount": 307.50, "itemName": "5 dates package - 4 months", "count": 4, "id": "custom2_7feb17"}
            }
            next(vm => {
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
