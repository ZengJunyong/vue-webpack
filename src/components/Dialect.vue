<template>
    <div class="dialect">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'I like writing CoffeeScript and SASS in vue file!',
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .dialect {

    }
</style>
