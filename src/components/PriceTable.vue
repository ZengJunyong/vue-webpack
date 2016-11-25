<template>
    <div>
        <Process step="1"></Process>
        <table class="table table-bordered" v-if="stripe">
            <thead>
            <tr>
                <th></th>
                <th v-if="membership=='basic'">1 date package</th>
                <th>3 date package</th>
                <th>5 date package</th>
                <th>10 date package</th>
            </tr>
            </thead>
            <tbody>
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
                <td v-if="membership=='basic'"></td>
                <td v-for="plan of stripe.plans['3 months']">
                    S${{plan.amount}}
                    <br>
                    <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
                </td>
            </tr>
            <tr v-if="months>=6">
                <td>6 months installment</td>
                <td v-if="membership=='basic'"></td>
                <td v-for="plan of stripe.plans['6 months']">
                    S${{plan.amount}}
                    <br>
                    <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
                </td>
            </tr>
            <tr v-if="months>=9">
                <td>9 months installment</td>
                <td v-if="membership=='basic'"></td>
                <td v-for="plan of stripe.plans['9 months']">
                    S${{plan.amount}}
                    <br>
                    <button @click="choosePayment(plan)" type="button" class="btn btn-primary">Subscribe</button>
                </td>
            </tr>
            <tr v-if="months>=12">
                <td>12 months installment</td>
                <td v-if="membership=='basic'"></td>
                <td v-for="plan of stripe.plans['12 months']">
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
                membership: null
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
                                    const {membership, discount, months} = vm.$route.query;
                                    vm.stripe = JSON.parse(res.body)[membership][discount]
                                    vm.months = months * 1
                                    vm.membership = membership
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
