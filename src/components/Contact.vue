<template>
  <div class="contact">
    <div class="page">
      <h1 class="mainheading">CONTACT</h1>
      <div class="content">
        <div class="left">
          <div>
            <h3>Location</h3>
            <p>
              39,Veer Savarkar Block,
              <br />Vikas Marg Delhi-110092
            </p>
          </div>
          <div class="Vline"></div>
          <div>
            <h3>Contact</h3>
            <p>
              bsc43@hotmail.com
              <br />bansal@bansalworld.in
              <br />011-49044230/ 8130869001
            </p>
          </div>
        </div>
        <div class="right">
          <h2>For more queries...</h2>
          <input type="text" name="name" id="name" placeholder="Name" required />
          <input type="email" name="email" id="email" placeholder="Email" required />
          <textarea name="msg" id="msg" placeholder="Your Text Here..." />
          <div>
            <input type="submit" value="Submit" class="btn" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "contact",
  computed: mapState(["brandName", "address", "contact", "email"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page {
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
}
.content {
  display: flex;
  flex-direction: column-reverse;
  // flex-direction: row-reverse;
}
.left {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  grid-gap: 10px;
  justify-content: flex-start;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.3em;
  text-align: left;
}
.right {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  font-family: "Candara";
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.08em;
  text-transform: capitalize;
  line-height: 1.3em;
  margin-bottom: 25px;
  overflow-wrap: break-word;
}
h2 {
  margin: 0;
  line-height: 1.2em;
  color: #081b33;
}
h3 {
  color: #e54a35;
  // margin: 10px;
}

input,
textarea {
  // margin-bottom: 10px;
  // width: 30em;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
}
// textarea {
//   height: 80px;
// }
.btn {
  // width: 10em;
  height: 3em;
  letter-spacing: 0.1em;
  border: 1px solid transparent;
  background-color: #081b33;
  color: white;
}
</style>
