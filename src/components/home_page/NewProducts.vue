<template>
  <div class="new-products pt-12">
    <div class="title px-5 d-flex align-center justify-space-between mb-5">
      <h2 style="font-weight: 900; font-size: 30px">New Products</h2>
      <a href="#" class="text-black" style="font-size: 14px">Shop All</a>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="7" v-if="!products.length">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="7" v-else>
          <Swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            class="pb-9 px-5"
            :autoplay="{ delay: 3000 }"
          >
            <swiper-slide v-for="item in products" :key="item.id">
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
                      class="bg-white quick-view-btn"
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
                  <span
                    class="text-red"
                    style="font-weight: 900; font-size: 17px"
                    >${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
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
                    density="compact"
                    variant="outlined"
                    class="px-7 pt-2 py-2 d-flex align-center justify-center mt-5"
                    style="
                      text-transform: none;
                      border-radius: 30px;
                      min-height: auto;
                    "
                    @click="
                      $router.push({
                        name: 'product_details',
                        params: { productId: item.id },
                      })
                    "
                    >Choose Options</v-btn
                  >
                </div>
              </v-card>
            </swiper-slide>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col
          cols="5"
          class="d-flex justify-center pa-0"
          style="height: 500px"
        >
          <div class="d-flex align-center" style="height: 100%">
            <img
              src="@/assets/images/new-pro.jpeg"
              style="width: 100%; height: 90%; object-fit: cover"
              alt=""
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components";
export default {
  inject: ["Emitter"],
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  data: () => ({
    showItem: {},
  }),
  props: {
    products: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },
};
</script>

<style lang="scss">
.new-products {
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
