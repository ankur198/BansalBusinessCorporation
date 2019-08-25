<template>
  <div class="about">
    <div class="page">
      <div></div>
      <div class="body">
        <h1 class="mainheading">about</h1>
        <div class="content">
          <div class="left">
            <p>
              With the commencement of 21st century started the era of modern
              computers. With far sightedness and entrepreneurial skills, our
              founder Mr. Sanjay Bansal started Bansal Business Corporation in
              the year 2000 and started dealing in computer hardwares.
            </p>
            <p>
              With the advancement in technology, the company has been growing
              rapidly and as a result of tireless efforts today we are proud to
              be one of the largest distributors in Delhi NCR. We are happy to
              serve our thousands of clients with our catalogue having a product
              range of over 1000 products.
            </p>
          </div>
          <div class="line"></div>
          <div class="right">
            <div class="icon">
              <i class="material-icons">group</i>
              <ICountUp class="iCountUp" :endVal="num1" />
              <h4>Partners</h4>
            </div>
            <div class="icon">
              <i class="material-icons">devices_other</i>
              <ICountUp class="iCountUp" :endVal="num2" />
              <h4>Products</h4>
            </div>
            <div class="icon">
              <img src="img/handshake.svg" alt="handshake" />
              <ICountUp class="iCountUp" :endVal="num3" />
              <h4>Years of trust</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";

export default {
  name: "about",
  components: { ICountUp },
  data: function() {
    return {
      num1: 0,
      num2: 0,
      num3: 0
    };
  },
  methods: {
    checkHeight: function() {
      var isInViewport = function(elem) {
        var bounding = elem.getBoundingClientRect();
        var x = bounding.top;
        return x > 0 && x < window.innerHeight;
      };

      const item = document.querySelectorAll(".about .right")[0];

      if (isInViewport(item)) {
        this.num1 = 1000;
        this.num2 = 700;
        this.num3 = 20;
      } else {
        this.num1 = 0;
        this.num2 = 0;
        this.num3 = 0;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.checkHeight);
  }
};
</script>

<style lang="scss">
.iCountUp {
  &::after {
    content: "+";
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page {
}
.body {
  display: grid;
  grid-template-rows: auto auto;
}
.content {
  display: grid;
  grid-template-rows: auto 1px auto;
  grid-gap: 20px;
  text-align: left;
  padding-right: 10px;
}
.left {
  display: flex;
  justify-content: center;
  flex-direction: column;
  p {
    margin-top: 0;
    line-height: 1.3em;
  }
}
.right {
  display: flex;
  // flex-direction: column;
  flex-direction: row;
  justify-content: space-evenly;

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    font-size: 1.4em;
    font-weight: 800;

    img {
      width: 55px;
      height: auto;
    }
  }
  .icon > * {
    padding: 5px 10px;
  }
  h4 {
    margin: 0;
  }
  i {
    font-size: 2.5em;
  }
}
.line {
  border: 1px solid;
  height: 0px;
  border-radius: 50%;
}

@media only screen and (min-width: 500px) {
  .right {
    .icon {
      img {
        width: 65px;
      }
    }
  }
}
@media only screen and (min-width: 700px) {
  .right {
    .icon {
      img {
        width: 70px;
      }
    }
  }
}

@media only screen and (min-width: 950px) {
  .body {
    // grid-template-columns: auto auto;
    // grid-template-rows: 1fr;
  }
  .content {
    grid-template-columns: auto 1px auto;
    grid-template-rows: 1fr;
  }
  .right {
    flex-direction: column;
    .icon {
      flex-direction: row;
      * {
        padding-right: 10px;
      }
    }
  }
  .line {
    width: 0px;
    height: unset;
  }
}
</style>
