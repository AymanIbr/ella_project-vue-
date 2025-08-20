<template>
  <div class="menu-drawer">
    <v-navigation-drawer
      temporary
      :width="windowWidth <= 767 ? windowWidth / 2 : 370"
      v-model="drawer"
      class="px-5 pt-0"
    >
      <v-card elevation="0" class="px-0">
        <v-card-title
          class="pl-0 pr-2 d-flex align-center justify-space-between w-100"
          style="font-size: 17px; font-weight: bold"
          >Menu
          <v-icon @click="drawer = false">mdi-close</v-icon>
        </v-card-title>
        <v-list>
          <v-list-item
            class="px-0 cursor-pointer"
            v-for="cat in categories"
            :key="cat.route"
            @click="
              $router.push({
                name: 'products_category',
                query: { title: cat.title, category: cat.route },
              })
            "
          >
            <v-list-item-title class="nav-link">{{
              cat.title
            }}</v-list-item-title>
          </v-list-item>
          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" class="px-0">
                <v-list-item-title class="nav-link">Langues</v-list-item-title>
              </v-list-item>
            </template>
            <v-list-item>
              <v-list-item-title class="nav-link">English</v-list-item-title>
              <v-list-item-title class="nav-link">Dutch</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapState } from "pinia";
export default {
  data: () => ({
    drawer: false,
  }),
  props: {
    windowWidth: {
      type: Number,
    },
  },
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
  inject: ["Emitter"],
  mounted() {
    this.Emitter.on("openMenu", () => {
      this.drawer = true;
    });
  },
};
</script>

<style lang="scss">
// Media Quires

@media (max-width: 580px) {
  .nav-link {
    font-size: 12px;
  }
}
</style>
