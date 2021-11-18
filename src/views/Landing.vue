<template>
  <div class="landing">
    <head>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      />
    </head>
    <header>
      <ul class="NavItems">
        <li>
          <button class="burger">
            <img src="../assets/burgerMenu.jpg" alt="" />
          </button>
        </li>
        <li><a href="">Main</a></li>
        <li><a href="">About</a></li>
        <li><a href="">GammaCoin</a></li>
        <li><a href="">E-Auction</a></li>
        <li class="log-in" style="float: right">
          <a href="">Log In</a>
        </li>
      </ul>
    </header>
    <body>
      <div class="Welcome">
        <h1>Welcome to Gamma</h1>
        <h2>Get started with Gamma now!</h2>
      </div>
      <div class="login_fields">
        <div class="sectInp">
          <h3>Username</h3>
          <input type="text" name="username" id="" />
        </div>
        <div class="sectInp">
          <h3>Password</h3>
          <input type="text" name="password" id="" />
        </div>
      </div>
      <div class="botButtons">
        <button class="bot" id="submit"><h3>Submit</h3></button>
        <button class="bot" id="login"><h3>Log in</h3></button>
        <button class="bot" id="help"><h3>Need help?</h3></button>
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Landing",
  components: {},
};
</script>

<style lang="scss" scoped>
.landing {
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;

  min-height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(75, 24, 24, 0.58) 0%,
      rgba(3, 13, 52, 0.5) 68.75%,
      #141341 97.4%
    ),
    url("~@/assets/landing-bg.png");
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-size: 100%;
  background-repeat: no-repeat;
}

body {
  margin-left: 4vw;
  margin-right: 4vw;
}

h1 {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 5.5rem;
  color: #FCF6F6;
  text-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
}
h2 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 40px;
  padding-top: 25px;
  color: #FFFFFF;
  padding-bottom: 4.5vh;
}
h3 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 37px;
  color: #FFFFFF;
}
.login_fields {
  width: 45vw;
  display: flex;
  flex-direction: column;
  border: none;
  outline: none;
}
.botButtons {
  width: 45vw;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.bot {
  height: 2.5rem;
  box-shadow: 5px 10px 8px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  width: 25%;
  outline: none;
  border: none;
}
#submit {
  background: rgba(147, 216, 122, 0.7);
}
#login {
  background: rgba(255, 255, 255, 0.7);
}
#help {
  background: rgba(255, 249, 108, 0.7);
}
input {
  margin-top: 1vh;
  width: 100%;
  height: 3rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  margin-bottom: 25px;
  outline: none;
  border: none;
}
input,
select,
textarea {
  color: white;
  font-size: 1.5rem;
  padding-left: 15px;
  padding-right: 15px;
}
.NavItems {
  list-style-type: none;
  padding: 25px;

  overflow: hidden;
  font-weight: bold;
  font-size: 2.5vh;
}
.log-in {
  height: 30px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 5px 10px 8px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  float: right;
}
.log-in a {
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 2.5vh;
}
li {
  float: left;
  padding: 0 25px;
  margin: 0;
  height: 30px;
}
li a {
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;

  position: relative;
  top: 45%;
  -ms-transform: translateY(-45%);
  transform: translateY(-45%);
}
.burger {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: none;
}
.burger img {
  height: 25px;
  width: 25px;
}
</style>
