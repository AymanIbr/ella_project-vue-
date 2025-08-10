<template>
  <div class="products-category mt-10">
    <h2 class="text-center">{{ $route.params.title }}</h2>

    <v-container>
      <v-card class="pt-5" elevation="0" :loading="loading">
        <v-row v-if="loading">
          <v-col cols="3" v-for="num in 4" :key="num">
            <v-skeleton-loader
              type="image, article, button"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-if="!loading">
          <v-col
            cols="3"
            v-for="item in categoryProducts.products"
            :key="item.id"
            class="px-5"
          >
            <v-card elevation="0" class="pb-5 h-100 w-100">
              <v-hover v-slot="{ isHovering, props }">
                <div class="img-parent" style="height: 160px; overflow: hidden">
                  <img
                    :src="
                      showItem[item.title]
                        ? showItem[item.title]
                        : item.thumbnail
                    "
                    :style="`height: 100%; transition: 0.5s all ease-in-out; scale: ${
                      isHovering ? 1.1 : 1
                    }; cursor:pointer`"
                    class="w-100"
                    alt=""
                    v-bind="props"
                  />
                </div>
              </v-hover>
              <v-card-text class="pl-0 pb-0">
                {{
                  `(${item.title}) ${item.description}`.length <= 40
                    ? `(${item.title}) ${item.description}`
                    : `(${item.title}) ${item.description}`.substring(0, 40)
                }}
              </v-card-text>

              <v-rating
                class="pt-0"
                size="x-small"
                color="yellow-darken-2"
                v-model="item.rating"
                half-increments
                readonly
                density="compact"
              ></v-rating>
              <v-card-text class="pl-0 pt-0">
                <del>${{ item.price }}</del> From
                <span class="text-red" style="font-weight: 900; font-size: 17px"
                  >${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100)
                    )
                  }}</span
                >
              </v-card-text>
              <v-btn-toggle
                v-model="showItem[item.title]"
                style="overflow: visible"
              >
                <v-btn
                  size="x-small"
                  v-for="(pic, i) in item.images"
                  :key="i"
                  :value="pic"
                  rounded="xl"
                  :repeal="false"
                >
                  <img
                    :src="pic"
                    width="30"
                    height="30"
                    style="
                      border-radius: 50%;
                      border: 1px solid rgb(135, 135, 135);
                    "
                    alt=""
                  />
                </v-btn>
              </v-btn-toggle>
              <div>
                <v-btn
                  @click="
                    $router.push({
                      name: 'product_details',
                      params: { productId: item.id },
                    })
                  "
                  density="compact"
                  variant="outlined"
                  class="px-7 pt-2 py-2 d-flex align-center justify-center mt-5"
                  style="
                    text-transform: none;
                    border-radius: 30px;
                    min-height: auto;
                  "
                  >Choose Options</v-btn
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components";

export default {
  data: () => ({
    showItem: {},
    loading: false,
  }),
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
  },
  components: {
    VSkeletonLoader,
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  watch: {
    async $route() {
      document.documentElement.scrollTo(0, 0);
      this.loading = true;
      await this.getProductsByCategory(this.$route.params.category);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.getProductsByCategory(this.$route.params.category);
    this.loading = false;
  },
};
</script>
