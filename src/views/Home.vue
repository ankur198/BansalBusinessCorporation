<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <LandingPage class="section" id="topPage" />
      <About class="section" id="aboutPage" />
      <Products
        :products="products[0]"
        :isMore="true"
        heading="products"
        class="section black"
        id="productsPage"
      />
      <Products :products="products[1]" class="section" id="productsPage2" />
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
  height: 100%;
  align-items: center;
  grid-template-rows: 1fr auto 1fr;

  .mainheading {
    font-family: "Times New Roman", Times, serif;
    font-size: 1.5rem;
    margin: 0;
    text-align: left;
    // padding-top: 60px;
    margin: 10px 0 0px;
    padding-left: 15px;
    font-weight: 900;
    text-transform: uppercase;
    align-self: flex-end;
  }

  .content {
    display: grid;
    align-self: flex-start;
    padding: 15px;
    padding-top: 10px;
    height: 100%;
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
    .page {
      .mainheading {
        font-size: 3em;
        margin: 10px 0 10px;
        padding: 30px;
        padding-left: 30px;
        padding-top: 0;
        padding-bottom: 0;
      }
      .content {
        padding-left: 50px;
      }
    }
  }
}
@media only screen and (min-width: 700px) {
  .section {
    font-size: 1.1em;
    .page {
      .mainheading {
        margin: 10px 0 10px;
        padding-left: 40px;
      }
      .content {
        padding-left: 100px;
        padding-right: 100px;
      }
    }
  }
}
@media only screen and (min-width: 1000px) {
  .section {
    font-size: 1.3em;
    .page {
      .mainheading {
        padding-left: 50px;
        padding-bottom: 50px;
      }
      .content {
        // padding: 0 150px;
      }
    }
  }
}
</style>
