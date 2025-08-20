<template>
  <div class="check-out">
    <v-container fluid class="ma-0 pa-0">
      <v-row>
        <v-col cols="12" class="order-1 order-md-0" md="6" lg="7">
          <v-card
            class="w-100 checkout-left"
            color="white"
            elevation="0"
            style="padding: 60px 40px 0px 120px"
          >
            <v-card-title class="font-weight-bold">new-ella-demo</v-card-title>
            <v-breadcrumbs
              :items="['Cart', 'Information']"
              style="font-size: 12px"
            >
              <template v-slot:divider>
                <v-icon color="#878484">mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
            <v-card-actions class="justify-space-between align-center">
              <v-btn
                color="#6200ff"
                variant="elevated"
                class="flex-grow-1"
                height="45"
              >
                <img
                  width="40"
                  src="@/assets/images/amazon-pay-svgrepo-com.svg"
                  alt=""
                />
              </v-btn>
              <v-btn
                color="black"
                variant="elevated"
                class="flex-grow-1"
                height="45"
              >
                <img
                  width="40"
                  style="filter: invert(100%)"
                  src="@/assets/images/google-pay-svgrepo-com.svg"
                  alt=""
                />
              </v-btn>
            </v-card-actions>
            <v-card-title
              class="mt-7"
              style="
                font-size: 14px;
                font-weight: 700;
                color: #484848;
                white-space: pre-wrap;
                line-height: 1.2;
              "
              >Shipping Address</v-card-title
            >
            <select
              name=""
              class="w-100 pa-3"
              placeholder="Country/Region"
              style="
                border: 1px solid rgb(184, 184, 184);
                border-radius: 3px;
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
            <div class="user_name d-flex align-center justify-center ga-1 mt-3">
              <input
                type="text"
                class="pa-3"
                placeholder="First Name"
                style="
                  border: 1px solid rgb(184, 184, 184);
                  border-radius: 3px;
                  font-size: 14px;
                  width: 100%;
                "
              />
              <input
                type="text"
                class="pa-3"
                placeholder="Last Name"
                style="
                  border: 1px solid rgb(184, 184, 184);
                  border-radius: 3px;
                  font-size: 14px;
                  width: 100%;
                "
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              class="pa-3 mt-3"
              style="
                border: 1px solid rgb(184, 184, 184);
                border-radius: 3px;
                font-size: 14px;
                width: 100%;
              "
            />
            <input
              type="text"
              placeholder="Apartment"
              class="pa-3 mt-3"
              style="
                border: 1px solid rgb(184, 184, 184);
                border-radius: 3px;
                font-size: 14px;
                width: 100%;
              "
            />

            <div
              class="city_parent d-flex align-center justify-center ga-1 mt-3"
            >
              <input
                type="text"
                placeholder="City"
                class="pa-3"
                style="
                  border: 1px solid rgb(184, 184, 184);
                  border-radius: 3px;
                  font-size: 14px;
                  width: 100%;
                "
              />
              <select
                name=""
                class="w-100 pa-3"
                style="
                  border: 1px solid rgb(184, 184, 184);
                  border-radius: 3px;
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
              <input
                type="text"
                placeholder="Postal Code"
                class="pa-3"
                style="
                  border: 1px solid rgb(184, 184, 184);
                  border-radius: 3px;
                  font-size: 14px;
                  width: 100%;
                "
              />
            </div>
            <v-card-actions class="justify-end mt-7 mb-7">
              <v-btn
                variant="elevated"
                color="#1677b0"
                height="45"
                width="150"
                @click="dialog = true"
                >Submit</v-btn
              >
            </v-card-actions>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text class="px-0" style="font-size: 10px; color: #777777"
              >All Right Reserved new-ella-demo</v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="5">
          <v-card
            class="checkout-right"
            color="grey-lighten-3"
            elevation="0"
            width="100%"
            height="100%"
            min-height="400px"
            style="padding: 60px 120px 0px 40px"
          >
            <v-card
              elevation="0"
              v-for="item in cartItems"
              :key="item.id"
              color="transparent"
              width="100%"
              class="d-flex align-center justify-space-between mb-3"
            >
              <v-badge :content="item.quantity" color="grey-darken-1">
                <img
                  :src="item.thumbnail"
                  width="50"
                  height="50"
                  style="
                    border-radius: 7px;
                    border: 1px solid rgb(186, 186, 186);
                  "
                  alt=""
                />
              </v-badge>
              <div class="title-parent flex-grow-1">
                <v-card-title
                  style="
                    font-size: 14px;
                    font-weight: 700;
                    color: #484848;
                    white-space: pre-wrap;
                    line-height: 1.2;
                  "
                  class="py-0"
                  >({{ item.title }}) Sample-{{ item.category }} for
                  sale</v-card-title
                >
                <v-card-text
                  style="font-size: 12px; color: #777777; white-space: pre-wrap"
                  >{{ item.category }}</v-card-text
                >
              </div>
              <v-card-text
                class="flex-grow-0"
                style="font-size: 12px; color: #4b4a4a"
                >${{
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100)
                  ) * item.quantity
                }}</v-card-text
              >
            </v-card>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text
              class="d-flex align-center justify-space-between font-weight-bold"
              ><span> TOTAL</span
              ><span>${{ calcTotalPrice }}</span></v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <OrderSuccess :popup="dialog" v-if="dialog" @close_popup="dialog = false" />
  </div>
</template>

<script>
import { cartStore } from "@/stores/carts";
import { mapState } from "pinia";
import OrderSuccess from "@/components/order_success/OrderSuccess.vue";
export default {
  data: () => ({
    countries: ["Egypt", "Lebanon", "American", "palestine", "Jordan"],
    dialog: false,
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
  components: {
    OrderSuccess,
  },
};
</script>

<style>
@media (max-width: 1280px) {
  .checkout-left {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
  .checkout-right {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
}
</style>
