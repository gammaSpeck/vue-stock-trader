<template>
  <div class="col-sm-6 col-md-4 p-2">
    <div class="card">
      <div
        class="card-header bg-success bg-gradient"
        style="--bs-bg-opacity: .5;"
      >
        <span class="fw-bold text-success fs-5">
          {{ stock.name }}
        </span>
        <small>(Price: {{ stock.price }})</small>
      </div>

      <div class="card-body d-flex justify-content-between">
        <input
          v-model.number="quantity"
          type="number"
          class="form-control me-3"
          placeholder="Quantity"
          :class="{ 'border-danger': insufficientFunds }"
        />
        <button
          class="btn btn-success"
          @click="buyStock"
          :disabled="
            insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)
          "
        >
          {{ insufficientFunds ? "Insufficient funds" : "Buy" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    stock: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    ...mapGetters(["funds"]),
    insufficientFunds() {
      return this.stock.price * this.quantity > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      // console.log({ order });
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style lang="scss" scoped></style>
