<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <LandingPage class="section" id="topPage" />
      <About class="section" id="aboutPage" />
      <Products
        :products="products[0]"
        heading="products"
        class="section black"
        id="productsPage"
      />
      <Products
        :products="products[1]"
        heading="we got more products"
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
// @import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap");
// @import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto|Roboto+Slab&display=swap");
@font-face {
  font-family: weblysleekuisb;
  src: url(../../public/weblysleekuisb.ttf);
}
// $Montserrat: "Montserrat", sans-serif;
// $Roboto: "Roboto", sans-serif;
// $RobotoSlab: "Roboto Slab", serif;
$WeblySleek: "weblysleekuisb";

.page {
  display: grid;
  grid-template-rows: 1fr 4fr !important;
  align-items: center;
  .content {
    align-self: flex-start;
  }
}

.section {
  font-family: $WeblySleek;
  color: black;
  font-size: 0.8em; //Bhoooooooo
}
.fp-tableCell {
  display: grid;
  align-items: center;
}
.content {
  padding: 30px;
  padding-left: 15px;
}
.mainheading {
  font-family: $WeblySleek;
  font-size: 2.5rem;
  margin: 0;
  text-align: left;
  padding: 30px;
  // padding-bottom: 0;
  padding-top: 60px;
  margin: 10px 0 0px;
  padding-left: 15px;
  font-weight: 500;
  text-transform: uppercase;
}
.black {
  color: white !important;
  background-color: black !important;
}
.Hline {
  border: 1px solid;
  height: 0px;
  border-radius: 50%;
}
.Vline {
  border: 1px solid;
  width: 0px;
  border-radius: 50%;
}
@media only screen and (min-width: 500px) {
  .section {
    font-size: 1em;
    .mainheading {
      margin: 10px 0 10px;
      padding-left: 20px;
      padding-top: 0;
    }
    .content {
      padding-left: 50px;
    }
  }
}
@media only screen and (min-width: 700px) {
  .section {
    font-size: 1.1em;
    .mainheading {
      margin: 10px 0 10px;
      padding-left: 30px;
    }
    .content {
      padding-left: 100px;
    }
  }
}
@media only screen and (min-width: 1000px) {
  .section {
    font-size: 1.3em;
  }
}
</style>

