<template>
  <div class="panel panel-primary">
    <div class="panel-heading text-center">
      <h3 class="panel-title">
        Page for RM
      </h3>
    </div>
    <div class="panel-body">
      <form>
        <div class="form-group">
          <h4>1. How many months of installment do you want to show?</h4>
          <label class="radio-inline">
            <input type="radio" v-model="options.months" value="0"> Full
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="options.months" value="3"> 3 months
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="options.months" value="6"> 6 months
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="options.months" value="9"> 9 months
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="options.months" value="12"> 12 months
          </label>
        </div>
        <!--<div class="form-group">-->
          <!--<h4>2. Did you use $100 discount?</h4>-->
          <!--<label class="radio-inline">-->
            <!--<input type="radio" v-model="options.discount" value="full"> No discount-->
          <!--</label>-->
          <!--<label class="radio-inline">-->
            <!--<input type="radio" v-model="options.discount" value="discount100"> $100-->
          <!--</label>-->
          <!--<label class="radio-inline">-->
            <!--<input type="radio" v-model="options.discount" value="discount200"> $200-->
          <!--</label>-->
          <!--<label class="radio-inline">-->
            <!--<input type="radio" v-model="options.discount" value="discount300"> $300-->
          <!--</label>-->
        <!--</div>-->
      </form>

      <p>
        Your payment URL to clients is
        <a :href="link">{{link}}
        </a>
      </p>
    </div>
  </div>
</template>

<script lang="coffee" type="text/coffeescript">
  module.exports =
    name: 'RM'
    data: ->
      options:
        months: '0'
        discount: 'full'
    computed:
      link: ->
        @path + '#price?months=' + @options.months + '&discount=' + @options.discount
      path: -> document.location.origin + document.location.pathname
</script>

<style scoped>
  a {
    color: red;
  }
</style>
