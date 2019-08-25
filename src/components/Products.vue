<template>
  <div class="products">
    <Stars />
    <div class="page">
      <div></div>
      <h1 class="mainheading">{{ heading }}</h1>
      <div class="content">
        <div>
          <ProductsList
            :products="products"
            :selectedItem="categorySelected"
            @itemSelected="setSubCategory"
          />
        </div>
        <div class="Vline"></div>
        <div>
          <ProductsList
            :products="subcategory"
            :selectedItem="subcategorySelected"
            @itemSelected="setSubSubCategory"
          />
        </div>
        <div v-if="isSubSubCategory()" class="Vline"></div>
        <div>
          <ProductsList :products="subsubcategory" />
        </div>
      </div>
      <a
        href="#"
        v-scroll-to="'#productsPage2'"
        v-if="isMore"
        class="moreItems"
      >
        We got more products
        <i class="material-icons">
          keyboard_arrow_down
        </i>
      </a>
      <a href="#" v-scroll-to="'#productsPage'" v-else class="moreItems white">
        Back to top
        <i class="material-icons">
          keyboard_arrow_up
        </i>
      </a>
    </div>
  </div>
</template>

<script>
import ProductsList from "./Products-List.vue";
import Stars from "./stars";
export default {
  name: "products",
  props: ["products", "heading", "isMore"],
  data: function() {
    return {
      categorySelected: "",
      subcategorySelected: "",
      subcategory: [],
      subsubcategory: []
    };
  },
  methods: {
    setSubCategory: function(data, key) {
      this.subcategory = data;
      if (Array.isArray(data)) {
        this.subsubcategory = [];
      } else {
        const fk = Object.keys(data)[0];
        this.subsubcategory = data[fk];

        this.subcategorySelected = fk;
      }
      this.categorySelected = key;
    },
    setSubSubCategory: function(data, key) {
      this.subsubcategory = data;
      this.subcategorySelected = key;
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

@keyframes smoothBounce {
  from {
    transform: translateY(-5px);
  }
  to {
    transform: translateY(5px);
  }
}

.Vline {
  margin: 30px 0;
}

.white {
  color: black !important;
}

.section .page {
  grid-template-rows: 1fr auto 5fr 1fr;

  .mainheading {
    padding-bottom: 0px !important;
    align-self: center;
  }

  .moreItems {
    color: white;
    text-decoration: none;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: end;

    i {
      padding-top: 5px;
      animation-name: smoothBounce;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
}

.content {
  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px 1fr;
  text-align: left;
  // height: 100%;
  grid-gap: 5px;
  margin: 10px 0;
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
