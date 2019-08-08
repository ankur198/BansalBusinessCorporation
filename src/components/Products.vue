<template>
  <div class="products">
    <Stars />
    <div class="page">
      <h1 class="mainheading">{{ heading }}</h1>
      <div class="content">
        <div>
          <ProductsList :products="products" @itemSelected="setSubCategory" />
        </div>
        <div class="Vline"></div>
        <div>
          <ProductsList
            :products="subcategory"
            @itemSelected="setSubSubCategory"
          />
        </div>
        <div v-if="isSubSubCategory()" class="Vline"></div>
        <div>
          <ProductsList :products="subsubcategory" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from "./Products-List.vue";
import Stars from "./stars";
export default {
  name: "products",
  props: ["products", "heading"],
  data: function() {
    return {
      subcategory: [],
      subsubcategory: []
    };
  },
  methods: {
    setSubCategory: function(data) {
      this.subcategory = data;
      if (Array.isArray(data)) {
        this.subsubcategory = [];
      } else {
        const fk = Object.keys(data)[0];
        this.subsubcategory = data[fk];
      }
    },
    setSubSubCategory: function(data) {
      this.subsubcategory = data;
    },
    isSubSubCategory: function() {
      return this.subsubcategory.length > 0;
    }
  },
  components: {
    ProductsList,
    Stars
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap");

.content {
  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px 1fr;
  text-align: left;
  // height: 100%;
  grid-gap: 5px;
}
@media only screen and (min-width: 500px) {
  .content {
    grid-gap: 10px;
  }
}
@media only screen and (min-width: 800px) {
  .content {
    grid-gap: 20px;
  }
}
</style>
