<template>
  <div class="partners">
    <h1>Partners</h1>
    <div>
      <img
        v-for="(brand, index) in internal.images"
        :src="`/img/brands/${brand}`"
        :alt="brand"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "partners",
  computed: mapState(["internal"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap");
.partners {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  font-family: "PT Sans Narrow", sans-serif;
  letter-spacing: 0.1em;
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
  h1 {
    // font-family: "Gabriola";
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 3em;
    margin-top: 70px;
    margin-bottom: 50px;
  }
}
$size: 90px;
img {
  height: $size;
  width: $size;
}
</style>
