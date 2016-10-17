<template>
    <div class="hello">
        <h1 @click="debug">{{ msg }}</h1>
        <p>You stay at here <span class="count">{{count}}s</span></p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello Vue 2!',
                count: 0
            }
        },
        methods: {
            debug(){
                debugger
                console.log('debug');
            }
        },
        mounted(){
            console.log('mounted');
            setInterval(()=> this.count++, 1000)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: #42b983;
    }

    .count {
        color: yellow;
        background: black;
    }
</style>
