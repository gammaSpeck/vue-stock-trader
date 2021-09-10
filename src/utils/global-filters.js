export const setupGlobalFilters = Vue => {
  Vue.filter("currency", value => "$" + value.toLocaleString());
};
