<template>
  <div class="product-details mt-16">
    <v-container fluid>
      <v-row>
        <v-col cols="7" class="pt-0">
          <img
            :src="tab ? tab : singleProduct.thumbnail"
            class="w-100"
            height="500"
            alt=""
            v-if="!loading"
          />
          <v-skeleton-loader
            v-if="loading"
            type="image, image, image"
          ></v-skeleton-loader>
          <v-tabs center-active height="220" class="mt-10" v-model="tab">
            <v-tab
              v-for="(img, i) in singleProduct.images"
              :key="i"
              class="mx-10"
              :value="img"
            >
              <img :src="img" width="100" height="200" alt="" />
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
              style="font-size: 19px; font-weight: bold"
              >({{ singleProduct.title }}) Sample -
              {{ singleProduct.category }} <br />
              For Sale</v-card-title
            >
            <div class="rating d-flex align-center" style="gap: 10px">
              <v-rating
                class="pt-0"
                size="x-small"
                color="yellow-darken-2"
                v-model="singleProduct.rating"
                half-increments
                readonly
                density="compact"
              ></v-rating>
              <span class="mt-1" style="font-size: 14px; color: rgb(96, 96, 96)"
                >Stock: {{ singleProduct.stock }}</span
              >
            </div>
            <v-card-text
              class="px-0"
              style="font-size: 14px; color: rgb(96, 96, 96)"
              >{{ singleProduct.description }}</v-card-text
            >
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 14px; color: rgb(96, 96, 96)"
              >Brand: {{ singleProduct.brand }}</v-card-text
            >
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 14px; color: rgb(96, 96, 96)"
              >Availability:
              {{
                singleProduct.stock > 0 ? "In Stock" : "Out Stock"
              }}</v-card-text
            >
            <v-card-text class="pl-0 pt-0">
              <del>${{ singleProduct.price }}</del> From
              <span style="font-weight: 900; font-size: 17px"
                >${{
                  Math.ceil(
                    singleProduct.price -
                      singleProduct.price *
                        (singleProduct.discountPercentage / 100)
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
            <v-card-actions class="mt-7 w-100 px-0">
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
                >Add To Cart</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components";
export default {
  computed: {
    ...mapState(productsModule, ["singleProduct"]),
  },

  methods: {
    ...mapActions(productsModule, ["getSingleProduct"]),
  },
  components: {
    VSkeletonLoader,
  },
  data: () => ({
    loading: false,
    tab: "",
    quantity: 1,
  }),
  async beforeMount() {
    this.loading = true;
    await this.getSingleProduct(this.$route.params.productId);
    this.loading = false;
  },
};
</script>
