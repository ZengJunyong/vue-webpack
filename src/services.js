import Vue from 'vue'
import {domain} from './config'

module.exports = {
  pay: payment => Vue.http.post(domain + 'stripe', payment)
}
