import Vue from "vue";
import App from "./App.vue";

import { setupRouter } from "./router";
import { setupVueResource } from "./services/vue-resource";
import { setupGlobalFilters } from "./utils/global-filters";
import store from "./store";

setupVueResource(Vue);
setupGlobalFilters(Vue);

const router = setupRouter(Vue);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
