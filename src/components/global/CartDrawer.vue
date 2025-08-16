<template>
  <div class="drawer">
    <v-navigation-drawer
      temporary
      location="right"
      width="370"
      v-model="drawer"
      class="pr-1"
    >
      <v-card elevation="0" class="px-0">
        <v-card-title
          class="pl-0 pr-2 d-flex align-center justify-space-between w-100"
          style="font-size: 17px; font-weight: bold"
          >Shopping Cart
          <v-icon @click="drawer = false">mdi-close</v-icon>
        </v-card-title>
        <v-card-text class="px-0 pt-0 pb-0" style="color: #6f6f6f"
          >{{ cartItems.length }} Item</v-card-text
        >
        <v-card-text
          class="px-0"
          style="color: #6f6f6f"
          v-if="!cartItems.length"
          >Free shipping for all orders over $10000
        </v-card-text>
        <v-card-text
          class="px-0 text-center"
          style="color: #6f6f6f"
          v-if="!cartItems.length"
          >Your cart is empty.
        </v-card-text>
        <div
          class="bar-parent mt-4 position-relative mr-5"
          v-if="cartItems.length"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#F44336"
            width="30"
            :style="` position: absolute;
              bottom: 50%;
              z-index: 1;
              left: calc(${
                parseInt((calcTotalPrice / 10000) * 100) <= 100
                  ? parseInt((calcTotalPrice / 10000) * 100)
                  : 100
              }% - 30px);
              transition: 0.2s all ease-in-out;`"
          >
            <path
              d="M17 8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8ZM17 10V13H21V12.715L18.9917 10H17Z"
            ></path>
          </svg>
          <v-progress-linear
            color="red"
            height="10"
            :model-value="
              parseInt((calcTotalPrice / 10000) * 100) <= 100
                ? parseInt((calcTotalPrice / 10000) * 100)
                : 100
            "
            striped
          ></v-progress-linear>
        </div>
        <v-card-text
          v-if="cartItems.length && 10000 - calcTotalPrice > 0"
          class="px-0 pt-3"
          style="color: #6f6f6f"
          >Only ${{ 10000 - calcTotalPrice }} away from Free
          Shipping</v-card-text
        >
        <v-card-text
          v-if="cartItems.length && 10000 - calcTotalPrice <= 0"
          class="px-0 pt-3"
          style="color: #6f6f6f"
          >Your order now is included Free Shipping</v-card-text
        >
        <v-card-actions v-if="!cartItems.length">
          <v-btn
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: rgb(199, 199, 199);
            "
            class="w-100"
            variant="outlined"
            density="compact"
            height="45"
            @click="drawer = false"
            >Continue Shopping</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card
        elevation="0"
        class="pa-0 mt-5 items-cart"
        v-if="cartItems.length"
        max-height="250"
        style="overflow-y: auto"
      >
        <v-container class="px-1">
          <v-row
            v-for="item in cartItems"
            :key="item.id"
            class="align-center mb-3"
          >
            <v-col cols="5">
              <img :src="item.thumbnail" class="w-100" alt="" />
            </v-col>
            <v-col cols="7">
              <v-card-title
                class="px-0"
                style="white-space: pre-wrap; font-size: 14px; line-height: 1.2"
                >{{ item.title }} Sample - {{ item.category }}</v-card-title
              >
              <v-card-text class="px-0 pb-0" style="color: #6f6f6f"
                >Category: {{ item.category }}</v-card-text
              >
              <v-card-text
                class="px-0 pb-0"
                style="font-size: 18px; font-weight: bold"
                >${{
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100)
                  ) * item.quantity
                }}</v-card-text
              >
              <div
                class="item-footer d-flex justify-space-between align-center"
              >
                <div
                  class="counter px-1"
                  style="
                    border: 1px solid rgb(201, 201, 201);
                    width: fit-content;
                    border-radius: 30px;
                  "
                >
                  <v-icon
                    @click="item.quantity > 1 ? item.quantity-- : false"
                    size="19"
                    color="#606060"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    class="text-center py-3"
                    min="1"
                    v-model="item.quantity"
                    color="#606060"
                    style="border: 0; outline: 0; width: 30px; font-size: 12px"
                  />
                  <v-icon @click="item.quantity++" size="19" color="#606060"
                    >mdi-plus</v-icon
                  >
                </div>
                <v-icon size="22" @click="deleteItem(item.id)"
                  >mdi-close</v-icon
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <v-card class="pa-0 mt-5" elevation="0" v-if="cartItems.length">
        <v-card-actions class="d-flex flex-column justify-center align-center">
          <v-btn
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: rgb(199, 199, 199);
            "
            variant="elevated"
            density="compact"
            height="45"
            elevation="0"
            class="w-100"
            color="blue"
            >Check Out</v-btn
          >
          <v-btn
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: rgb(199, 199, 199);
            "
            variant="outlined"
            density="compact"
            height="45"
            class="w-100"
            @click="$router.push({ name: 'cart_page' })"
            >View Cart</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { cartStore } from "@/stores/carts";
import { mapActions, mapState } from "pinia";
export default {
  computed: {
    ...mapState(cartStore, ["cartItems"]),
    calcTotalPrice() {
      let total = 0;
      this.cartItems.forEach((product) => {
        total +=
          Math.ceil(
            product.price - product.price * (product.discountPercentage / 100)
          ) * product.quantity;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(cartStore, ["getCartItems", "deleteItem"]),
  },
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
    this.getCartItems();
  },
};
</script>

<style lang="scss">
.items-cart {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(193, 193, 193);
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(227, 226, 226);
  }
}
</style>
