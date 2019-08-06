<template>
  <div class="about">
    <div class="page">
      <h1 class="mainheading">about</h1>
      <div class="content">
        <div class="left">
          <p>
            With the commencement of 21st century started the era of modern
            computers. With far sightedness and entrepreneurial skills, our
            founder Mr. Sanjay Bansal started Bansal Business Corporation in the
            year 2000 and started dealing in computer hardwares.
          </p>
          <p>
            With the advancement in technology, the company has been coping up
            rapidly and as a result of tireless efforts today we are proud to be
            one of the largest distributor in Delhi NCR. We are happy to serve
            our thousands of clients with our catalogue having a product range
            of over 1000 products.
          </p>
        </div>
        <div class="line"></div>
        <div class="right">
          <div>
            <i class="material-icons">assignment_late</i>
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
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page {
  display: grid;
}
.content {
  display: grid;
  grid-template-columns: 1.3fr 1px 1fr;
  grid-gap: 40px;
  text-align: left;
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
  flex-direction: column;
  justify-content: space-evenly;
}
.right i {
  font-size: 3.5em;
}
@media only screen and (max-width: 1000px)
{
  .mainheading{
    font-size: 1.5em;
    margin: 0;
    padding-top: 100px;
  }
  .content{
    display:unset;
    .left{
          p {
            display: unset;
            margin: 0;
            font-size: 1em;
            padding: 10px;
            width: 400px;
            }
      }
    }
  }
</style>