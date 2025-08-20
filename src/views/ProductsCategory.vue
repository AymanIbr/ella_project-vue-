<template>
  <div class="products-category mt-10">
    <h2 class="text-center">{{ $route.query.title }}</h2>

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
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="item in categoryProducts.products"
            :key="item.id"
            class="px-10 px-sm-5 mt-8 mt-lg-0"
          >
            <v-card elevation="0" class="pb-5 h-100 w-100">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="img-parent position-relative"
                  style="height: 160px; overflow: hidden"
                >
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
                  <v-btn
                    density="compact"
                    height="35"
                    width="60"
                    variant="outlined"
                    class="bg-white quick-view-btn pl-10 pr-10"
                    style="
                      text-transform: none;
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translateX(-50%);
                      border-radius: 30px;
                      border: none;
                      font-size: 12px;
                      transition: 0.2 all ease-in-out;
                      opacity: 0;
                    "
                    @click="openQuickView(item)"
                    >Quick View</v-btn
                  >
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
  inject: ["Emitter"],
  data: () => ({
    showItem: {},
    loading: false,
  }),
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  components: {
    VSkeletonLoader,
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  watch: {
    async $route() {
      if (this.$route.name == "products_category") {
        document.documentElement.scrollTo(0, 0);
        this.loading = true;
        await this.getProductsByCategory(this.$route.query.category);
        this.loading = false;
      }
    },
  },
  async mounted() {
    if (!this.$route.query.category) {
      return this.$router.go(-1);
    }
    this.loading = true;
    await this.getProductsByCategory(this.$route.query.category);
    this.loading = false;
  },
};
</script>

<style lang="scss">
.products-category {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    border: 2px solid rgb(95, 95, 95);
    border-radius: 50%;
    background-color: white;
    top: 40%;
    &::after {
      font-size: 13px;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(53, 53, 53);
      font-weight: 900;
    }
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
  .img-parent:hover {
    .quick-view-btn {
      opacity: 1 !important;
    }
  }
}
</style>
