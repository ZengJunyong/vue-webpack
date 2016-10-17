<template>
    <div class="dialect">
        <h1 @click="debug">{{msg}}</h1>
    </div>
</template>

<script lang="coffee">
    module.exports =
        data: ->
            msg : 'I like writing CoffeeScript and SASS in vue file!'
        methods:
            debug: ->
                debugger
                console.log 'coffee2'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
    .dialect {
        color: red;
    }
</style>
