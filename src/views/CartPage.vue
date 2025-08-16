<template>
  <div class="cart-page">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="pb-0 px-0">
          <v-breadcrumbs :items="['Home', 'Your cart']" style="font-size: 13px">
            <template v-slot:divider>
              <v-icon color="#878484">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="12" class="pt-0">
          <v-card-title
            class="pl-0 pr-2 pb-0 d-flex align-center justify-space-between w-100"
            style="font-size: 35px; font-weight: bold"
            >Shopping Cart
          </v-card-title>
          <div
            class="bar-parent mt-4 position-relative mr-5"
            v-if="cartItems.length"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              :fill="
                parseInt((calcTotalPrice / 10000) * 100) < 50
                  ? '#F44336'
                  : parseInt((calcTotalPrice / 10000) * 100) > 50 &&
                    parseInt((calcTotalPrice / 10000) * 100) < 100
                  ? '#ff9800'
                  : '#4CAF50'
              "
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
              :color="
                parseInt((calcTotalPrice / 10000) * 100) < 50
                  ? 'red'
                  : parseInt((calcTotalPrice / 10000) * 100) > 50 &&
                    parseInt((calcTotalPrice / 10000) * 100) < 100
                  ? 'orange'
                  : 'green'
              "
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
            v-if="!cartItems.length"
            class="px-0 pt-3"
            style="color: #6f6f6f"
            >Free Shipping For All Orders $10000!</v-card-text
          >
          <v-card-text
            v-if="!cartItems.length"
            class="px-0 pt-3 text-center"
            style="color: #6f6f6f"
            >Your Cart is empty!</v-card-text
          >
          <v-card-actions class="px-0 justify-center" v-if="!cartItems.length">
            <v-btn
              style="
                text-transform: none;
                border-radius: 30px;
                border-color: rgb(199, 199, 199);
              "
              variant="outlined"
              density="compact"
              height="45"
              elevation="0"
              class="mx-0"
              width="300"
              @click="$router.push({ name: 'home' })"
              >Continue Shopping</v-btn
            >
          </v-card-actions>
          <v-card-text
            v-if="cartItems.length && 10000 - calcTotalPrice <= 0"
            class="px-0 pt-3"
            style="color: #6f6f6f"
            >Your order now is included Free Shipping</v-card-text
          >
        </v-col>
        <v-col cols="8" class="px-3" v-if="cartItems.length">
          <v-table class="w-100">
            <thead>
              <tr>
                <th style="font-size: 12px; font-weight: bold">PRODUCT</th>
                <th
                  class="text-center"
                  style="font-size: 12px; font-weight: bold"
                >
                  PRICE
                </th>
                <th
                  class="text-center"
                  style="font-size: 12px; font-weight: bold"
                >
                  QUANTITY
                </th>
                <th
                  class="text-center"
                  style="font-size: 12px; font-weight: bold"
                >
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartItems" :key="item.id">
                <td style="width: 55%">
                  <v-row class="align-center mb-3">
                    <v-col cols="5">
                      <img :src="item.thumbnail" class="w-100" alt="" />
                    </v-col>
                    <v-col cols="7">
                      <v-card-title
                        class="px-0"
                        style="
                          white-space: pre-wrap;
                          font-size: 14px;
                          line-height: 1.2;
                        "
                        >{{ item.title }} Sample -
                        {{ item.category }}</v-card-title
                      >
                      <v-card-text class="px-0 pb-0" style="color: #6f6f6f"
                        >Category: {{ item.category }}</v-card-text
                      >
                    </v-col>
                  </v-row>
                </td>
                <td class="text-center" style="width: 15%">
                  ${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100)
                    )
                  }}
                </td>

                <td class="text-center" style="width: 15%">
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
                      style="
                        border: 0;
                        outline: 0;
                        width: 30px;
                        font-size: 12px;
                      "
                    />
                    <v-icon @click="item.quantity++" size="19" color="#606060"
                      >mdi-plus</v-icon
                    >
                  </div>
                </td>
                <td class="text-center" style="width: 15%">
                  ${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100)
                    ) * item.quantity
                  }}
                </td>
                <td>
                  <v-icon size="22" @click="deleteItem(item.id)"
                    >mdi-close</v-icon
                  >
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-divider length="100%" color="black"></v-divider>
          <v-divider length="100%" color="black"></v-divider>
          <v-divider length="100%" color="black"></v-divider>
          <v-card-text
            v-if="cartItems.length"
            class="px-0 pt-3 d-flex align-center ga-1 mt-4"
            style="color: #6f6f6f"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width="20px"
              >
                <path
                  d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM16.4524 8.22183L11.5019 13.1709L8.67421 10.3431L7.25999 11.7574L11.5026 16L17.8666 9.63604L16.4524 8.22183Z"
                ></path>
              </svg>
            </span>
            <span> Secure Shopping Guarantee </span>
          </v-card-text>
        </v-col>
        <v-col cols="4" class="px-3" v-if="cartItems.length">
          <v-card elevation="0">
            <v-card-title style="font-size: 14px; font-weight: bold"
              >ORDER SUMMARY</v-card-title
            >
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text class="d-flex align-center justify-space-between">
              <span>Subtotal</span>
              <span style="font-weight: bold; font-size: 15px"
                >${{ calcTotalPrice }}</span
              >
            </v-card-text>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text>Get shipping estimate</v-card-text>
            <select
              name=""
              class="w-100 pa-3"
              style="
                border: 1px solid rgb(184, 184, 184);
                border-radius: 30px;
                font-size: 14px;
              "
            >
              <option
                :value="country"
                v-for="country in countries"
                :key="country"
              >
                {{ country }}
              </option>
            </select>
            <div class="states mt-4">
              <select
                name=""
                class="pa-3"
                style="
                  border: 1px solid rgb(184, 184, 184);
                  border-radius: 30px;
                  font-size: 14px;
                  width: 55%;
                  margin-right: 1%;
                "
              >
                <option
                  :value="country"
                  v-for="country in countries"
                  :key="country"
                >
                  {{ country }}
                </option>
              </select>
              <input
                type="text"
                class="pa-3"
                style="
                  border: 1px solid rgb(184, 184, 184);
                  border-radius: 30px;
                  font-size: 14px;
                  width: 43%;
                  margin-left: 1%;
                "
              />
            </div>
            <v-card-actions class="px-0 my-5">
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
                class="w-100 text-white"
                color="#3673e2"
                >Check Out</v-btn
              >
            </v-card-actions>
            <v-divider length="100%" color="black"></v-divider>

            <v-card-text class="d-flex align-center justify-space-between">
              <span>TOTAL</span>
              <span style="font-weight: bold; font-size: 15px"
                >${{ calcTotalPrice }}</span
              >
            </v-card-text>

            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>

            <v-card-actions
              class="px-0 my-5 d-flex flex-column"
              style="gap: 15px"
            >
              <v-btn
                style="
                  text-transform: none;
                  border-radius: 0px;
                  border-color: rgb(199, 199, 199);
                "
                variant="elevated"
                density="compact"
                height="45"
                elevation="0"
                class="w-100 mx-0"
                color="#3673e2"
                >Proceed To Check Out</v-btn
              >
              <v-btn
                style="
                  text-transform: none;
                  border-radius: 0px;
                  border-color: rgb(199, 199, 199);
                "
                variant="outlined"
                density="compact"
                height="45"
                elevation="0"
                class="w-100 mx-0"
                @click="$router.push({ name: 'home' })"
                >Continue Shopping</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { cartStore } from "@/stores/carts";
import { mapActions, mapState } from "pinia";
export default {
  data: () => ({
    countries: ["Egypt", "Lebanon", "American", "palestine", "Jordan"],
  }),
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
};
</script>
