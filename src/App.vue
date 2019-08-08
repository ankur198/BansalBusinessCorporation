<template>
  <div id="app">
    <!-- <Navbar /> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import Navbar from "./components/Navbar";
export default {
  name: "App",
  computed: mapGetters(["navOnTop"]),
  mounted() {
    const vm = this;
    window.onscroll = function() {
      let res = true;
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (
        // scrollPosition + 10 >
        // document.querySelector("#aboutPage").scrollHeight
        scrollPosition > 50
      ) {
        res = false;
      } else res = true;

      if (this.navOnTop != res) {
        vm.changeNavHeading(res);
      }
    };
    this.changeNavHeading(true);
  },
  methods: { ...mapMutations(["changeNavHeading"]) },
  components: {
    Navbar
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
