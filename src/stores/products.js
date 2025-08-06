import { defineStore } from "pinia";
// npm i axios
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          console.log(res.data.products);
          this.newProducts = res.data.products.filter(
            (el) => el.category === "furniture"
          );
          this.flashDeals = res.data.products.slice(0, 8);
        })
        .catch((err) => console.log(err));
    },
  },
});
