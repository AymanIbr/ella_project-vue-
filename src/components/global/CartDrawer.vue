<template>
  <div class="drawer">
    <v-navigation-drawer temporary location="right" v-model="drawer">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, odio?
      </p>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
  },
};
</script>
