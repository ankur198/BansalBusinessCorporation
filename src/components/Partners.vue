<template>
  <div class="partners">
    <div class="page">
      <h1 class="mainheading">Partners</h1>
      <div>
        <img
          v-for="(brand, index) in internal.images"
          :src="`/img/brands/${brand}`"
          :alt="brand"
          :key="index"
        />
      </div>
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
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  h1 {
    align-self: flex-start;
  }
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;

    $size: 130px;
    img {
      height: $size;
      width: $size;
    }
  }
}
</style>
