<template>
    <div>
        <Process step="1"></Process>
        <table class="table table-bordered" v-if="stripe">
            <thead>
            <tr>
                <th></th>
                <th>1 date package</th>
                <th>3 date package <br>duration 12</th>
                <th>3 date package <br>duration 6</th>
                <th>5 date package <br>duration 12</th>
                <th>5 date package <br>duration 8</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>No installment</td>
                <td v-for="(payment,index) in stripe.payments">
                    HKD{{payment.amount}}
                    <br>
                    <button @click="choosePayment(payment)" type="button" class="btn btn-primary">Pay with Card</button>
                </td>
            </tr>
            <tr v-if="query.months>=3">
                <td>3 months installment</td>
                <td></td>
                <td v-for="(plan,index) in stripe.plans['3 months']">
                    HKD{{plan.amount}}
                    <br>
                    <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
                </td>
            </tr>
            <tr v-if="query.months>=6">
                <td>6 months installment</td>
                <td></td>
                <td v-for="(plan,index) in stripe.plans['6 months']">
                    HKD{{plan.amount}}
                    <br>
                    <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
                </td>
            </tr>
            <tr v-if="query.months>=9">
                <td>9 months installment</td>
                <td></td>
                <template v-for="(plan,index) in stripe.plans['9 months']">
                    <td>
                        HKD{{plan.amount}}
                        <br>
                        <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
                    </td>
                    <td></td>
                </template>
            </tr>
            <tr v-if="query.months>=12">
                <td>12 months installment</td>
                <td></td>
                <template v-for="(plan,index) in stripe.plans['12 months']">
                    <td>
                        HKD{{plan.amount}}
                        <br>
                        <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
                    </td>
                    <td></td>
                </template>
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
                query: null
            }
        },
        methods: {
            choosePayment(plan){
                this.$router.push({name: 'pay', query: getObj(plan)})
            }
        },
        beforeRouteEnter: (to, from, next) => {
            getStripeConfig
                    .then(
                            function (res) {
                                next(vm => {
                                    let {query} = vm.$route
                                    const {membership, discount} = query;
                                    vm.stripe = res.body[membership][discount]
                                    vm.query = query
                                })
                            }
                    )
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
