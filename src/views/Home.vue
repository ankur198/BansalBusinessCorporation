<template>
  <div class="home">
    <!-- <full-page ref="fullpage" id="fullpage"> -->
    <LandingPage class="section" id="topPage" />
    <About class="section" id="aboutPage" />
    <Products
      :products="products[0]"
      heading="Products"
      class="section"
      id="productsPage"
    />
    <Products
      :products="products[1]"
      heading="More Products"
      class="section"
      isBlack="black"
      id="productsPage2"
    />
    <Partners id="partnersPage" />
    <Contact id="contactPage" />
    <!-- </full-page> -->
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue";
import About from "@/components/About.vue";
import Products from "@/components/Products.vue";
import Partners from "@/components/Partners.vue";
import Contact from "@/components/Contact.vue";
// import VueFullPage from "vue-fullpage";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    LandingPage,
    About,
    Products,
    Partners,
    Contact
    // VueFullPage
  },
  computed: mapState(["products"])
};
</script>
