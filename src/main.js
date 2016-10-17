// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Bar from 'components/Bar'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    router: new VueRouter({
        routes: [
            {path: '/foo', component: require('components/Foo')},
            {
                path: '/bar', component: Bar,
                children: [
                    {
                        path: 'zar',
                        component: require('components/Zar')
                    }
                ]
            }
        ]
    })
})