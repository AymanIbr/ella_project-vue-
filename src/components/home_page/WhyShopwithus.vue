<template>
  <div class="shop-with py-14 mt-9 mb-9">
    <div class="title">
      <h2 class="text-center mb-5"><span>Why Shop</span> With Us?</h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" class="px-1 mb-4 mb-lg-0">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="parent-image">
              <img
                src="@/assets/images/free-delivery-free-svgrepo-com.svg"
                alt=""
                class="w-50 h-50"
              />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; font-weight: 700"
            >
              Free Shipping First <br />
              Order</v-card-title
            >
            <v-card-text class="pb-0" style="font-size: 15px"
              >Lorem ipsum dolor sit amet.</v-card-text
            >
            <a href="#" style="color: white; font-weight: 700; font-size: 14px"
              >Learn More</a
            >
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="parent-image">
              <img
                src="@/assets/images/flash-thunder-svgrepo-com.svg"
                alt=""
                class="w-50 h-50"
              />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; font-weight: 700"
            >
              Weekly Flash Sale</v-card-title
            >
            <v-card-text class="pb-0" style="font-size: 15px"
              >Lorem ipsum dolor sit amet.</v-card-text
            >
            <a href="#" style="color: white; font-weight: 700; font-size: 14px"
              >Learn More</a
            >
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="parent-image">
              <img
                src="@/assets/images/weekly-calendar-monthly-calendar-svgrepo-com.svg"
                alt=""
                class="w-50 h-50"
              />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; font-weight: 700"
            >
              Anual Payment Discount</v-card-title
            >
            <v-card-text class="pb-0" style="font-size: 15px"
              >Lorem ipsum dolor sit amet.</v-card-text
            >
            <a href="#" style="color: white; font-weight: 700; font-size: 14px"
              >Learn More</a
            >
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="px-1 mb-4 mb-lg-0">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="parent-image">
              <img
                src="@/assets/images/banking-business-cash-svgrepo-com.svg"
                alt=""
                class="w-50 h-50"
              />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; font-weight: 700"
            >
              Cashback Reward Program</v-card-title
            >
            <v-card-text class="pb-0" style="font-size: 15px"
              >Lorem ipsum dolor sit amet.</v-card-text
            >
            <a href="#" style="color: white; font-weight: 700; font-size: 14px"
              >Learn More</a
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.shop-with {
  background-image: url(../../assets/images/bg.jpeg);
  background-repeat: repeat-x;
  background-size: cover;
  h2 {
    color: white;
    font-size: 30px;
    font-weight: 900;
    span {
      color: rgb(45 251 223);
    }
  }
}
</style>

<!-- https://www.svgrepo.com/vectors/cash/4 -->
