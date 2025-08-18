<template>
  <div class="nav-bar">
    <v-app-bar color="#02218f" height="fit-content" absolute>
      <!-- <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon> -->
      <v-container fluid>
        <v-row class="align-center">
          <v-col cols="3">
            <img
              src="@/assets/images/logo.png"
              style="width: 150px; height: 50px; cursor: pointer"
              alt=""
              @click="$router.push({ name: 'home' })"
            />
          </v-col>
          <v-col cols="5">
            <div class="position-relative">
              <input
                type="search"
                name="navSearch"
                id="navSearch"
                class="py-3 px-3 bg-white"
                placeholder="Search the Store"
                style="
                  width: 90%;
                  height: 40px;
                  border-radius: 30px;
                  border: 1px solid #ccc;
                  outline: none;
                  color: black;
                  caret-color: black;
                "
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="25"
                style="color: black; position: absolute; right: 65px; top: 8px"
              >
                <path
                  d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                ></path>
              </svg>
            </div>
          </v-col>
          <v-col cols="4" class="ps-8">
            <div class="parent d-flex justify-space-between align-center">
              <div class="available">
                <span>Available 24/10 at</span>
                <br />
                <strong>(059) 4-258-327</strong>
              </div>
              <div
                class="wishlists d-flex flex-column align-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style="width: 28px; fill: #ffb574"
                >
                  <path
                    d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"
                  ></path>
                </svg>
                <span style="color: #ffb574">Wishlists</span>
              </div>
              <div
                class="wishlists d-flex flex-column align-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style="width: 28px; fill: #ffb574"
                >
                  <path
                    d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.1597 16C10.1243 16 8.29182 16.8687 7.01276 18.2556C8.38039 19.3474 10.114 20 12 20C13.9695 20 15.7727 19.2883 17.1666 18.1081C15.8956 16.8074 14.1219 16 12.1597 16ZM12 4C7.58172 4 4 7.58172 4 12C4 13.8106 4.6015 15.4807 5.61557 16.8214C7.25639 15.0841 9.58144 14 12.1597 14C14.6441 14 16.8933 15.0066 18.5218 16.6342C19.4526 15.3267 20 13.7273 20 12C20 7.58172 16.4183 4 12 4ZM12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5ZM12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7Z"
                  ></path>
                </svg>
                <span style="color: #ffb574">Sing In</span>
              </div>
              <div
                class="wishlists d-flex flex-column align-center"
                :style="`cursor: pointer; pointer-events: ${
                  $route.name == 'cart_page' ? 'none' : 'unset'
                }`"
                @click="openCart"
              >
                <v-badge
                  location="top right"
                  :content="cartItems.length"
                  color="#205dc2"
                  offset-x="-14px"
                  v-if="cartItems.length"
                ></v-badge>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style="width: 28px; fill: #ffb574"
                >
                  <path
                    d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"
                  ></path>
                </svg>
                <span style="color: #ffb574">Cart</span>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col cols="7">
            <ul
              class="links d-flex justify-space-between"
              style="list-style: none"
            >
              <li v-for="category in categories" :key="category.title">
                <router-link
                  style="color: white; text-decoration: none"
                  :to="{
                    name: 'products_category',
                    query: { category: category.route, title: category.title },
                  }"
                  >{{ category.title }}</router-link
                >
              </li>
            </ul>
          </v-col>
          <v-col cols="2"></v-col>
          <v-col cols="3" class="d-flex justify-end align-center gap-4">
            <v-btn text class="white--text d-flex align-center gap-1">
              <v-icon size="28" color="#256ef1">mdi-help-circle</v-icon>
              Help
            </v-btn>

            <!-- Language Selector -->
            <div class="d-flex align-center ga-1" id="language-btn">
              <img
                :src="require(`@/assets/images/${selectedLang[0].flag}`)"
                :alt="selectedLang[0].lang + ' Flag'"
                style="width: 28px; height: 20px; object-fit: contain"
              />
              <span
                >{{ selectedLang[0].lang }} /
                {{ selectedLang[0].currency }}</span
              >
              <v-icon>mdi-chevron-down</v-icon>
              <v-menu activator="#language-btn">
                <v-list v-model:selected="selectedLang" mandatory>
                  <v-list-item
                    v-for="lang in langs"
                    :key="lang.lang"
                    :value="lang"
                  >
                    <v-list-item-title
                      class="d-flex align-center cursor-pointer"
                      style="gap: 8px"
                    >
                      <img
                        :src="require(`@/assets/images/${lang.flag}`)"
                        :alt="lang.lang + ' Flag'"
                        style="width: 28px; height: 20px; object-fit: contain"
                      />
                      <span style="line-height: 1; font-size: 14px">
                        {{ lang.lang }} / {{ lang.currency }}
                      </span>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { cartStore } from "@/stores/carts";
import { mapState } from "pinia";
export default {
  inject: ["Emitter"],
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
  computed: {
    ...mapState(productsModule, ["categories"]),
    ...mapState(cartStore, ["cartItems"]),
  },
  data: () => ({
    selectedLang: [
      {
        flag: "united-kingdom-uk-svgrepo-com.svg",
        currency: "USD",
        lang: "EN",
      },
    ],
    langs: [
      {
        flag: "united-kingdom-uk-svgrepo-com.svg",
        currency: "USD",
        lang: "EN",
      },
      {
        flag: "flag-for-flag-germany-svgrepo-com.svg",
        currency: "EURO",
        lang: "DE",
      },
    ],
  }),
};
</script>
