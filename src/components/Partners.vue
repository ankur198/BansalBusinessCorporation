<template>
  <div class="partners">
    <Stars />
    <div class="page">
      <h1 class="mainheading">our proud partners</h1>
      <div class="content">
        <carousel
          class="slides"
          :autoplay="true"
          :autoplayTimeout="1000"
          :nav="false"
          :items="3"
          :dots="false"
          :autoheight="true"
          :autowidth="true"
          :loop="true"
          :center="true"
        >
          <img
            :src="`/img/brands/tinified/${brand}`"
            v-for="(brand, i) in internal.images"
            :key="i"
          />
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import { mapState } from "vuex";
import Stars from "./stars";
export default {
  name: "partners",
  computed: mapState(["internal"]),
  components: { Stars, carousel }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section .page {
  grid-template-rows: 2fr 4fr !important;
}
</style>

<style>
.content,
.slides {
  overflow: hidden;
}
</style>
