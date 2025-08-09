<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsComponent
      :products="flashDeals"
      title="Flash Deals"
      titleColor="red"
    />
    <CyberBanner />
    <NewProduct :products="newProducts" />
    <QualityFeatures />
    <ProductsComponent
      :products="beautyProduct"
      title="Top Mobile Phons"
      titleColor="#404040"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="6" class="pr-5">
          <img src="@/assets/images/brand-left.png" class="w-100" alt="" />
        </v-col>
        <v-col cols="6" class="pl-5">
          <img src="@/assets/images/brand-right.png" class="w-100" alt="" />
        </v-col>
      </v-row>
    </v-container>
    <ProductsComponent
      :products="fragrancesProduct"
      title="Top Fragrances"
      titleColor="#404040"
    />
    <WhyShopwithus />
  </div>
</template>

<script>
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import ProductsComponent from "@/components/home_page/productsSwiper.vue";
import CyberBanner from "@/components/home_page/TopCategories.vue";
import NewProduct from "@/components/home_page/NewProducts.vue";
import WhyShopwithus from "@/components/home_page/WhyShopwithus.vue";
import { productsModule } from "@/stores/products";
import QualityFeatures from "@/components/home_page/QualityFeatures.vue";
import { mapActions, mapState } from "pinia";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsComponent,
    CyberBanner,
    NewProduct,
    QualityFeatures,
    WhyShopwithus,
  },
  computed: {
    ...mapState(productsModule, [
      "flashDeals",
      "newProducts",
      "beautyProduct",
      "fragrancesProduct",
    ]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
