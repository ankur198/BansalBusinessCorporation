<template>
  <div class="partners">
    <Stars />
    <div class="page">
      <h1 class="mainheading">our proud partners</h1>
      <div class="content">
        <vueper-slides
          fade
          autoplay
          :speed="1000"
          :pauseOnHover="false"
          :slide-ratio="1 / 3"
          :visible-slides="3"
          :arrows="false"
          :dragging-distance="70"
          :touchable="false"
          :infinite="true"
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
import { mapState } from "vuex";
import Stars from "./stars";
export default {
  name: "partners",
  computed: mapState(["internal"]),
  components: { Stars }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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
