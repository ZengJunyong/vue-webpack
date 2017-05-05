import Vue from 'vue'
import {domain} from './config'

module.exports = {
    pay: payment => Vue.http.post(domain + 'stripe', payment),
    addCard: obj => Vue.http.post(domain + 'addCard', obj)
}
