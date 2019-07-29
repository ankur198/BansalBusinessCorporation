<template>
  <div class="products">
    <div class="gridBody">
      <div class="gridHead">
        <div>
          <h1>Products</h1>
          <ul>
            <li
              v-for="(product,index) in products"
              :key="index"
              @click="setContent(index)"
              @mouseover="setContent(index)"
            >{{index}}</li>
          </ul>
        </div>
      </div>
      <div class="line"></div>
      <div class="gridSubcategory">
        <div class="heading">{{key}}</div>
        <ul>
          <li v-for="(sub,index) in subcategory" :key="index">{{sub}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "products",
  computed: {
    ...mapState(["products"])
  },
  data: function() {
    return {
      subcategory: [],
      key: ""
    };
  },
  methods: {
    setContent: function(key) {
      this.subcategory = this.products[key];
      this.key = key;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap");
.products {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: "PT Sans Narrow", sans-serif;
  letter-spacing: 0.1em;
  color: black;
}
.gridBody {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  grid-gap: 20px;
  padding: 80px;
  /* color: lightslategray; */
  text-align: left;
  width: 100%;
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
}
.gridHead {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 70px;
}
.gridSubcategory {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 50px;
}
.gridSubcategory ul,
.gridSubcategory li {
  padding: 0;
}
.gridSubcategory li {
  /* color: gray; */
  padding-left: 30px;
}
ul {
  margin: 0;
}
li {
  list-style: none;
  font-size: 2em;
  padding-left: 30px;
  line-height: 1.4em;
  text-transform: capitalize;
}
.gridHead li:hover {
  color: darkgray;
}
.heading {
  padding-top: 50px;
  text-transform: capitalize;
  font-size: 1.8em;
}
</style>
