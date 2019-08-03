<template>
  <div class="products" v-bind:class="isBlack">
    <div class="mainheading">
      {{ heading }}
    </div>
    <div class="allProducts">
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
.black {
  color: white;
  background-color: black;
}
.products {
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  height: 100vh;
}
.mainheading {
  font-weight: bolder;
  white-space: nowrap;
  font-size: 2.5em;
  text-align: left;
  padding: 20px;
}
.allProducts {
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px 1fr;
  padding: 0px 0;
  text-align: left;
  width: 100%;
  height: 100%;
  grid-gap: 20px;
}

h1 {
  /* color: white; */
  font-size: 3em;
  margin-bottom: 0;
}
.line {
  border: 1px solid;
  width: 0px;
  border-radius: 50%;
  background: black;
}
</style>
