<template>
    <div id="app">
        <nav class="navbar navbar-inverse">
            <div class="container" style="height: 75px;font-size: 14px;">
                <div class="navbar-header">
                    <a class="navbar-brand active" href="https://www.mydatesmith.com/#/home">
                        <img class="logo" src="./assets/logo.png">
                    </a>
                </div>
            </div>
        </nav>
        <div class="container">
            <!--<ul class="nav nav-pills" v-if="$route.query.custom=='no'">-->
                <!--<li :class="{active: $route.name == 'full'}" v-if="$route.query.discount!='y'">-->
                    <!--<router-link-->
                            <!--:to="{ name: 'full', query: { custom: $route.query.custom,discount:$route.query.discount,months:$route.query.months }}">-->
                        <!--FULL-->
                    <!--</router-link>-->
                <!--</li>-->
                <!--<li :class="{active: $route.name == '10off'}" v-if="$route.query.discount=='y'">-->
                    <!--<router-link-->
                            <!--:to="{ name: '10off', query: { custom: $route.query.custom,discount:$route.query.discount,months:$route.query.months }}">-->
                        <!--S$300 OFF-->
                    <!--</router-link>-->
                <!--</li>-->
            <!--</ul>-->
            <router-view></router-view>
        </div>
        <div class="copyright text-center">
            Copyright © Datesmith. All rights reserved.
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style scoped>
    .navbar {
        border-radius: 0px;
    }

    .copyright {
        background: black;
        color: white;
        padding: 40px;
    }
</style>