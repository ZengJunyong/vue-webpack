<template>
  <div class="panel panel-primary">
    <div class="panel-body">
      <form>
        <div class="form-group">
          <h4>1. Are you using custom links?</h4>
          <label class="radio-inline">
            <input type="radio" v-model="options.custom" value="no"> No
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="options.custom" value="link1"> Link1
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="options.custom" value="link2"> Link2
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="options.custom" value="link3"> Link3
          </label>
        </div>
        <div class="form-group" v-if="options.custom=='no'">
          <h4>2. How many months of installment do you want to show?</h4>
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
        <div class="form-group" v-if="options.custom=='no'">
          <h4>3. Did you use $300 discount?</h4>
          <label class="radio-inline">
            <input type="radio" v-model="options.discount" value="y"> Yes
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="options.discount" value="n"> No
          </label>
        </div>
      </form>

      <p>
        Your payment URL to clients is
        <a v-if="options.custom=='no'" :href="link">{{link}}
        </a>
        <a v-if="options.custom=='link1'" :href="path+'#custom'">
          {{path}}#custom
        </a>
        <a v-if="options.custom=='link2'" :href="path+'#custom2'">
          {{path}}#custom2
        </a>
        <a v-if="options.custom=='link3'" :href="path+'#custom3'">
          {{path}}#custom3
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
        custom: 'no'
        months: '0'
        discount: 'n'
    computed:
      link: ->
        @path + '#' + (if @options.discount is 'y' then '10off' else '') + '?custom=' + @options.custom + '&months=' + @options.months + '&discount=' + @options.discount
      path: -> document.location.origin + document.location.pathname
</script>

<style scoped>
  a {
    color: red;
  }
</style>
