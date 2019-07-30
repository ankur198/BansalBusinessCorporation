<template>
  <div class="contact">
    <div class="gridContent">
      <div class="gridDetails">
        <h1>Contact Details</h1>
        <b>{{ brandName }}</b>
        <address>
          {{ address }}
        </address>
        <br />
        <a href="#">{{ email }}</a>
      </div>
      <div class="gridForm">
        Full Name:<br /><input type="text" name="name" id="name" /><br /><br />
        Phone Number:<br /><input
          type="number"
          name="phn"
          id="phn"
        /><br /><br />
        Email Address:<br /><input
          type="email"
          name="email"
          id="email"
        /><br /><br />
        Message:<br /><textarea name="msg" id="msd"></textarea><br /><br />
        <input type="submit" value="SEND MESSAGE" id="btn" />
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
<style scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap");
.contact {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: "PT Sans Narrow", sans-serif;
  letter-spacing: 0.1em;
  background-color: black;
  color: white;
}
.gridContent {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
.gridDetails {
  padding: 50px;
}
.gridForm {
  padding: 40px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5em;
}
h1 {
  font-family: "Gabriola";
  font-size: 3.5em;
  margin: 0px;
}
b {
  font-family: "Gabriola";
  font-size: 1.8em;
}
address {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
}
a {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #fc6c7d;
  font-size: 20px;
}
input,
textarea {
  margin-top: 5px;
  width: 30em;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 5px;
}
textarea {
  height: 80px;
}
#btn {
  width: 10em;
  height: 3em;
  border: 1px solid transparent;
  background-color: rgb(230, 43, 30);
  color: white;
}
</style>
