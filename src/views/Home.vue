<template>
  <div class="home">
    <LandingPage />
    <About />
    <Products />
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue";
import About from "@/components/About.vue";
import  Products from "@/components/Products.vue";

export default {
  name: "home",
  components: {
    LandingPage,
    About,
    Products
  }
};
</script>
