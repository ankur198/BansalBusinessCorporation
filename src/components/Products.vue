<template>
  <div class="products" v-bind:class="isBlack">
    <h1 class="mainheading">{{ heading }}</h1>
    <div class="content">
      <div>
        <ProductsList :products="products" @itemSelected="setSubCategory" />
      </div>
      <div class="line"></div>
      <div>
        <ProductsList
          :products="subcategory"
          @itemSelected="setSubSubCategory"
        />
      </div>
      <div v-if="subsubcategory.length > 0" class="line"></div>
      <div>
        <ProductsList :products="subsubcategory" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from "./Products-List.vue";
export default {
  name: "products",
  props: ["products", "heading", "isBlack"],
  data: function() {
    return {
      subcategory: [],
      subsubcategory: []
    };
  },
  methods: {
    setSubCategory: function(data) {
      console.log(data);
      this.subcategory = data;
      this.subsubcategory = [];
    },
    setSubSubCategory: function(data) {
      this.subsubcategory = data;
    },
    isSubSubCategory: function() {
      return this.subsubcategory.length > 0;
    }
  },
  components: {
    ProductsList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap");

.products {
  display: grid;
  grid-template-rows: auto 1fr;
}
.content {
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px 1fr;
  text-align: left;
  width: 100%;
  height: 100%;
  grid-gap: 20px;
}
</style>
