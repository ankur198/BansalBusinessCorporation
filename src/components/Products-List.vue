<template>
  <div class="productsList">
    <ul>
      <li
        v-for="(name, index) in getProductsName()"
        :key="index"
        @click="itemSelected(name)"
        @mouseover="itemSelected(name)"
      >
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "productsList",
  props: ["products"],
  methods: {
    getProductsName: function() {
      if (this.products == null) {
        return [];
      }
      if (Array.isArray(this.products)) {
        return this.products;
      }
      return Object.keys(this.products);
    },
    itemSelected: function(key) {
      if (this.products[key]) {
        this.$emit("itemSelected", this.products[key]);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.productsList {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: "PT Sans Narrow", sans-serif;
  letter-spacing: 0.1em;
}

ul {
  margin: 0;
  padding: 0;
  li {
    font-size: 1.5em;
    list-style: none;
    // padding-left: 30px;
    line-height: 1.4em;
    text-transform: capitalize;
    &:hover {
      color: darkgray;
    }
  }
}
</style>
