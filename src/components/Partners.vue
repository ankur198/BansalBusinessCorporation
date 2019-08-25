<template>
  <div class="partners">
    <Stars />
    <div class="page">
      <div></div>
      <h1 class="mainheading">our global partners</h1>
      <div class="content">
        <div class="map">
          <Stars />
          <img src="img/map.png" alt="map" class="worldMap" />
          <div class="overlay">
            <img
              v-for="image in internal.images"
              :key="image.id"
              :src="`img/brands/blackBg/${image}`"
              :alt="image"
              class="brand"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Stars from "./stars";
export default {
  name: "partners",
  computed: mapState(["internal"]),
  components: { Stars },
  async mounted() {
    this.blinkAll();
    setInterval(this.calibrateOverlay,1000);
    // this.calibrateOverlay();
    window.addEventListener("resize", () => this.calibrateOverlay());
  },
  methods: {
    calibrateOverlay: function() {
      const map = document.querySelector(".worldMap");
      const over = document.querySelector(".overlay");
      over.style.height = `${map.clientHeight}px`;
      over.style.width = `${map.clientWidth}px`;
    },

    blinkAll: async function() {
      const allBrands = document.querySelectorAll(".brand");
      while (true) {
        for (let index = 0; index < allBrands.length; index++) {
          const brand = allBrands[index];
          await this.fadeBrand(brand);
        }
      }
    },

    fadeBrand: async function(element) {
      function sleep(ms) {
        return new Promise(resolve => setTimeout(() => resolve(), ms));
      }

      return new Promise(async resolve => {
        element.classList.add("active");
        await sleep(2000);
        element.classList.remove("active");
        resolve();
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section .page {
  grid-template-rows: 1fr auto 9fr 1fr;
  grid-gap: 20px;
  height: 100vh;

  .map {
    position: relative;
    max-width: 1500px;
    .worldMap {
      display: block;
      max-width: 100%;
      max-height: 100%;
      filter: alpha(opacity=0);
      opacity: 1;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      z-index: 10;

      .active {
        opacity: 1;
        animation: fade 2s 0s;
        animation-iteration-count: 1;
        height: auto;
        width: 400% !important;
      }

      .brand {
        height: auto;
        width: 100%;
        opacity: 0;
        // display: none;

        // japan
        &:nth-child(1) {
          grid-row: 6;
          grid-column: 11;
        }
        // japan
        &:nth-child(2) {
          grid-row: 6;
          grid-column: 11;
        }
        // japan
        &:nth-child(4) {
          grid-row: 6;
          grid-column: 11;
        }
        // japan
        &:nth-child(12) {
          grid-row: 6;
          grid-column: 11;
        }
        // korea
        &:nth-child(13) {
          grid-row: 6;
          grid-column: 11;
        }
        // japan
        &:nth-child(14) {
          grid-row: 6;
          grid-column: 11;
        }

        // usa
        &:nth-child(3) {
          grid-row: 5;
          grid-column: 1;
        }
        // usa
        &:nth-child(5) {
          grid-row: 5;
          grid-column: 1;
        }
        // usa
        &:nth-child(6) {
          grid-row: 5;
          grid-column: 1;
        }
        // usa
        &:nth-child(16) {
          grid-row: 5;
          grid-column: 1;
        }
        // usa
        &:nth-child(17) {
          grid-row: 5;
          grid-column: 1;
        }

        // india
        &:nth-child(7) {
          grid-row: 8;
          grid-column: 9;
        }
        // india
        &:nth-child(9) {
          grid-row: 8;
          grid-column: 9;
        }
        // india
        &:nth-child(15) {
          grid-row: 8;
          grid-column: 9;
        }
        // india
        &:nth-child(10) {
          grid-row: 8;
          grid-column: 9;
        }
        // india
        &:nth-child(11) {
          grid-row: 8;
          grid-column: 9;
        }

        // switzerland
        &:nth-child(8) {
          position: relative;
          grid-row: 5;
          grid-column: 6;
        }
      }

      @keyframes fade {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    }
  }

  .mainheading {
    align-self: flex-start;
    text-align: center;
    padding-bottom: 0;
    padding-top: 100px;
  }

  .content {
    padding: 0;
    display: grid;
    justify-content: center;
  }
}
</style>

<style>
.content,
.slides {
  overflow: hidden;
}
</style>
