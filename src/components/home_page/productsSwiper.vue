<template>
  <div class="products-swiper pt-16">
    <div class="title mb-5 px-5 d-flex align-center justify-space-between">
      <h3
        style="font-weight: 900; font-size: 30px"
        :class="[`text-${titleColor}`]"
      >
        {{ title }}
      </h3>
      <a href="#" class="text-black" style="font-size: 14px">Shop All</a>
    </div>
    <v-container fluid v-if="!products.length">
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="25"
      class="pb-9 px-5"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
      :autoplay="{ delay: 3000 }"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <v-card elevation="0" class="pb-5 h-100 w-100">
          <v-hover v-slot="{ isHovering, props }">
            <div class="img-parent" style="height: 200px; overflow: hidden">
              <img
                :src="
                  showItem[item.title] ? showItem[item.title] : item.thumbnail
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
              `(${item.title}) ${item.description}`.length <= 57
                ? `(${item.title}) ${item.description}`
                : `(${item.title}) ${item.description}`.substring(0, 57)
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
                style="border-radius: 50%; border: 1px solid rgb(135, 135, 135)"
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
      <div class="swiper-next"></div>
      <div class="swiper-prev"></div>
    </Swiper>
    <!-- <v-container fluid>
      <v-row>
        <v-col cols="3" v-for="item in products" :key="item.id">
          <v-card elevation="0" class="pb-5">
            <img
              :src="
                showItem[item.title] ? showItem[item.title] : item.thumbnail
              "
              style="height: 200px"
              class="w-100"
              alt=""
            />
            <v-card-text class="pl-0 pb-0">
              ({{ item.title }})
              {{
                item.description.split(" ").length <= 8
                  ? item.description
                  : item.description.split(" ").slice(0, 8).join(" ") + "..."
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
            <v-btn-toggle v-model="showItem[item.title]">
              <v-btn
                size="x-small"
                v-for="(pic, i) in item.images"
                :key="i"
                :value="pic"
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
                class="pa-4 d-flex align-center justify-center mt-5"
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
    </v-container> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Navigation, Pagination, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components";
export default {
  data: () => ({
    showItem: {},
  }),
  props: {
    products: {
      type: Array,
    },
    title: {
      type: String,
    },
    titleColor: {
      type: String,
    },
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
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
.products-swiper {
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
}
</style>

<!-- 
  npm i swiper vue-awesome-swiper
-->
