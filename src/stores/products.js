import { defineStore } from "pinia";
// npm i axios
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => (this.flashDeals = res.data.products.slice(0, 8)))
        .catch((err) => console.log(err));
      // .then((res) => console.log(res.data))
      // .catch((err) => console.log(err));
    },
  },
});
