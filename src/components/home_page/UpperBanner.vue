<template>
  <div class="banner">
    <div class="parent">
      <img src="@/assets/images/banner.png" alt="" />
      <div class="cont">
        <h3>
          <span>Huge Saving</span> on <br />
          UHD Televisions
        </h3>
        <p class="hint">Sale up to 50% off on all UHD TVs</p>
        <v-btn variant="outlined" class="custom-btn" density="comfortable">
          Shop Now
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  .parent {
    height: 420px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(70%);
    }
    .cont {
      color: white;
      padding: 40px 0 0 100px;
      position: absolute;
      left: 40px;
      top: 40px;
      z-index: 10;
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
// Media Quires
@media (max-width: 990px) {
  .banner {
    .parent {
      .cont {
        h3 {
          font-size: 35px;
        }
        width: 400px;
        left: 0;
      }
    }
  }
}

@media (max-width: 767px) {
  .banner {
    .parent {
      height: 320px;
      .cont {
        padding-left: 20px;
        h3 {
          font-size: 30px;
        }
        width: 400px;
        left: 0;
        .hint {
          font-size: 14px;
        }
      }
    }
  }
}

@media (max-width: 580px) {
  .banner {
    .parent {
      height: 250px;
      .cont {
        padding-left: 20px;
        padding-top: 20px;
        h3 {
          font-size: 24px;
        }
        width: 80%;
        left: 0;
        .hint {
          font-size: 12px;
        }
        button {
          height: 25px !important;
          width: 130px !important;
          font-size: 11px !important;
        }
      }
    }
  }
}
</style>
