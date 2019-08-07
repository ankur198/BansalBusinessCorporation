<template>
  <div class="partners">
    <Stars />
    <div class="page">
      <h1 class="mainheading">our proud partners</h1>
      <div class="content">
        <vueper-slides
          autoplay
          :speed="1000"
          :pauseOnHover="false"
          :slide-ratio="1 / 4"
          :visible-slides="4"
          :arrows="false"
          :dragging-distance="70"
          :touchable="false"
        >
          <vueper-slide
            v-for="(brand, i) in internal.images"
            :key="i"
            :image="`/img/brands/tinified/${brand}`"
          ></vueper-slide>
        </vueper-slides>
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { mapState } from "vuex";
import Stars from "./stars";
export default {
  name: "partners",
  computed: mapState(["internal"]),
  components: { VueperSlides, VueperSlide, Stars }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.page {
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
}
.content {
  display: grid;
}

.vueperslides__bullets--outside {
  display: none;
}

.vueperslide {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  // margin: 20px;
  z-index: -1;
  // border-radius: 500px;
  // height: 500px;

  &__content-wrapper {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // font-family: Tahoma, Geneva, sans-serif;
  }

  &__title {
    // font-size: 7em;
    opacity: 0.6;
    color: #fff;
  }
}
</style>
