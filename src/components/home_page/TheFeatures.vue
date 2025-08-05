<template>
  <div class="features">
    <v-container>
      <v-row>
        <v-col>
          <div class="parent d-flex justify-center align-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="mr-5"
              style="width: 30px"
            >
              <path
                d="M17 8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8ZM17 10V13H21V12.715L18.9917 10H17Z"
              ></path>
            </svg>
            <span>Free Shipping & Returns</span>
          </div>
        </v-col>
        <v-col>
          <div class="parent d-flex justify-center align-center second">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="mr-5"
              style="width: 30px"
            >
              <path
                d="M3.00488 6.99972L11.4502 1.36952C11.7861 1.14559 12.2237 1.14559 12.5596 1.36952L21.0049 6.99972V20.9997C21.0049 21.552 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.552 3.00488 20.9997V6.99972ZM12.0049 10.9997C13.1095 10.9997 14.0049 10.1043 14.0049 8.99972C14.0049 7.89515 13.1095 6.99972 12.0049 6.99972C10.9003 6.99972 10.0049 7.89515 10.0049 8.99972C10.0049 10.1043 10.9003 10.9997 12.0049 10.9997Z"
              ></path>
            </svg>
            <span>Lowest Price Guarantee</span>
          </div>
        </v-col>
        <v-col>
          <div class="parent d-flex justify-center align-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="mr-5"
              style="width: 30px"
            >
              <path
                d="M12 19H14V6.00003L20.3939 8.74028C20.7616 8.89786 21 9.2594 21 9.65943V19H23V21H1V19H3V5.6499C3 5.25472 3.23273 4.89659 3.59386 4.73609L11.2969 1.31251C11.5493 1.20035 11.8448 1.314 11.9569 1.56634C11.9853 1.63027 12 1.69945 12 1.76941V19Z"
              ></path>
            </svg>
            <span>Longest Warranty Offer</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.features {
  .second {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      background-color: rgb(101, 101, 101);
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
    }
    &::after {
      content: "";
      position: absolute;
      background-color: rgb(101, 101, 101);
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
    }
  }
}
</style>
