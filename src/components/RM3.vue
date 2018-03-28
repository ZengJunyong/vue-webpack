<template>
  <div style="margin: 0px 0 50px 0;">
    <div class="title">
      What sessions does your client need?
      <p style="font-size: 14px;">1 session (each session is 2hr)</p>
    </div>
    <form>
      <div class="form-group">
        <h4>1. Image</h4>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Doll up for your date" v-model="options"> Doll up for your date
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Personal Grooming" v-model="options"> Personal Grooming
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Personal Shopping" v-model="options"> Personal Shopping
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Colour Talk" v-model="options"> Colour Talk
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Personal Capsule" v-model="options"> Personal Capsule
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Flatter my Figure" v-model="options"> Flatter my Figure
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Wardrobe Audit" v-model="options"> Wardrobe Audit
          </label>
        </div>
      </div>
      <div class="form-group">
        <h4>2. Date</h4>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Art of Conversation" v-model="options"> Art of Conversation
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Art of Conversation: Practical" v-model="options"> Art of Conversation: Practical
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Art of Socializing" v-model="options"> Art of Socializing
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Art of Socializing: Practical" v-model="options"> Art of Socializing: Practical
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Confidence Buildig" v-model="options"> Confidence Buildig
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Body Language" v-model="options"> Body Language
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Mock Date" v-model="options"> Mock Date
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Art of Flirting" v-model="options"> Art of Flirting
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Art of Texting" v-model="options"> Art of Texting
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Discover: Emotion" v-model="options"> Discover: Emotion
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Discover: Mindset" v-model="options"> Discover: Mindset
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Discover: Lifestyle" v-model="options"> Discover: Lifestyle
          </label>
        </div>

      </div>
      <div class="form-group">
        <h4>3. Any other add on to package?</h4>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Trial Date 300" v-model="options"> Trial Date $300
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="3 Dates 3085" v-model="options"> 3 Dates $3,085
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="5 Dates 3845" v-model="options"> 5 Dates $3,845
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="8 Dates 4395" v-model="options"> 8 Dates $4,395
          </label>
        </div>
        <hr>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Fleek 1 workshop 300" v-model="options"> Fleek 1 workshop $300
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Fleek 3 workshop 800" v-model="options"> Fleek 3 workshop $800
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="3 events credit 159" v-model="options"> 3 events credit $159
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="5 events credit 259" v-model="options"> 5 events credit $259
          </label>
        </div>
        <hr>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Coaching (pre/post date) 3 dates 300" v-model="options"> Coaching (pre/post date) 3 dates $300
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Coaching (pre/post date) 5 dates 500" v-model="options"> Coaching (pre/post date) 5 dates $500
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Coaching (pre/post date) 8 dates 800" v-model="options"> Coaching (pre/post date) 8 dates $800
          </label>
        </div>
        <hr>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Hair Cut (Ladies) 65" v-model="options"> Hair Cut (Ladies) $65
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Total hair makeover (hair perm or colour + cut + treatment) (Ladies) 200" v-model="options"> Total hair makeover (hair perm or colour + cut + treatment) (Ladies) $200
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="Image Styling (for special occasion) 150" v-model="options"> Image Styling (for special occasion) $150
          </label>
        </div>
        <hr>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="High Res Photo Session (5 Retouched Photos + Makeover) 120" v-model="options"> High Res Photo Session (5 Retouched Photos + Makeover) $120
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="High Res Photo Session (5 Retouched Photos + Makeover) 150" v-model="options"> High Res Photo Session (5 Retouched Photos + Makeover) $150
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="High Res Photo Session (5 Retouched Photos + Makeover) 90" v-model="options"> High Res Photo Session (5 Retouched Photos + Makeover) $90
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="High Res Photo Session (5 Retouched Photos + Makeover) 350" v-model="options"> High Res Photo Session (5 Retouched Photos + Makeover) $350
          </label>
        </div>
      </div>
      <div class="form-group">
        <h4>4. How much discount are you using?</h4>
        <label class="radio-inline">
          <input type="radio" v-model.number="discount" value="0">
          No discount
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="discount" value="100">
          $100
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="discount" value="200">
          $200
        </label>
        <label class="radio-inline">
          <input type="radio" v-model.number="discount" value="300">
          $300
        </label>
      </div>
      <div class="form-group">
        <h4>5. How many months of instalment do you want? ({{rate}})</h4>
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
      Total: {{price}}
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
      discount: 0
      options: []
    computed:
      hours: ->
        count = 0
        for o in @options
          count++ if isNaN((o.split ' ').pop()*1)
        count * 2
      costOfPackage: ->
        sum = 0
        for o in @options
          price = (o.split ' ').pop()*1
          if !isNaN(price)
            sum += price
        sum
      hourlyPay: ->
        hourlyPay = 0
        if @hours <= 6
          hourlyPay = 319
        else if @hours > 6 and @hours <= 12
          hourlyPay = 271
        else if @hours > 12 and @hours <= 18
          hourlyPay = 229
        else
          hourlyPay = 199
        hourlyPay
      price: ->
        t = (@hours * @hourlyPay + @costOfPackage - @discount * 1) * @rate
        t.toFixed(0)
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
