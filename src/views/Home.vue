<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
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
        heading="we got more products..."
        class="section"
        id="productsPage2"
      />
      <Partners class="section black" id="partnersPage" />
      <Contact class="section" id="contactPage" />
    </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue";
import About from "@/components/About.vue";
import Products from "@/components/Products.vue";
import Partners from "@/components/Partners.vue";
import Contact from "@/components/Contact.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    LandingPage,
    About,
    Products,
    Partners,
    Contact
  },
  computed: mapState(["products"]),
  data() {
    return {
      options: {
        autoScrolling: true,
        controlArrows: true,
        scrollBar: true
        // licenseKey: "YOUR_KEY_HEERE",
        // menu: "#menu",
        // anchors: ["page1", "page2", "page3"],
        // sectionsColor: ["#41b883", "#ff5f45", "#0798ec"]
      }
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto|Roboto+Slab&display=swap");
$Montserrat: "Montserrat", sans-serif;
$Roboto: "Roboto", sans-serif;
$RobotoSlab: "Roboto Slab", serif;

.section {
  font-family: $RobotoSlab;
  color: black;
  font-size: 1.3em;
}
.fp-tableCell {
  display: grid;
  align-items: center;
}
.content {
  padding-left: 100px;
}
.mainheading {
  font-family: $RobotoSlab;
  font-size: 5rem;
  margin: 0;
  text-align: left;
  padding: 50px;
  margin: 10px 0 10px;
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

