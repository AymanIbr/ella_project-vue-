<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <v-main
        :style="`padding-top: ${$route.name == 'check_out' ? '0px' : '150px'}`"
      >
        <slot />
      </v-main>
      <AppNav v-if="$route.name != 'check_out'" />
      <FixedNav v-if="$route.name != 'check_out'" />
      <AppFooter v-if="$route.name != 'check_out'" />
    </v-layout>
  </div>
</template>

<script>
import AppNav from "./AppNav.vue";
import AppFooter from "./AppFooter.vue";
import CartDrawer from "./CartDrawer.vue";
import FixedNav from "./FixedNav.vue";
export default {
  data: () => ({
    drawer: true,
  }),
  components: {
    AppNav,
    AppFooter,
    CartDrawer,
    FixedNav,
  },
};
</script>
