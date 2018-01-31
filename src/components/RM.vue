<template>

    <div style="margin: 30px 0 50px 0;">
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
          <label class="radio-inline">
            <input type="radio" v-model="options.custom" value="link4"> One-off Date
          </label>
        </div>
        <div class="form-group" v-if="options.custom=='no'">
          <h4>2. Which membership tier are you selling?</h4>
          <label class="radio-inline">
            <input type="radio" v-model="options.membership" value="classic"> Classic
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="options.membership" value="priority"> Priority
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="options.membership" value="elite"> Elite
          </label>
        </div>
        <div class="form-group" v-if="options.custom=='no'">
          <h4>3. What is the size of the dates package that you are selling?</h4>
          <label class="radio-inline">
            <input type="radio" v-model="options.packages" value="0"> 1 date
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="options.packages" value="1"> 3 dates
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="options.packages" value="2"> 5 dates
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="options.packages" value="3"> 10 dates
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="options.packages" value="all"> All
          </label>
        </div>
        <div class="form-group" v-if="options.custom=='no'">
          <h4>4. How many months of installment do you want to show?</h4>
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
          <h4>5. How much discount are you using?</h4>
          <label class="radio-inline">
            <input type="radio" v-model="options.discount" value="full"> No discount
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="options.discount" value="discount150"> MYR150
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="options.discount" value="discount300"> MYR300
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
        <a v-if="options.custom=='link4'" :href="path+'#custom4'">
          {{path}}#custom4
        </a>
      </p>
    </div>

</template>

<script lang="coffee" type="text/coffeescript">
  module.exports =
    name: 'RM'
    data: ->
      options:
        custom: 'no'
        membership: 'classic'
        packages: 'all'
        months: '12'
        discount: 'full'
    computed:
      link: ->
        @path + '#price?membership=' + @options.membership  + '&months=' + @options.months + '&packages=' + @options.packages + '&discount=' + @options.discount
      path: -> document.location.origin + document.location.pathname
</script>

<style scoped>
  a {
    color: red;
  }
</style>
