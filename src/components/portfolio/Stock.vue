<template>
  <div class="col-sm-6 col-md-4 p-2">
    <div class="card">
      <div
        class="card-header bg-primary bg-gradient"
        style="--bs-bg-opacity: .5;"
      >
        <span class="fw-bold text-primary fs-5">
          {{ stock.name }}
        </span>
        <small
          >(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small
        >
      </div>
      <div class="card-body d-flex justify-content-between">
        <input
          v-model.number="quantity"
          type="number"
          class="form-control me-3"
          placeholder="Quantity"
          :class="{ 'border-danger': insufficientQuantity }"
        />
        <button
          class="btn btn-primary"
          @click="sell"
          :disabled="
            insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)
          "
        >
          {{ insufficientQuantity ? "Not enough stocks" : "Sell" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PortfolioStock",
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
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions(["sellStock"]),
    sell() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.sellStock(order);
      this.quantity = 0;
    }
  }
};
</script>

<style lang="scss" scoped></style>
