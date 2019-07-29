<template>
  <div class="landingPage">
    <h1>{{brandName}}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LandingPage",
  props: {
    msg: String
  },
  computed: {
    ...mapState(["brandName"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Righteous&display=swap");
.landingPage {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: "Righteous", cursive;
  font-size: 2em;
  letter-spacing: 0.1em;
}
</style>
