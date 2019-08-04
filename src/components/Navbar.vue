<template>
  <div class="navbar">
    <div class="left">
      <a :href="`tel:${contact}`" v-if="internal.onTop">{{ contact }}</a>
      <a href="#" v-scroll-to="'#topPage'" v-else>{{ brandName }}</a>
    </div>
    <div class="right">
      <!-- <a href="#" id="home">Home</a> -->
      <a href="#" v-scroll-to="'#aboutPage'" v-on:click="test" id="about"
        >About</a
      >
      <a href="#" v-scroll-to="'#productsPage'" id="products">Products</a>
      <a href="#" v-scroll-to="'#partnersPage'" id="partners">Partners</a>
      <a href="#" v-scroll-to="'#contactPage'" id="contact">Contact</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Navbar",
  props: ["onTop"],
  computed: {
    ...mapState(["brandName", "contact", "internal"])
  },
  methods: {
    test: () => {
      window.scrollTo(document.querySelector("#about"));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap");
* {
  color: rgb(229, 74, 53);
  font-size: 1.2em;
  font-family: "PT Sans Narrow", sans-serif;
}
.navbar {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-top: 10px;
  z-index: 5000;
}
.left {
  font-size: 1.2em;
}
.right {
  display: flex;
  justify-content: space-evenly;
  font-size: 0.9em;
}

.right :hover {
  transition-duration: 0.3s;
  color: darkgray;
}
a {
  margin-right: 20px;
  text-decoration: none;
}
a:last-child {
  padding-right: 20px;
}
</style>
