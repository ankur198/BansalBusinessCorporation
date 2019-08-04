<template>
  <div class="landingPage">
    <div class="page">
      <div class="mainheading">
        <h2>Bansal Business Corporation</h2>
      </div>
      <div class="backdrop">
        <h1>
          FOR ALL YOUR <br />
          COMPUTER <br />HARDWARE<br />
          NEEDS
        </h1>
      </div>
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
h2 {
  transition-duration: 0.5s;
  &:hover {
    color: #e54a36;
  }
}
.page {
  display: grid;
  grid-template-rows: 1fr 2fr;
  height: 100%;
  font-size: 2em;
  font-family: serif;

  .mainheading {
    text-align: center;
    font-size: 0.4em;
    padding: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 5001;
    :hover {
      color: #e54a36;
    }
  }

  .backdrop {
    background-color: rgb(6, 26, 49);
    display: flex;
    padding: 50px;
    padding-top: 110px;
    justify-content: center;
    margin-bottom: 50px;

    h1 {
      font-weight: 400;
      font-size: 70px;
      letter-spacing: 0.01em;
      line-height: 1em;
      color: #f2f2f2;
    }
  }
}
</style>
