<template>
  <div class="landingPage">
    <h1>{{ brandName }}</h1>
    <p>For all your computer hardware needs</p>
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
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Righteous&display=swap");
.landingPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: "Righteous", cursive;
  font-size: 2em;

  h1 {
    font-weight: 100;
    margin: 0;
  }
  p {
    margin: 0;
  }
}
</style>
