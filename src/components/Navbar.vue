<template>
  <div class="navbar">
    <div class="mobile title">
      <div class="left">
        <i class="material-icons" @click="showMenu">
          reorder
        </i>
      </div>
      <p v-if="internal.onTop == false" v-scroll-to="'#topPage'">
        {{ brandName }}
      </p>
    </div>
    <div class="desktop">
      <div class="left">
        <a :href="`tel:${contact}`" v-if="internal.onTop">{{ contact }}</a>
        <a href="#" v-scroll-to="'#topPage'" v-else>{{ brandName }}</a>
      </div>
      <div class="right">
        <a href="#" v-scroll-to="'#aboutPage'" id="about" @click="closeMenu"
          >about</a
        >
        <a
          href="#"
          v-scroll-to="'#productsPage'"
          id="products"
          @click="closeMenu"
          >products</a
        >
        <a
          href="#"
          v-scroll-to="'#partnersPage'"
          id="partners"
          @click="closeMenu"
          >partners</a
        >
        <a href="#" v-scroll-to="'#contactPage'" id="contact" @click="closeMenu"
          >contact</a
        >
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
  },
  methods: {
    showMenu() {
      let menu = document.querySelector(".desktop");
      let title = document.querySelector(".title");
      if (menu.style.display == "flex") {
        menu.style.display = "";
        menu.classList.remove("dark");
        title.classList.remove("dark");
      } else {
        menu.style.display = "flex";
        menu.classList.add("dark");
        title.classList.add("dark");
      }
    },
    closeMenu() {
      let menu = document.querySelector(".desktop");
      let title = document.querySelector(".title");
      if (menu.style.display == "flex") {
        menu.style.display = "";
        menu.classList.remove("dark");
        title.classList.remove("dark");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap");
.navbar {
  font-size: 1.5em;
  // color: rgb(229, 74, 53);
  color: rgb(229, 74, 53);
  font-family: "PT Sans Narrow", sans-serif;
  position: fixed;
  width: 100%;
  z-index: 5001;
  text-transform: capitalize;
  font-weight: bold;
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
    flex-direction: column;
    align-items: center;
    padding: 20px;
    padding-top: 10px;
    height: 100vh;
    z-index: 4000;

    .left {
      font-size: 1em;
      display: none;

      a:hover {
        transition-duration: 0.3s;
        color: darkgray;
      }
    }

    .right {
      display: flex;
      justify-content: space-evenly;
      font-size: 0.9em;
      flex-direction: column;
      align-content: space-between;
      height: 50%;
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
.dark {
  background: rgba(0, 0, 0, 0.952);
}

@media only screen and (min-width: 640px) {
  .navbar {
    .mobile {
      display: none;
    }
    .desktop {
      display: flex;
      flex-direction: row;
      height: unset;
      background: unset;

      .left {
        display: block;
      }
      .right {
        flex-direction: row;
      }
    }
  }
}
</style>
