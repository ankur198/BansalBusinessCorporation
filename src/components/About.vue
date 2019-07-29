<template>
  <div class="about">
    <div class="gridBody">
      <div class="gridHead">
        <h1>About</h1>
        <p>Lorem took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>
      <div class="line"></div>
      <div class="gridIcon">
        <div>
          <i class="material-icons">assignment_late</i>
          200+
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
import { mapState } from "vuex";

export default {
  name: "about"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap");
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
