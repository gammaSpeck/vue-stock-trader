import Vue from "vue";
export const loadData = ({ commit }) => {
  Vue.http
    .get("data.json")
    .then(res => res.json())
    .then(data => {
      if (!data) return;

      const { funds, stockPortfolio, stocks } = data;
      const portfolio = { funds, stockPortfolio };

      commit("SET_STOCKS", stocks);
      commit("SET_PORTFOLIO", portfolio);
    });
};
