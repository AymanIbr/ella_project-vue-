<template>
  <div class="app-footer bg-grey-lighten-2">
    <v-footer :app="true" absolute>
      <v-container fluid class="px-0 pb-0">
        <v-row>
          <v-col cols="3">
            <v-card elevation="0" color="transparent">
              <v-card-title
                class="px-0"
                style="font-size: 14px; font-weight: 900"
                >SHOP</v-card-title
              >
              <v-card-text
                class="pt-0 pb-3 px-0"
                style="color: rgb(71, 71, 71)"
                v-for="category in categories"
                :key="category.title"
              >
                <router-link
                  style="color: rgb(71, 71, 71); text-decoration: none"
                  :to="{
                    name: 'products_category',
                    params: { category: category.route, title: category.title },
                  }"
                  >{{ category.title }}</router-link
                >
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card elevation="0" color="transparent">
              <v-card-title
                class="px-0"
                style="font-size: 14px; font-weight: 900"
                >FURTHER INFO</v-card-title
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: rgb(71, 71, 71)"
                >About</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: rgb(71, 71, 71)"
                >Customer Service</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: rgb(71, 71, 71)"
                >Reward Program</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: rgb(71, 71, 71)"
                >Shipping & Returns</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: rgb(71, 71, 71)"
                >Privacy Policy</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: rgb(71, 71, 71)"
                >Terms & Conditions</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: rgb(71, 71, 71)"
                >Blog</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card elevation="0" color="transparent">
              <v-card-title
                class="px-0"
                style="font-size: 14px; font-weight: 900"
                >Customer Service</v-card-title
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: rgb(71, 71, 71)"
                >Search Terms</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: rgb(71, 71, 71)"
                >Advance Search</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: rgb(71, 71, 71)"
                >Orders And Returns</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: rgb(71, 71, 71)"
                >Contact Us</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: rgb(71, 71, 71)"
                >Theme FAQs</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: rgb(71, 71, 71)"
                >Consultant</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: rgb(71, 71, 71)"
                >Store Location</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="3" class="pt-5">
            <v-card elevation="0" color="transparent">
              <img
                src="@/assets/images/footer.png"
                class="w-50 color-black mb-1"
                alt=""
                style="cursor: pointer"
                @click="$router.push({ name: 'home' })"
              />
              <v-card-text
                class="pt-0 pb-3 px-0 d-flex justify-center"
                style="color: rgb(71, 71, 71); gap: 16px"
              >
                <span class="pt-1"
                  ><img
                    src="@/assets/images/location-pin-svgrepo-com.svg"
                    style="
                      width: 15px;
                      filter: invert(40%) sepia(5%) saturate(0%)
                        hue-rotate(0deg) brightness(90%) contrast(90%);
                    "
                  />
                </span>
                <span
                  >685 Mark Street, san Francisco, CA 94105, US</span
                ></v-card-text
              >
              <v-card-text
                class="pt-0 pb-3 px-0 d-flex justify-between"
                style="color: rgb(71, 71, 71); gap: 16px"
              >
                <span>
                  <img
                    src="@/assets/images/phone-rounded-svgrepo-com.svg"
                    style="
                      width: 15px;
                      filter: invert(40%) sepia(5%) saturate(0%)
                        hue-rotate(0deg) brightness(90%) contrast(90%);
                    "
                  />
                </span>
                <span>Call us at (415) 555-555</span></v-card-text
              >
              <v-card-text
                class="pt-0 pb-3 px-0 d-flex justify-between"
                style="color: rgb(71, 71, 71); gap: 16px"
              >
                <span>
                  <img
                    src="@/assets/images/email-open-svgrepo-com.svg"
                    style="
                      width: 15px;
                      filter: invert(40%) sepia(5%) saturate(0%)
                        hue-rotate(0deg) brightness(90%) contrast(90%);
                    "
                  />
                </span>
                <span>example@gmail.com</span></v-card-text
              >
            </v-card>
            <div class="social d-flex" style="gap: 15px">
              <span class="facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="30px"
                >
                  <path
                    d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"
                  ></path>
                </svg>
              </span>
              <span class="instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="30px"
                >
                  <path
                    d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"
                  ></path>
                </svg>
              </span>
              <span class="snap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="30px"
                >
                  <path
                    d="M11.872 21.7645C10.6817 21.7645 9.88811 21.2027 9.17926 20.7079C8.67548 20.3512 8.20292 20.0124 7.64564 19.9188C7.37369 19.8697 7.09729 19.8519 6.84317 19.8519C6.3706 19.8519 5.99612 19.9232 5.72863 19.9767C5.55922 20.0079 5.41655 20.0347 5.3051 20.0347C5.18919 20.0347 5.04207 20.0035 4.98411 19.8073C4.93507 19.6468 4.90386 19.4953 4.87266 19.3481C4.79241 18.9781 4.72554 18.7507 4.58733 18.7285C3.0983 18.5011 2.20667 18.1578 2.0328 17.7521C2.01942 17.7075 2.00159 17.6629 2.00159 17.6273C1.99267 17.5025 2.08184 17.3999 2.20667 17.3776C3.38808 17.1815 4.44913 16.5529 5.34522 15.5186C6.0407 14.7161 6.37952 13.9404 6.41073 13.8557C6.41073 13.8467 6.41964 13.8467 6.41964 13.8467C6.58906 13.4946 6.62472 13.1959 6.52218 12.9507C6.33048 12.4915 5.69742 12.2953 5.26498 12.1616C5.15352 12.1303 5.0599 12.0947 4.97965 12.0679C4.60962 11.9208 3.9944 11.6087 4.07464 11.1763C4.1326 10.8642 4.54721 10.6413 4.88603 10.6413C4.97965 10.6413 5.0599 10.6547 5.12677 10.6904C5.50572 10.8642 5.849 10.9534 6.14324 10.9534C6.50881 10.9534 6.68268 10.8152 6.72726 10.7706C6.71834 10.5744 6.70497 10.3694 6.69159 10.1777C6.60243 8.81346 6.49989 7.11936 6.93234 6.14747C8.22967 3.24074 10.9848 3.00892 11.8007 3.00892C11.823 3.00892 12.1573 3 12.1573 3C12.1707 3 12.1885 3 12.2064 3C13.0222 3 15.7774 3.22737 17.0747 6.13856C17.5116 7.11044 17.4046 8.80901 17.3154 10.1687L17.3065 10.2356C17.2976 10.4184 17.2842 10.5923 17.2753 10.7706C17.3199 10.8063 17.4804 10.94 17.8103 10.9445C18.0956 10.9356 18.4077 10.8419 18.7643 10.6814C18.8758 10.6324 18.9917 10.6146 19.0764 10.6146C19.2012 10.6146 19.3261 10.6458 19.4331 10.6814H19.442C19.7407 10.7929 19.9368 11.0024 19.9368 11.2209C19.9458 11.426 19.7853 11.738 19.0229 12.0456C18.9427 12.0768 18.849 12.1125 18.7376 12.1393C18.3141 12.2686 17.681 12.4736 17.4804 12.9284C17.3689 13.1691 17.4135 13.4767 17.5829 13.8245C17.5829 13.8334 17.5918 13.8334 17.5918 13.8334C17.6409 13.9582 18.9293 16.8828 21.7959 17.3598C21.9207 17.3821 22.001 17.4846 22.001 17.6094C22.001 17.654 21.9921 17.6986 21.9698 17.7387C21.7959 18.1489 20.9132 18.4833 19.4152 18.7151C19.277 18.7374 19.2102 18.9647 19.1299 19.3348C19.0987 19.4863 19.063 19.6335 19.0185 19.794C18.9739 19.9411 18.8803 20.0213 18.7198 20.0213H18.6975C18.5949 20.0213 18.4567 20.0079 18.2739 19.9723C17.953 19.9054 17.6008 19.8564 17.1594 19.8564C16.8964 19.8564 16.6244 19.8787 16.3569 19.9232C15.8041 20.0124 15.3271 20.3557 14.8233 20.7123C14.1055 21.2027 13.3075 21.7645 12.1261 21.7645C12.1261 21.7645 11.9077 21.7645 11.872 21.7645Z"
                  ></path>
                </svg>
              </span>
              <span class="twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="30px"
                >
                  <path
                    d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"
                  ></path>
                </svg>
              </span>
              <span class="linked-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="30px"
                >
                  <path
                    d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"
                  ></path>
                </svg>
              </span>
            </div>
          </v-col>
        </v-row>
        <v-row
          class="d-flex align-center justify-space-between pt-7 bg-grey-lighten-2 pb-8"
          color="white"
        >
          <v-col cols="6">
            <p style="color: rgb(127, 127, 127); font-size: 14px">
              &copy; {{ new Date().getFullYear() }} Ella Deom. All Rights
              Reserved. Powered By Ayman
            </p>
          </v-col>

          <v-col cols="6" class="d-flex justify-end">
            <div class="master-card d-flex align-center" style="gap: 10px">
              <img
                src="@/assets/images/visa-4-logo-svgrepo-com.svg"
                style="width: 30px"
                alt=""
              />
              <img
                src="@/assets/images/master-card-svgrepo-com.svg"
                style="width: 30px"
                alt=""
              />
              <img
                src="@/assets/images/pay-pal-paypal-payments-platform-svgrepo-com.svg"
                style="width: 30px"
                alt=""
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
};
</script>
