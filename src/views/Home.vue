<template>
  <div class="home">
    <!-- <full-page ref="fullpage" id="fullpage"> -->
    <LandingPage class="section" id="topPage" />
    <About class="section" id="aboutPage" />
    <Products
      :products="products[0]"
      heading="Products"
      class="section black"
      id="productsPage"
    />
    <Products
      :products="products[1]"
      heading="More Products"
      class="section"
      id="productsPage2"
    />
    <Partners class="section black" id="partnersPage" />
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

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap");
$Montserrat: "Montserrat", sans-serif;
$Roboto: "Roboto", sans-serif;
* {
  box-sizing: border-box;
}
.section {
  padding: 50px;
  padding-top: 70px;
  font-family: $Montserrat;
  color: black;
  width: 100%;
  height: 100vh;
  font-size: 1.4em;
  line-height: 1.4em;
}
.content {
  padding-left: 100px;
}
.mainheading {
  font-family: $Roboto;
  font-size: 5rem;
  margin: 0;
  text-align: left;
  padding: 50px;
  margin: 80px 0 10px;
  font-weight: 500;
}
.black {
  color: white !important;
  background-color: black !important;
}
.line {
  border: 1px solid;
  width: 0px;
  border-radius: 50%;
}
</style>

