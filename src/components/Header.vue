<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Stock Trader</router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link
            to="/portfolio"
            active-class="active"
            tag="li"
            class="nav-item"
          >
            <a class="nav-link">Portfolio</a>
          </router-link>
          <router-link
            to="/stocks"
            active-class="active"
            tag="li"
            class="nav-item"
          >
            <a class="nav-link">Stocks</a>
          </router-link>
        </ul>
      </div>

      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a href="#" class="nav-link" @click="endDay">End Day</a>
        </li>

        <li class="nav-item dropdown d-flex">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Save & Load
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <strong class="nav-link">Funds: {{ funds | currency }}</strong>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    ...mapGetters(["funds", "stockPortfolio", "stocks"])
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.funds,
        stockPortfolio: this.stockPortfolio,
        stocks: this.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>
