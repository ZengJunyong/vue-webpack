<template>
    <div>
        <h1>PAYMENT PROCESS</h1>
        <div class="bar">
            <div class="wrap">
                <div class="number">
                    <span :class="{active: step >= 1}">1</span>
                    SELECT PACKAGE
                </div>
                <div class="number">
                    <span :class="{active: step >= 2}">2</span>
                    MEMBER DETAILS
                </div>
                <div class="number">
                    <span :class="{active: step >= 3}">3</span>
                    PAYMENT DETAILS
                </div>
                <div class="number">
                    <span :class="{active: step >= 4}">4</span>
                    PAYMENT COMPLETE
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Process',
        props: ['step']
    }
</script>

<style scoped>
    h1 {
        text-align: center;
        font-size: 28px;
        font-family: Brandon_bld;
    }

    .bar {
        background: #f2f2f2;
        text-align: center;
        height: 100px;
        padding-top: 20px;
    }

    .wrap {
        margin: auto;
        width: 600px;

    }

    .bar .number {
        width: 150px;
        float: left;
        font-family: Brandon_bld;
    }

    .number span{
        width: 40px;
        height: 40px;
        display: block;
        border-radius: 50%;
        font-size: 20px;
        padding-top: 7px;
        background: white;
        margin: auto;
        margin-bottom: 5px;
    }

    .number span.active{
        background: black;
        color: white;
    }
</style>