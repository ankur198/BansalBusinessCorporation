<template>
  <div class="contact">
    <div class="page">
      <div></div>
      <div class="body">
        <h1 class="mainheading"></h1>
        <div class="content">
          <div class="left">
            <div>
              <h3>Location</h3>
              <p>
                39,Veer Savarkar Block,
                <br />Vikas Marg Delhi-110092
              </p>
            </div>
            <div class="line"></div>
            <div>
              <h3>Contact</h3>
              <p>
                <a href="mailto:bsc43@hotmail.com">bsc43@hotmail.com</a>
                <br />
                <a href="mailto:bansal@bansalworld.in">bansal@bansalworld.in</a>
                <br />
                <a href="tel:011-49044230">011-49044230</a>/
                <a href="tel:+918130869001">8130869001</a>
              </p>
              <!-- </div>
              <div class="line"></div>-->
              <div class="icons">
                <a target="_blank" href="https://wa.me/919810020958" rel="noreferrer">
                  <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="whatsapp" />
                </a>
                <a
                  target="_blank"
                  href="https://linkedin.com/company/bansal-business-corporations"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
                    alt="linkedin"
                  />
                </a>
                <a target="_blank" href="https://goo.gl/maps/jqKqSwd76YWfX2qH6" rel="noreferrer">
                  <img src="https://img.icons8.com/color/48/000000/google-maps.png" alt="maps" />
                </a>
              </div>
            </div>
          </div>
          <div class="right">
            <h2>For more queries...</h2>
            <form action="https://getform.io/f/f43f0190-ba17-4ca3-a5cc-137b39cfc979" method="post">
              <input type="text" name="name" id="name" placeholder="Name" required />
              <input type="email" name="email" id="email" placeholder="Email" required />
              <input type="text" name="tel" id="mobile" placeholder="Mobile" required />
              <textarea name="msg" id="msg" placeholder="Your Text Here..." />
              <div>
                <input type="submit" value="Submit" class="btn" />
              </div>
            </form>
          </div>
        </div>
        <div></div>
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
  .body {
    display: grid;
    background: white;
  }
  // align-items: center;

  .content {
    display: flex;
    flex-direction: column-reverse;
    padding: 5px 0 0;
  }
}
.left {
  display: grid;
  grid-template-rows: auto 1px auto 1px auto;
  justify-content: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.3em;
  text-align: left;
  padding: 10px;

  .icons {
    display: flex;
    justify-content: space-evenly;
    padding: 10px 0;

    img {
      height: 30px;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
}
.right {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  font-family: "Candara";
  letter-spacing: 0.08em;
  text-transform: capitalize;
  line-height: 1.3em;
  overflow-wrap: break-word;
  form {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
  }
}
h2 {
  margin: 0;
  line-height: 1.2em;
  color: #081b33;
}
h3 {
  margin: 0.5em;
  margin-left: 0;
  color: #e54a35;
}

input,
textarea {
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
}
.btn {
  height: 3em;
  letter-spacing: 0.1em;
  border: 1px solid transparent;
  background-color: #081b33;
  color: white;
}
.line {
  border: 1px solid;
  height: 0px;
  border-radius: 50%;
}
.desktop {
  display: none;
}
@media only screen and (min-width: 500px) {
  .mobile {
    display: none;
  }
  .desktop {
    display: block;
  }
  .page {
    .body {
      .line {
        width: 0;
        height: unset;
      }
      .content {
        .left {
          grid-template-columns: auto 1px auto;
          grid-template-rows: auto;
          grid-gap: 10px;
        }
      }
    }
  }
}
@media only screen and (min-width: 700px) {
  .page .body {
    .line {
      height: 0;
      width: unset;
    }
    .content {
      flex-direction: row;
      justify-content: space-evenly;

      .left {
        grid-template-rows: auto 1px auto;
        grid-template-columns: auto;
        text-align: center;
      }
    }
  }
  input,
  textarea {
    padding: 10px;
    border: 1px solid gray;
    border-radius: 10px;
  }
}
</style>
