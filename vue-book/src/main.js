// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './vuex'  //全程:from './vuex/index.js'
// import 'http://at.alicdn.com/t/font_849112_rgknx5zkrmn.css'  不好使
//不支持引入线上的css
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入Vue Swiper插件
import 'swiper/dist/css/swiper.css'
//引入Vue Swiper Css文件
Vue.use(VueAwesomeSwiper);
import axios from 'axios'
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5ba6fcdaf1d0f1653d091bf8';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
