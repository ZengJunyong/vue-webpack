<template>
  <div style="margin: 0px 0 50px 0;">
    <div class="title">Customized Pricing Package</div>
    <form>
      <div class="form-group">
        <h4>1. How many dates are you selling? ({{price[0].v}})</h4>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[0].v" value="3085"> 3 dates,	6 months validity
          </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[0].v" value="3845"> 5 dates,	12 months validity
          </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[0].v" value="4395"> 8 dates	18 months validity
          </label>
      </div>
      <div class="form-group">
        <h4>2. Age ({{price[1].v}})</h4>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[1].v" value="0">
          Default
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[1].v" value="200">
          if male below 26 OR
          if female above 35
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[1].v" value="-200">
          if female younger than 25
         </label>
      </div>
      <div class="form-group">
        <h4>3. Marital Status ({{price[2].v}})</h4>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[2].v" value="0">
          Default
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[2].v" value="200">
          if divorced
        </label>
      </div>
      <div class="form-group">
        <h4>4. Kids ({{price[3].v}})</h4>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[3].v" value="0">
          Default
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[3].v" value="200">
          if with kids
        </label>
      </div>
      <div class="form-group">
        <h4>5. Deal Breakers ({{price[4].v}})</h4>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[4].v" value="0">
          3 deal breakers
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[4].v" value="300">
          5 deal breakers
        </label>
      </div>
      <hr>
      Any other add on to package?

      <div class="form-group">
        <h4>6. Event Credits ({{price[5].v}})</h4>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[5].v" value="0">
          none
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[5].v" value="159">
          3 events credit
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[5].v" value="259">
          5 events credit
        </label>
      </div>
      <div class="form-group">
        <h4>7. Event Credits ({{price[6].v}})</h4>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[6].v" value="0">
          none
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[6].v" value="300">
          Coaching (pre/post date) 3 dates
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[6].v" value="500">
          Coaching (pre/post date) 5 dates
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[6].v" value="800">
          Coaching (pre/post date) 8 dates
        </label>
      </div>
      <div class="form-group">
        <h4>8. Fleek Workshop / Coaching ({{price[7].v}})</h4>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[7].v" value="0">
          none
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[7].v" value="300">
          Fleek 1 workshop
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[7].v" value="800">
          Fleek 3 workshop
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[7].v" value="1899">
          6 hrs coaching
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[7].v" value="2499">
          8 hrs coaching
        </label>
      </div>
      <div class="form-group">
        <h4>9. Profile Options ({{price[8].v}})</h4>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[8].v" value="0">
          none
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[8].v" value="300">
          Profile options for 3 dates
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[8].v" value="500">
          Profile options for 5 dates
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[8].v" value="800">
          Profile options for 8 dates
        </label>
      </div>
      <div class="form-group">
        <h4>10. Photo Options ({{price[9].v}})</h4>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[9].v" value="0">
          none
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[9].v" value="900">
          Photo options for 3 dates
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[9].v" value="1500">
          Photo options for 5 dates
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[9].v" value="2400">
          Photo options for 8 dates
        </label>
      </div>
      <div class="form-group">
        <h4>11. Dating Passport ({{price[10].v}})</h4>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[10].v" value="0">
          no
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[10].v" value="2000">
          yes
        </label>
      </div>
      <div class="form-group">
        <h4>12. How much discount are you using? ({{price[11].v}})</h4>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[11].v" value="0">
          No discount
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[11].v" value="-100">
          $100
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[11].v" value="-200">
          $200
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="price[11].v" value="-300">
          $300
        </label>
      </div>
      <div class="form-group">
        <h4>13. How many months of instalment do you want? ({{rate}})</h4>
        <label class="radio-inline">
          <input type="radio" v-model.number="rate" value="0.9">
          Full
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="rate" value="1.05">
          3 months
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="rate" value="1.1">
          6 months or 9 months
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="rate" value="1.15">
          12 months
        </label>
      </div>
    </form>
    <div class="price">
      Total: {{total}}
      <br>
      <button type="button" @click="generateLink" class="btn btn-primary">Get The Payment Link</button>
    </div>
  </div>
</template>

<script lang="coffee" type="text/coffeescript">
  module.exports =
    name: 'RM2'
    data: ->
      rate: 1
      price: [
        {v: 3085}
        {v: 0}
        {v: 0}
        {v: 0}
        {v: 0}
        {v: 0}
        {v: 0}
        {v: 0}
        {v: 0}
        {v: 0}
        {v: 0}
        {v: 0}
      ]
    computed:
      total: ->
        t = 0
        for p in @price
          t = t + p.v * 1
        (t * @rate).toFixed(0)
    methods:
      generateLink: ->
        if @rate is 1
          alert 'The last question: How many months of instalment do you want?\nYou should choose an option.'
          return
        if confirm 'All the options are OK?'
          console.log 'go'

</script>

<style scoped>
  .title {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    padding: 10px;
  }
  .price{
    border: 1px solid #80808059;
    font-size: 16px;
    position: fixed;
    top: 90px;
    right: 0;
    padding: 10px;
    width: 200px;
    text-align: center;
  }
</style>
