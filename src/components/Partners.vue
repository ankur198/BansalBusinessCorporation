<template>
  <div class="partners">
    <Stars />
    <div class="page">
      <div></div>
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
      <h1 class="mainheading">partners</h1>
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
  grid-template-rows: 1fr 1.2fr 1.3fr;

  .mainheading {
    align-self: flex-start;
    text-align: center;
    font-size: 2em;
  }

  .content {
    padding: 0;
  }
}
</style>

<style>
.content,
.slides {
  overflow: hidden;
}
</style>
