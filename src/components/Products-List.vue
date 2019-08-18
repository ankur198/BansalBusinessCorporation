<template>
  <div class="productsList">
    <ul>
      <li
        v-for="(name, index) in getProductsName()"
        :key="index"
        :class="{ selected: isSelected(name) }"
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
  props: ["products", "selectedItem"],

  mounted: function() {
    this.itemSelected(Object.keys(this.products)[0]);
  },
  methods: {
    getProductsName: function() {
      if (this.products == null) {
        return [];
      }
      if (Array.isArray(this.products)) {
        return this.products;
      } else {
        return Object.keys(this.products);
      }
    },
    itemSelected: function(key) {
      if (this.products[key]) {
        this.$emit("itemSelected", this.products[key], key);
        // this.selectedItem = key;
      }
    },
    isSelected: function(name) {
      return this.selectedItem === name;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.selected {
  color: #e54a35;
}

.productsList {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.1em;
}

ul {
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    line-height: 1.8em;
    text-transform: capitalize;
    &:hover {
      color: rgb(229, 74, 53);
    }
  }
}
</style>
