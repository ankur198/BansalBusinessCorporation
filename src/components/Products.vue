<template>
  <div class="products" v-bind:class="isBlack">
    <div class="mainheading">
      {{ heading }}
    </div>
    <div class="allProducts">
      <div class="categories">
        <ul>
          <li
            v-for="(product, index) in products"
            :key="index"
            @click="setContent(index)"
            @mouseover="setContent(index)"
            class="level1"
          >
            {{ index }}
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="subcategory">
        <div class="heading">{{ key }}</div>
        <ul v-if="Array.isArray(subcategory)">
          <li class="level2" v-for="(sub, index) in subcategory" :key="index">
            {{ sub }}
          </li>
        </ul>
        <ul v-else-if="Object.keys(subcategory1).length == []">
          <li class="level2" v-for="(sub, index) in subcategory" :key="index">
            <div>{{ index }}</div>
            <ul>
              <li class="level3" v-for="(brand, index) in sub" :key="index">
                {{ brand }}
              </li>
            </ul>
          </li>
        </ul>
        <div class="twoRows" v-else>
          <ul>
            <li class="level2" v-for="(sub, index) in subcategory" :key="index">
              <div>{{ index }}</div>
              <ul>
                <li class="level3" v-for="(brand, index) in sub" :key="index">
                  {{ brand }}
                </li>
              </ul>
            </li>
          </ul>
          <div class="line"></div>
          <ul>
            <li
              class="level2"
              v-for="(sub, index) in subcategory1"
              :key="index"
            >
              <div>{{ index }}</div>
              <ul>
                <li class="level3" v-for="(brand, index) in sub" :key="index">
                  {{ brand }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "products",
  props: ["products", "heading", "isBlack"],
  data: function() {
    return {
      subcategory: [],
      subcategory1: [],
      key: ""
    };
  },
  methods: {
    setContent: function(key) {
      this.subcategory = this.products[key];
      this.subcategory1 = [];

      if (Array.isArray(this.subcategory) == false) {
        let keys = Object.keys(this.subcategory);
        if (keys.length > 4) {
          let list1 = {};
          let list2 = {};
          for (let index = 0; index < 4; index++) {
            list1[keys[index]] = this.subcategory[keys[index]];
          }
          for (let index = 4; index < keys.length; index++) {
            list2[keys[index]] = this.subcategory[keys[index]];
          }
          this.subcategory = list1;
          this.subcategory1 = list2;
        }
      }
      this.key = key;
    }
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
  display: flex;
  align-items: center;
  // flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: "PT Sans Narrow", sans-serif;
  letter-spacing: 0.1em;
}
.mainheading {
  position: relative;
  top: 100px;
  // display: inline-block;
  left: 40px;
  align-self: flex-start;
  // justify-self: flex-start;
  // padding-left: 30px;
  // padding-top: 60px;
  font-weight: bolder;
  white-space: nowrap;
  font-size: 2.5em;
}
.allProducts {
  display: flex;
  padding: 0px 0;
  text-align: left;
  width: 100%;
}
.twoRows {
  display: flex;
  flex-grow: 2;
  .level3 {
    padding: 0 20px;
  }
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
.categories {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 70px;
  li:hover {
    color: darkgray;
  }
}
.subcategory {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 40px;
  ul,
  li {
    padding: 0;
  }
  li {
    /* color: gray; */
    padding-left: 30px;
  }
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
  }
  .level1 {
    font-size: 2em;
  }
  .level2 {
    font-weight: bold;
    font-size: 1.3em;
  }
  .level3 {
    font-size: 1.1em;
    font-weight: 100;
  }
}
.heading {
  padding: 50px;
  text-transform: capitalize;
  font-size: 1.8em;
  font-weight: bold;
}
</style>
