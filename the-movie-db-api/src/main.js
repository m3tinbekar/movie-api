import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import axios from './client/resources/request'
import "chart.js";
import "hchs-vue-charts";


Vue.prototype.$axios = axios
Vue.config.productionTip = false;

Vue.use(window.VueCharts)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
