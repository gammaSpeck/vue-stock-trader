import Vue from "vue";
import VueX from "vuex";

import portfolio from "./modules/portfolio";
import stocks from "./modules/stocks";

import * as actions from "./actions";

Vue.use(VueX);

export default new VueX.Store({
  actions,
  modules: {
    stocks,
    portfolio
  }
});
