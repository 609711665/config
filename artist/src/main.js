// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


//netapi
import netapi from '@/netapi/netapi'
//console.log(netapi.bookListUrl)
//每个界面导入太麻烦
Vue.prototype.netapi = netapi

//vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


//zh
var a_change1;
var b_change2;

var a_change3;
var b_change4;
var a_change4;

var li_5;


var zhang_5;