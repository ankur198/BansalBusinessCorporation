<template>
  <div class="home">
    <full-page ref="fullpage" id="fullpage">
      <LandingPage class="section" id="topPage" />
      <About class="section" id="aboutPage" />
      <Products class="section" id="productsPage" />
    </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue";
import About from "@/components/About.vue";
import Products from "@/components/Products.vue";
import VueFullPage from "vue-fullpage";

export default {
  name: "home",
  components: {
    LandingPage,
    About,
    Products,
    VueFullPage
  }
};
</script>
