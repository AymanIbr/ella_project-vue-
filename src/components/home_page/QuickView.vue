<template>
  <div class="quick-view mt-16">
    <v-dialog v-model="dialog" width="900" max-height="500">
      <v-icon
        style="
          position: absolute;
          top: -14px;
          right: -14px;
          background-color: black;
          padding: 13px;
          color: rgb(198, 198, 198);
          z-index: 10;
          font-size: 18px;
          cursor: pointer;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-card elevation="0" class="content-card">
        <v-container fluid class="bg-white pt-10">
          <v-row>
            <v-col cols="7" class="pt-0">
              <img
                :src="tab ? tab : product.thumbnail"
                class="w-100"
                height="400"
                alt=""
                v-if="!loading"
              />
              <v-skeleton-loader
                v-if="loading"
                type="image, image, image"
              ></v-skeleton-loader>
              <v-tabs center-active height="220" class="mt-10" v-model="tab">
                <v-tab
                  v-for="(img, i) in product.images"
                  :key="i"
                  class="mx-10"
                  :value="img"
                >
                  <img :src="img" width="70" height="100" alt="" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="5" class="pt-0 pl-5">
              <v-skeleton-loader
                v-if="loading"
                type="article, article, article"
              ></v-skeleton-loader>
              <v-card elevation="0" v-if="!loading">
                <v-card-title
                  class="px-0"
                  style="
                    font-size: 19px;
                    font-weight: bold;
                    white-space: pre-wrap;
                  "
                  >({{ product.title }}) Sample - {{ product.category }} For
                  Sale</v-card-title
                >
                <div class="rating d-flex align-center" style="gap: 10px">
                  <v-rating
                    class="pt-0"
                    size="x-small"
                    color="yellow-darken-2"
                    v-model="product.rating"
                    half-increments
                    readonly
                    density="compact"
                  ></v-rating>
                  <span
                    class="mt-1"
                    style="font-size: 14px; color: rgb(96, 96, 96)"
                    >Stock: {{ product.stock }}</span
                  >
                </div>
                <v-card-text
                  class="px-0"
                  style="font-size: 14px; color: rgb(96, 96, 96)"
                  >{{ product.description }}</v-card-text
                >
                <v-card-text
                  class="px-0 pt-0"
                  style="font-size: 14px; color: rgb(96, 96, 96)"
                  >Brand: {{ product.brand }}</v-card-text
                >
                <v-card-text
                  class="px-0 pt-0"
                  style="font-size: 14px; color: rgb(96, 96, 96)"
                  >Availability:
                  {{
                    product.stock > 0 ? "In Stock" : "Out Stock"
                  }}</v-card-text
                >
                <v-card-text class="pl-0 pt-0">
                  <del>${{ product.price }}</del> From
                  <span style="font-weight: 900; font-size: 17px"
                    >${{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )
                    }}</span
                  >
                </v-card-text>
                <v-card-text class="pl-0 pt-0">Quantity:</v-card-text>
                <div
                  class="counter px-1"
                  style="
                    border: 1px solid rgb(201, 201, 201);
                    width: fit-content;
                    border-radius: 30px;
                  "
                >
                  <v-icon @click="quantity > 1 ? quantity-- : false" size="22"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    class="text-center py-3"
                    min="1"
                    v-model="quantity"
                    style="border: 0; outline: 0; width: 60px; font-size: 13px"
                  />
                  <v-icon @click="quantity++" size="22">mdi-plus</v-icon>
                </div>
                <v-card-text class="pl-0">
                  Subtotal: ${{
                    Math.ceil(
                      product.price -
                        product.price * (product.discountPercentage / 100)
                    ) * quantity
                  }}
                </v-card-text>
                <v-card-actions class="mt-2 w-100 px-0">
                  <v-btn
                    variant="outlined"
                    class="text-white w-75"
                    height="50"
                    density="compact"
                    style="
                      background-color: rgb(34, 34, 34);
                      border-radius: 30px;
                      text-transform: none;
                    "
                    @click="addToCart(product)"
                    :loading="btnLoading"
                    >Add To Cart</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { VSkeletonLoader } from "vuetify/lib/components";
import { cartStore } from "@/stores/carts";
import { mapActions } from "pinia";
export default {
  methods: {
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.Emitter.emit("ShowMsg", item.title);
        this.dialog = false;
      }, 1000);
    },
  },
  inject: ["Emitter"],
  mounted() {
    this.Emitter.on("openQuickView", (data) => {
      this.loading = true;
      this.product = data;
      this.dialog = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  },
  components: {
    VSkeletonLoader,
  },
  data: () => ({
    loading: false,
    tab: "",
    quantity: 1,
    dialog: false,
    product: "",
    btnLoading: false,
  }),
};
</script>

<style lang="scss">
.content-card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(177, 177, 177);
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(200, 200, 200);
  }
}
</style>
