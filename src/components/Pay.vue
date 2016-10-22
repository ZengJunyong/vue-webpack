<template>
  <div class="panel panel-primary">
    <div class="panel-heading text-center">
      <h3 class="panel-title">
        {{plan.itemName}}
        <span v-if="plan.count">, S${{plan.amount}} for each month, for {{plan.count}} instalments</span>
      </h3>
    </div>
    <div class="panel-body">
      <form @submit.prevent="onSubmit()">
        <div class="form-group">
          <label>First name</label>
          <input required v-model="user.firstName" name="firstName" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>Last name</label>
          <input required v-model="user.lastName" name="lastName" type="text" class="form-control">
        </div>

        <button v-if="plan.count" :disabled="inValid" type="submit" class="btn btn-primary">Subscribe
        </button>
        <button v-if="!plan.count" :disabled="inValid" type="submit" class="btn btn-primary">Pay
          S${{plan.amount}}
        </button>

        <span v-if="success==0" style="color: red;">Opps, something is wrong!</span>
        <span v-if="success==1" style="color: green;">Thanks for purchasing</span>
      </form>
    </div>
  </div>


</template>

<script>

  import Vue from 'vue'
  import {pay} from '../services'

  export default {
    name: 'Pay',
    data () {
      return {
        user: {
          firstName: null, lastName: null
        },
        success: -1
      }
    },
    methods: {
      onSubmit: function () {
        var _this = this;
        let key = 'pk_test_FX2nzQcClgXqETUTMZDK2BNu';
        // let key = 'pk_live_Zo2921HDEtTxDEZfXS3ZVR5N';
        // http://stackoverflow.com/questions/30578254/does-vue-js-have-a-built-in-way-to-add-a-copy-of-a-persistent-object-to-a-repeat
        var mixin = Vue.util.extend(this.plan, this.user)
        StripeCheckout.configure({
          key: key,
          name: 'GaiGai Pte Ltd',
          description: this.plan.itemName,
          image: 'https://www.letsgaigai.com/gokaikai/assets/images/big.logo.png',
          allowRememberMe: false,
          panelLabel: this.plan.count ? 'Subscribe' : 'Pay S$' + this.plan.amount,
          token: function (token) {
            debugger
            pay(Vue.util.extend(mixin, {
              tokenId: token.id,
              email: token.email,
            })).then((res) => {
              debugger
              let {success} = res.body;
              if (success) {
                _this.user = {};
              }
              _this.success = success;
            });
          }
        }).open();
      }
    },
    computed: {
      plan(){
        return this.$route.query
      },
      inValid(){
        // TODO should use vue-validator, now it is not published.
        // anyway, this is not a perfect idea now, but it works with some bugs :-)
        return this.user.firstName == null || this.user.lastName == null
      }
    }
  }
</script>

<style scoped>
</style>
