<template>
  <div class="contact">
    <div class="page">
      <div class="left">
        <h2>Contact</h2>
        <h3>Location</h3>
        <p>
          39,Veer Savarkar Block,<br />
          Vikas Marg Delhi-110092
        </p>
        <h3>Contact</h3>
        <p>
          bsc43@hotmail.com <br />bansal@bansalworld.in<br />
          011-49044230/ 8130869001
        </p>
      </div>
      <div class="right">
        <h2>For more queries...</h2>
        <p>Name*</p>
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder="First Name"
          required
        />
        <p>Email Address*</p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <p>How Can We Help?</p>
        <textarea
          name="msg"
          id="msg"
          cols="30"
          rows="10"
          placeholder="Your Text Here..."
        ></textarea
        ><br />
        <input type="submit" value="Submit" class="btn" />
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
  display: flex;
  /* grid-template-columns: 1fr 1fr; */
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  font-size: 1.3em;
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: "Candara";
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.3em;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Candara";
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.08em;
  text-transform: capitalize;
  line-height: 1.3em;
  p {
    margin: 20px 0 2px;
  }
}
h2 {
  margin: 25px;
  font-family: calluna;
  font-weight: 400;
  font-style: normal;
  line-height: 1.2em;
  letter-spacing: -0.01em;
  text-transform: none;
  color: #081b33;
}
h3 {
  color: #e54a35;
  margin: 10px;
}
p {
  margin: 2px;
  margin-bottom: 50px;
}
input,
textarea {
  margin-top: 10px;
  width: 30em;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 5px;
}
textarea {
  height: 80px;
}
.btn {
  width: 10em;
  height: 3em;
  letter-spacing: 0.1em;
  border: 1px solid transparent;
  background-color: #081b33;
  color: white;
}
@media only screen and (max-width: 1000px) {
  .page {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1em;
  }
  input,
  textarea {
    width: 300px;
  }
  p {
    margin: 0;
    margin-bottom: 10px;
  }
  h2 {
    margin: 0px;
    margin-top: 10px;
  }
  .right {
    p {
      margin: 5px;
    }
  }
}
</style>