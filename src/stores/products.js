import { defineStore } from "pinia";
// npm i axios
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    beautyProduct: [],
    fragrancesProduct: [],
    categoryProducts: [],
    categories: [
      {
        title: "Beauty",
        route: "beauty",
      },
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "Home Decoration",
        route: "home_decoration",
      },
      {
        title: "Kitchen Accessories",
        route: "kitchen_accessories",
      },
      {
        title: "Mens Shirts",
        route: "mens_shirts",
      },
      {
        title: "Motorcycle",
        route: "motorcycle",
      },
    ],
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
          this.beautyProduct = res.data.products.filter(
            (el) => el.category === "beauty"
          );
          this.fragrancesProduct = res.data.products.filter(
            (el) => el.category === "fragrances"
          );
        })
        .catch((err) => console.log(err));
    },

    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.categoryProducts = res.data));
    },
  },
});
