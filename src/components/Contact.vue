<template>
  <div class="contact">
    <div class="page">

    <div class="gridCont">
        <div class="left">
            <h2>Contact</h2>
            <h3>Location</h3>
            <p>39,Veer Savarkar Block,<br> Vikas Marg
                Delhi-110092</p>
            <h3>Contact</h3>
            <p>bsc43@hotmail.com <br>bansal@bansalworld.in<br>
                    011-49044230/ 8130869001</p>
        </div>
        <div class="right">
            <h2>Let's Chat.</h2>
            Name*<br>
            <input type="text" name="fname" id="fname" placeholder="First Name" required>
            <input type="text" name="lname" id="lname" placeholder="Last Name"><br>
            Email Address*<br>
            <input type="email" name="email" id="email" placeholder="Email" required> <br>
            How Can We Help?<br>
            <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Your Text Here..."></textarea><br>
            <input type="submit" value="Submit" class="btn"> 
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
<style scoped>
.gridCont{
            display:grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
        .left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-family: 'Candara';
            font-weight: 500;
            font-style: normal;
            font-size: 18px;
            letter-spacing: .08em;
            text-transform: uppercase;
            line-height: 1.3em;
        }
        .right{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: 'Candara';
            font-weight: 500;
            font-style: normal;
            font-size: 18px;
            letter-spacing: .08em;
            text-transform: capitalize;
            line-height: 1.3em;
        }
        h2{
            margin: 5px;
            font-family: calluna;
            font-weight: 400;
            font-style: normal;
            font-size: 35px;
            line-height: 1.2em;
            letter-spacing: -.01em;
            text-transform: none;
            color: #081b33;
        }
        h3{
            color:#e54a35;
            margin: 5px;
        }
        p{
            margin: 2px;
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
        .btn {
                width: 10em;
                height: 3em;
                letter-spacing: 0.1em;
                border: 1px solid transparent;
                background-color:#081b33;
                color: white;
        }
</style>
