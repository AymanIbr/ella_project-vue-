<template>
  <div class="offer-top bg-grey-lighten-4 pb-9 pt-5">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4" style="height: 270px">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; border-radius: 10px; height: 100%"
            >
              <img
                src="@/assets/images/offer1.jpeg"
                :style="{
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.7s ease-in-out',
                  transform: isHovering ? 'scale(1.1)' : 'scale(1)',
                }"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" style="height: 270px">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; border-radius: 10px; height: 100%"
            >
              <img
                src="../../assets/images/offer2.jpeg"
                :style="{
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.7s ease-in-out',
                  transform: isHovering ? 'scale(1.1)' : 'scale(1)',
                  borderRadius: '10px',
                }"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" style="height: 270px">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; border-radius: 10px; height: 100%"
            >
              <img
                src="../../assets/images/offer3.webp"
                :style="{
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.7s ease-in-out',
                  transform: isHovering ? 'scale(1.1)' : 'scale(1)',
                  borderRadius: '10px',
                }"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col cols="12" sm="6" class="px-3 pr-sm-5">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pr-2"
              v-bind="props"
              style="overflow: hidden; border-radius: 10px"
            >
              <img
                src="../../assets/images/im1.jpeg"
                :style="{
                  width: '100%',
                  height: '550px',
                  cursor: 'pointer',
                  transition: 'transform 0.7s ease-in-out',
                  transform: isHovering ? 'scale(1.1)' : 'scale(1)',
                  borderRadius: '10px',
                }"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" class="px-3 pr-sm-5">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pl-2"
              v-bind="props"
              style="overflow: hidden; border-radius: 10px"
            >
              <img
                src="../../assets/images/im2.jpeg"
                :style="{
                  width: '100%',
                  height: '550px',
                  cursor: 'pointer',
                  transition: 'transform 0.7s ease-in-out',
                  transform: isHovering ? 'scale(1.1)' : 'scale(1)',
                  borderRadius: '10px',
                }"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
