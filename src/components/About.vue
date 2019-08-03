<template>
  <div class="about">
    <div class="gridBody">
      <div class="gridHead">
        <h1>About</h1>
        <p>
          With the commencement of 21st century started the era of modern
          computers. With far sightedness and entrepreneurial skills, our
          founder Mr. Sanjay Bansal started Bansal Business Corporation in the
          year 2000 and started dealing in computer hardwares.
        </p>
        <p>
          With the advancement in technology, the company has been coping up
          rapidly and as a result of tireless efforts today we are proud to be
          one of the largest distributor in Delhi NCR. We are happy to serve our
          thousands of clients with our catalogue having a product range of over
          1000 products.
        </p>
      </div>
      <div class="line"></div>
      <div class="gridIcon">
        <div>
          <i class="material-icons">assignment_late</i>
          <div class="iCountUp">
            <ICountUp
              id="test"
              :delay="delay"
              :endVal="endVal"
              :options="options"
              @ready="onReady"
            />
          </div>
        </div>
        <div>
          <i class="material-icons">check_circle_outline</i>
        </div>
        <div>
          <i class="material-icons">dashboard</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
import { setTimeout, setInterval } from "timers";
export default {
  name: "about",
  components: {
    ICountUp
  },
  data() {
    return {
      delay: 1000,
      endVal: 120500,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      }
    };
  },
  methods: {
    onReady: function(instance, CountUp) {
      const that = this;
      // instance.update(that.endVal + 100);
      window.onscroll = function() {
        const scrollPosition =
          document.documentElement.scrollTop || document.body.scrollTop;
        const aboutHeight = document.querySelector("#aboutPage").scrollHeight;
        if (
          scrollPosition - 10 >= aboutHeight &&
          scrollPosition + 10 <= aboutHeight
        ) {
          console.log(scrollPosition);
        }
      };
    }
  },
  mounted() {
    // setInterval(() => {
    //   console.log("hello");
    // }, 2000);
    // const vm = this;
    // console.log("hello");
    // window.onscroll = function() {
    //   const scrollPosition =
    //     document.documentElement.scrollTop || document.body.scrollTop;
    //   console.log(scrollPosition);
    //   // if (scrollPosition == document.querySelector("#aboutPage").scrollHeight) {
    //   //   document.querySelector("#test").reset();
    //   //   document.querySelector("#test").start();
    //   // }
    // };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap");
.iCountUp {
  font-size: 2em;
  margin: 0;
  color: #4d63bc;
}
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: "PT Sans Narrow", sans-serif;
  letter-spacing: 0.1em;
  background-color: black;
}
.gridBody {
  display: grid;
  grid-template-columns: 1.3fr 1px 1fr;
  grid-gap: 20px;
  padding: 80px;
  color: lightgray;
  text-align: left;
}
h1 {
  font-size: 3em;
  color: white;
}
p {
  padding-left: 45px;
  line-height: 1.4em;
  font-size: 1.2em;
}
.line {
  border: 1px solid white;
  width: 0px;
  border-radius: 50%;
}
.gridHead {
  padding-right: 20px;
}
.gridIcon {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 20px;
}
.gridIcon i {
  font-size: 3.5em;
}
</style>
