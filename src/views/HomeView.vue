<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <FlashDeals :products="flashDeals" />
  </div>
</template>

<script>
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import FlashDeals from "@/components/home_page/productsSwiper.vue";
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    FlashDeals,
  },
  computed: {
    ...mapState(productsModule, ["flashDeals"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
