// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'babel-polyfill'
import ss from '../static/js/1'
import tt from '../static/js/2'
// Vue.use(ss)
// var ss ={
//   tt:121,
//   ss(){
//       alert(2);
//   }
// }
ss.ss();
let sd = new tt('asd');
console.log(sd.webName);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
