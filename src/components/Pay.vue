<template>
    <div>
        <Process :step="step"></Process>
        <div class="panel panel-primary"  v-if="success!=1&&success!=0">
            <div class="panel-heading text-center">
                <h3 class="panel-title">
                    {{plan.itemName}}
                    <span v-if="plan.count">, S${{plan.amount}} for each month, for {{plan.count}} instalments</span>
                </h3>
            </div>
            <div class="panel-body">
                <form class="form-horizontal" @submit.prevent="onSubmit()"
                      style="width: 400px;margin: 40px auto 30px auto;">
                    <div class="form-group">
                        <label class="col-sm-4 control-label">First name</label>
                        <div class="col-sm-8">
                            <input required v-model="user.firstName" name="firstName" type="text" class="form-control">
                        </div>

                    </div>
                    <div class="form-group">
                        <label class="col-sm-4 control-label">Last name</label>
                        <div class="col-sm-8">
                            <input required v-model="user.lastName" name="lastName" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-4 col-sm-8" style="margin-top: 10px;">
                            <button v-if="plan.count" :disabled="!verify.$valid" type="submit"
                                    class="btn btn-block btn-primary">Subscribe
                            </button>
                            <button v-if="!plan.count" :disabled="!verify.$valid" type="submit"
                                    class="btn btn-block btn-primary">Pay
                                S${{plan.amount}}
                            </button>
                        </div>
                    </div>
                    <span v-if="success==0" style="color: red;">Opps, something is wrong!</span>
                    <span v-if="success==1" style="color: green;">Thanks for purchasing</span>
                </form>
            </div>
        </div>

        <div class="panel panel-primary" v-if="success==1">
            <div class="panel-heading text-center">
                <h3 class="panel-title">
                    Payment is complete!
                </h3>
            </div>
            <div class="panel-body" style="padding: 30px;">
                THANK YOU FOR JOINING GAIGAI
                <br>
                <a href="https://www.letsgaigai.com/#/events" class="btn btn-primary" style="margin-top: 20px;">
                    LOOK AT EVENTS
                </a>
            </div>
        </div>

        <div class="panel panel-primary" v-if="success==0">
            <div class="panel-heading text-center" style="background: #8e1414;">
                <h3 class="panel-title">
                    Payment Unsuccessful
                </h3>
            </div>
            <div class="panel-body" style="padding: 30px;">
                OOPS, THERE SEEMS TO BE A PROBLEM.
                <br>
                <button  @click="tryAgain" class="btn btn-primary" style="margin-top: 20px;">
                    TRY AGAIN
                </button>
            </div>
        </div>
    </div>


</template>

<script>

    import Vue from 'vue'
    import {pay} from '../services'
//    import {key} from '../config'
    import Process from './Process.vue'

    export default {
        name: 'Pay',
        components: {
            Process
        },
        data () {
            return {
                user: {
                    firstName: null, lastName: null
                },
                success: -1,
                step: 2
            }
        },
        created: function () {
            this.$verify({
                'user.firstName': {
                    required: true,
                },
                'user.lastName': {
                    required: true,
                }
            })
        },
        computed: {
            plan(){
                return this.$route.query
            }
        },
        methods: {
            onSubmit: function () {
                var _this = this;
                // http://stackoverflow.com/questions/30578254/does-vue-js-have-a-built-in-way-to-add-a-copy-of-a-persistent-object-to-a-repeat
                var mixin = Vue.util.extend(this.plan, this.user)
                var key = 'pk_live_Zo2921HDEtTxDEZfXS3ZVR5N'
                if (this.plan.account && this.plan.account === 'gaigai'){
                    key = 'pk_live_FuAcU0iDek4hsDLl1k1NrsgB'
                    mixin.account = 'gaigai'
                }
                StripeCheckout.configure({
                    key,
                    name: 'GaiGai Pte Ltd',
                    description: this.plan.itemName,
                    image: 'https://www.letsgaigai.com/gokaikai/assets/images/big.logo.png',
                    allowRememberMe: false,
                    panelLabel: this.plan.count ? 'Subscribe' : 'Pay S$' + this.plan.amount,
                    token: function (token) {
                        pay(Vue.util.extend(mixin, {
                            tokenId: token.id,
                            email: token.email,
                        })).then((res) => {
                            let {success} = res.body;
                            if (success) {
                                _this.user = {}
                                _this.step = 4
                            }
                            _this.success = success
                        });
                    }
                }).open();
                _this.step = 3
            },
            tryAgain:function () {
                this.success = -1
                this.onSubmit()
            }
        }
    }
</script>

<style scoped>
    .panel-primary {
        margin-top: 40px;
    }

    .panel-heading {
        background: black;
        padding: 20px;
    }

    .panel-body {
        text-align: center;
        background: #f2f2f2;
    }

    .panel-primary {
        border-color: black;
    }

    .btn-primary {
        background: black;
    }

    label {
        font-family: Brandon_bld;
        text-transform: uppercase;
    }
</style>
