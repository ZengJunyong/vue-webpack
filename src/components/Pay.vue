<template>
  <div class="panel panel-primary">
    <div class="panel-heading text-center">
      <h3 class="panel-title">
        {{plan.itemName}}
        <span v-if="plan.count">, MYR{{plan.amount}} for each month, for {{plan.count}} instalments</span>
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

        <button v-if="plan.count" :disabled="!verify.$valid" type="submit" class="btn btn-primary">Subscribe
        </button>
        <button v-if="!plan.count" :disabled="!verify.$valid" type="submit" class="btn btn-primary">Pay
          MYR{{plan.amount}}
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
  import {key} from '../config'

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
        StripeCheckout.configure({
          key,
          name: 'PaktorMY Sdn Bhd',
          description: this.plan.itemName,
          image: 'https://www.mydatesmith.com/gokaikai/assets/images/stripe.logo.jpg',
          allowRememberMe: false,
          panelLabel: this.plan.count ? 'Subscribe' : 'Pay MYR' + this.plan.amount,
          token: function (token) {
            pay(Vue.util.extend(mixin, {
              tokenId: token.id,
              email: token.email
            })).then((res) => {
              let {success} = res.body;
              if (success) {
                _this.user = {};
              }
              _this.success = success;
            });
          }
        }).open();
      }
    }
  }
</script>

<style scoped>
</style>
