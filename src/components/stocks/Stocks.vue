<template>
  <div class="row">
    <Stock v-for="s in stocks" :key="s.id" :stock="s" />
  </div>
</template>

<script>
import Stock from "./Stock.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Stock
  },
  computed: {
    ...mapGetters(["stocks"])
  },

  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style lang="scss" scoped></style>
