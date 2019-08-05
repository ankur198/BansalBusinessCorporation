<template>
  <div class="partners">
    <div class="page">
      <h1 class="mainheading">our proud partners...</h1>
      <!-- <div>
        <img
          v-for="(brand, index) in internal.images"
          :src="`/img/brands/${brand}`"
          :alt="brand"
          :key="index"
        />
      </div> -->
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
          :image="`/img/brands/${brand}`"
        ></vueper-slide>
      </vueper-slides>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { mapState } from "vuex";
export default {
  name: "partners",
  computed: mapState(["internal"]),
  components: { VueperSlides, VueperSlide }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .page {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   h1 {
//     align-self: flex-start;
//   }
// }

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
    font-family: Tahoma, Geneva, sans-serif;
  }

  &__title {
    font-size: 7em;
    opacity: 0.6;
    color: #fff;
  }
}
</style>
