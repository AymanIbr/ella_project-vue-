<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <FlashDeals :products="flashDeals" />
    <CyberBanner />
    <NewProduct :products="newProducts" />
    <QualityFeatures />
  </div>
</template>

<script>
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import FlashDeals from "@/components/home_page/productsSwiper.vue";
import CyberBanner from "@/components/home_page/TopCategories.vue";
import NewProduct from "@/components/home_page/NewProducts.vue";
import { productsModule } from "@/stores/products";
import QualityFeatures from "@/components/home_page/QualityFeatures.vue";
import { mapActions, mapState } from "pinia";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    FlashDeals,
    CyberBanner,
    NewProduct,
    QualityFeatures,
  },
  computed: {
    ...mapState(productsModule, ["flashDeals", "newProducts"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
