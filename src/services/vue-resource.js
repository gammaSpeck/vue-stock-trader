import VueResource from "vue-resource";

export const setupVueResource = Vue => {
  // HTTP SHIZ
  Vue.use(VueResource);
  // Main root URL
  Vue.http.options.root =
    "https://vuejs-stock-trader-dc99e-default-rtdb.asia-southeast1.firebasedatabase.app/";
  // Vue.http.interceptors.push(httpInterceptor);
};
