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
        <div class="Hline"></div>
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
  font-size: 3em;
  font-family: serif;
  background: black;

  .content {
    background: white;
    display: grid;
    padding: 0;
    grid-template-rows: 1fr 1px 1fr;
    padding: 20px;

    .mainheading {
      font-family: serif;
      text-align: left;
      padding: 0;
      display: flex;
      margin: 0;
      align-self: center;
      justify-content: flex-start;
      text-transform: capitalize;
      font-size: 0.7em;

      h2 {
        margin: 0.5em 0;
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
        margin: 0px;
        text-align: left;
        font-weight: 400;
        font-size: 1em;
        letter-spacing: 0.01em;
      }
    }
  }
}
@media only screen and (min-width: 600px) {
  .page {
    grid-template-rows: 2fr auto 1fr;
    .content {
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1px 1fr;
      padding-left: 0 !important;
      .Hline {
        height: 100%;
        width: 0%;
      }
      .mainheading {
        padding: 20px;
        font-size: 0.8em;
        justify-content: center;
      }
      .backdrop {
        h1 {
          padding-left: 50px;
          font-size: 0.8em;
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
