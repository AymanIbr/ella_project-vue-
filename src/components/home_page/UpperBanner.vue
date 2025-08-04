<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="cont">
              <h3>
                <span>Huge Saving</span> on <br />
                UHD Televisions
              </h3>
              <p class="hint">Sale up to 50% off on all UHD TVs</p>
              <v-btn
                variant="outlined"
                class="custom-btn"
                density="comfortable"
              >
                Shop Now
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  .parent {
    height: 390px;
    background-image: url("../../assets/images/banner.png");
    background-size: cover;
    background-attachment: left top;
    .cont {
      color: white;
      padding: 40px 0 0 100px;
      h3 {
        font-size: 45px;
        font-weight: 900;
        span {
          color: rgb(77, 237, 181);
        }
      }

      .hint {
        margin: 20px 0;
        font-size: 18px;
      }
      .custom-btn {
        border-radius: 30px;
        text-transform: none;
        color: white;
        border-color: white;
        padding: 18px 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
