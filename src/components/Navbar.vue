<template>
  <div class="navbar">
    <div class="mobile title">
      <div class="left">
        <i class="material-icons">
          reorder
        </i>
      </div>
      <p v-if="internal.onTop == false">{{ brandName }}</p>
    </div>
    <div class="desktop">
      <div class="left">
        <a :href="`tel:${contact}`" v-if="internal.onTop">{{ contact }}</a>
        <a href="#" v-scroll-to="'#topPage'" v-else>{{ brandName }}</a>
      </div>
      <div class="right">
        <a href="#" v-scroll-to="'#aboutPage'" id="about">about</a>
        <a href="#" v-scroll-to="'#productsPage'" id="products">products</a>
        <a href="#" v-scroll-to="'#partnersPage'" id="partners">partners</a>
        <a href="#" v-scroll-to="'#contactPage'" id="contact">contact</a>
      </div>
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap");
.navbar {
  font-size: 1.2em;
  color: rgb(229, 74, 53);
  font-family: "PT Sans Narrow", sans-serif;
  position: fixed;
  width: 100%;
  z-index: 5000;

  .mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px 0;
    p {
      margin: 0;
      font-size: 0.8em;
      font-weight: bold;
      justify-self: center;
    }
  }

  .desktop {
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    padding-top: 10px;

    .left {
      font-size: 1em;
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
      color: rgb(229, 74, 53);
    }
  }
}

@media only screen and (min-width: 640px) {
  .navbar {
    .mobile {
      display: none;
    }
    .desktop {
      display: flex;
    }
  }
}
</style>
