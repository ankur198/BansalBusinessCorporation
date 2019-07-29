import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import * as VueScrollTo from "vue-scrollto";
import VueFullPage from "vue-fullpage";

Vue.config.productionTip = false;

Vue.use(VueFullPage);
Vue.use(VueScrollTo);
new Vue({
  router,
  store,
  VueFullPage,
  render: h => h(App)
}).$mount("#app");
