<template>
  <div class="landingPage">
    <div class="page">
      <div class="mainheading">
        <h2>bansal business corporation</h2>
      </div>
      <div class="backdrop">
        <h1>
          FOR ALL YOUR
          <br />COMPUTER
          <br />HARDWARE
          <br />NEEDS
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
  z-index: 5001;
  &:hover {
    color: #e54a36;
  }
}
.page {
  display: grid;
  grid-template-rows: 3fr 10fr 3fr;
  height: 100%;
  font-size: 3em;
  font-family: serif;

  .mainheading {
    font-family: "Candara";
    text-align: center;
    font-size: 0.3em;
    padding: 0;
    display: flex;
    margin: 0;
    align-self: flex-end;
    align-items: flex-end;
    justify-content: center;
    :hover {
      color: #e54a36;
    }
  }

  .backdrop {
    background-color: rgb(6, 26, 49);
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-weight: 400;
      font-size: 1em;
      letter-spacing: 0.01em;
      line-height: 1em;
      color: #f2f2f2;
    }
  }
}
@media only screen and (min-width: 500px) {
  .page {
    .mainheading {
      font-size: 0.4em;
    }
    .backdrop {
      h1 {
        font-size: 1.2em;
      }
    }
  }
}
@media only screen and (min-width: 850px) {
  .page {
    .backdrop {
      h1 {
        font-size: 1.3em;
      }
    }
  }
}
</style>
