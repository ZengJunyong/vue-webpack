<template>
    <div>
        <button @click="addCard()" type="button" class="btn btn-primary">
            Add Card Details
        </button>
    </div>

</template>

<script>
    import {addCard} from '../services'
    import {key} from '../config'

    export default {
        name: 'AddCard',
        data () {
            return {
                plan: null
            }
        },
        methods: {
            addCard(){
                var customerId = this.$route.query.customerId
                StripeCheckout.configure({
                    key,
                    name: 'Paktor Hong Kong Ltd',
                    description: 'Please add your card :-)',
                    image: 'https://www.heydouble.com/gokaikai/assets/images/logo2.png',
                    allowRememberMe: false,
                    panelLabel: 'Add',
                    token: function (token) {
                        addCard({
                            customerId: customerId,
                            tokenId: token.id
                        }).then((res) => {
                            alert('You added your card successfully!')
                        });
                    }
                }).open();
            }
        }
    }
</script>

<style scoped>
    .btn-primary {
        color: #fff;
        background-color: black;
        border-color: black;
        margin-bottom: 25px;
    }
</style>
