<template>
    <h1 @click="http">click me to get stripe config</h1>
</template>

<script lang="coffee" type="text/coffeescript">
    module.exports =
        methods:
            http: ->
                this.$http.get('http://letsgaigai.com/stripeConfig')
                .then(
                    (res)->
                        console.log JSON.parse res.body
                    (res)->
                        console.log 'error', res
                )
</script>

<style lang="scss" scoped rel="stylesheet/scss">
</style>
