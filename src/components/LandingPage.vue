<template>
  <div class="landingPage">
    <div class="page">
      <h1>FOR ALL YOUR <br> COMPUTER <br>HARDWARE<br> NEEDS</h1>
    </div>
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
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // width: 100%;
  // height: 100vh;
  font-size: 2em;

              padding: 50px;
            margin-top: 110px;
            margin-bottom: 110px;
            background-color:rgb(6, 26, 49);

  h1 {
      font-family: calluna;
      font-weight: 400;
      font-style: normal;
      font-size: 70px;
      letter-spacing: .01em;
      line-height: 1em;
      text-transform: none;
      color: #f2f2f2;
      text-align: center;
  }
}
</style>
