import Home from "../components/Home.vue";
import Portfolio from "../components/portfolio/Portfolio.vue";
import Stocks from "../components/stocks/Stocks.vue";
// import Stock from "../components/stocks/Stock.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/portfolio",
    component: Portfolio
  },
  {
    path: "/stocks",
    component: Stocks
    // children: [{ path: ":id", component: Stock }]
  },
  { path: "*", redirect: { name: "home" } }
];
