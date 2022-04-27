import Vue from "vue"

import Popup from './components/Popup'

const app = new Vue({
  el: '#app',
  render: createElement => createElement(Popup)
})