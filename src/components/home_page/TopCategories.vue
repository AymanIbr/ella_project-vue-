<template>
  <div class="top-category">
    <img
      src="@/assets/images/cyper-monday.png"
      class="w-100 mt-5"
      height="300px"
      alt=""
    />

    <div class="categories mt-10">
      <div class="title d-flex justify-center align-center px-5 mb-5">
        <h3
          class="text-center flex-grow-1"
          style="font-size: 20px; font-weight: 900"
        >
          Top Categories
        </h3>
        <a href="#" class="text-black">Shop All</a>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="2" v-for="item in categories" :key="item.title">
            <v-card elevation="0" class="text-center py-3 px-2">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="img-parent"
                  style="
                    overflow: hidden;
                    width: 100%;
                    height: 170px;
                    border-radius: 50%;
                  "
                >
                  <img
                    v-bind="props"
                    :src="item.image"
                    class="cursor-pointer"
                    :style="{
                      borderRadius: '50%',
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      transition: '0.4s all ease-in-out',
                      transform: isHovering ? 'scale(1.05)' : 'scale(1)',
                    }"
                    alt=""
                  />
                </div>
              </v-hover>

              <v-card-text>{{ item.title }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        title: "Electronics",
        image: "https://picsum.photos/200/300",
      },
      {
        title: "Electronics",
        image: "https://picsum.photos/200/300",
      },
      {
        title: "Electronics",
        image: "https://picsum.photos/200/300",
      },
      {
        title: "Electronics",
        image: "https://picsum.photos/200/300",
      },
      {
        title: "Electronics",
        image: "https://picsum.photos/200/300",
      },
      {
        title: "Electronics",
        image: "https://picsum.photos/200/300",
      },
      {
        title: "Electronics",
        image: "https://picsum.photos/200/300",
      },
      {
        title: "Electronics",
        image: "https://picsum.photos/200/300",
      },
      {
        title: "Electronics",
        image: "https://picsum.photos/200/300",
      },
      {
        title: "Electronics",
        image: "https://picsum.photos/200/300",
      },
      {
        title: "Electronics",
        image: "https://picsum.photos/200/300",
      },
      {
        title: "Electronics",
        image: "https://picsum.photos/200/300",
      },
    ],
  }),
};
</script>
