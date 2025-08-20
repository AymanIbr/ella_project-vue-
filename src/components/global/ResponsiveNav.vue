<template>
  <div class="res-nav">
    <v-app-bar>
      <v-container>
        <v-row class="align-center">
          <v-col cols="4" class="d-flex align-center">
            <v-app-bar-nav-icon @click="openMenu()"></v-app-bar-nav-icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              style="color: black"
              class="ml-5"
            >
              <path
                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
              ></path>
            </svg>
          </v-col>
          <v-col cols="4" class="text-center">
            <img
              src="@/assets/images/footer.png"
              class="color-black mb-1"
              alt=""
              style="cursor: pointer; width: 130px"
              @click="$router.push({ name: 'home' })"
            />
          </v-col>
          <v-col cols="4" class="d-flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="25"
            >
              <path
                d="M4.99509 3C3.89262 3 3 3.89323 3 4.99509V19.0049C3 20.1074 3.89323 21 4.99509 21H19.0049C20.1074 21 21 20.1068 21 19.0049V4.99509C21 3.89262 20.1068 3 19.0049 3H4.99509ZM5 19V5H19V19H5ZM12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 15C10.8954 15 10 15.8954 10 17H8C8 14.7909 9.79086 13 12 13C14.2091 13 16 14.7909 16 17H14C14 15.8954 13.1046 15 12 15Z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="25"
              class="ml-7 cursor-pointer"
              @click="openCart()"
            >
              <path
                d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"
              ></path>
            </svg>
            <v-badge
              location="top right"
              :content="cartItems.length"
              color="black"
              v-if="cartItems.length"
            ></v-badge>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { cartStore } from "@/stores/carts";
import { mapState } from "pinia";
export default {
  inject: ["Emitter"],
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
    openMenu() {
      this.Emitter.emit("openMenu");
    },
  },
  computed: {
    ...mapState(cartStore, ["cartItems"]),
  },
};
</script>
