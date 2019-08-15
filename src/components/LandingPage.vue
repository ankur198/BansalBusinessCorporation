<template>
  <div class="landingPage">
    <Stars />
    <div class="page">
      <div></div>
      <div class="content">
        <div class="mainheading">
          <h2>
            bansal <br />
            business <br />
            corporation
          </h2>
        </div>
        <div class="Vline"></div>
        <div class="backdrop">
          <h1>
            For All Your <br />
            Computer Hardware Needs.
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from "./../components/stars";
import { mapState } from "vuex";

export default {
  name: "LandingPage",
  props: {
    msg: String
  },
  computed: {
    ...mapState(["brandName"])
  },
  components: { Stars }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page {
  display: grid;
  grid-template-rows: 2fr 4fr 1fr !important;
  height: 100%;
  font-size: 3em;
  font-family: serif;
  // font-family: "Candara";
  background: black;

  .content {
    background: white;
    display: grid;
    padding: 0;
    grid-template-columns: 1fr 1px 1fr;
    padding: 20px;

    .mainheading {
      // font-family: "Candara";
      font-family: serif;

      text-align: left;

      padding: 0;

      display: flex;
      margin: 0;
      align-self: center;
      // align-items: flex-end;
      justify-content: center;
      text-transform: capitalize;

      h2 {
        margin: 0.5em;
        font-size: 3.5em;
        transition-duration: 0.5s;
        z-index: 5000;
        &:hover {
          color: #e54a36;
        }
      }
    }

    .backdrop {
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        text-transform: capitalize;
        margin: 20px;
        text-align: left;
        font-weight: 400;
        font-size: 1em;
        letter-spacing: 0.01em;
      }
    }
  }
}
@media only screen and (min-width: 500px) {
  .page {
    .content {
      padding-left: 0 !important;
      .mainheading {
        font-size: 0.3em;
      }
      .backdrop {
        h1 {
          padding-left: 50px;
          font-size: 1em;
        }
      }
    }
  }
}
@media only screen and (min-width: 850px) {
  .page {
    .backdrop {
      h1 {
        font-size: 1em;
      }
    }
  }
}
</style>
